import dotenv from 'dotenv';
dotenv.config();
import TwitterAPI from "twitter";
import mqtt from 'mqtt';

let client = new TwitterAPI({
  "consumer_key": process.env.TWITTER_CONSUMER_KEY,
  "consumer_secret": process.env.TWITTER_CONSUMER_SECRET,
  "access_token_key": process.env.TWITTER_ACCESS_TOKEN_KEY,
  "access_token_secret": process.env.TWITTER_ACCESS_TOKEN_SECRET
});

console.log("Création du client Twitter...");
let stream = client.stream('statuses/filter', { track: `${process.env.TWITTER_TRACK}` });

stream.on('data', function (tweetReceived) {
  console.log("On a reçu un tweet");
  let payload = JSON.stringify({ 'user_name': tweetReceived.user.name, 'screen_name': tweetReceived.user.screen_name, 'text': tweetReceived.text, 'created_at': tweetReceived.created_at });
  console.log("Payload : ");
  console.log(payload);
  clientMQTT.publish('im/command/twitter', payload);
});

stream.on('error', function (error) {
  throw error;
});


const clientMQTT = mqtt.connect(`ws://${process.env.MQTT_HOST}:${process.env.MQTT_PORT}`, { clientId: 'twitter_' + Math.random().toString(16).substr(2, 8) })

clientMQTT.on('connect', function () {
  clientMQTT.subscribe('im/command/twitter');
})



