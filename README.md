# im-twitter

Module de discussion par tweet pour J

## Credentials Twitter

Vous devez ajouter les clés suivantes à vos variables d'environnement ou dans un fichier `.env` à la racine du projet :
```
# Credentials Twitter
TWITTER_CONSUMER_KEY
TWITTER_CONSUMER_SECRET
TWITTER_ACCESS_TOKEN_KEY
TWITTER_ACCESS_TOKEN_SECRET

# Comma-separated list of phrases which will be used to determine what Tweets will be delivered on the stream
# Refer to https://developer.twitter.com/en/docs/tweets/filter-realtime/guides/basic-stream-parameters
TWITTER_TRACK

# Hostname et port de connexion MQTT
MQTT_HOST
MQTT_PORT
```
Il s'agit de vos credentials Twitter.

## Installation

Il suffit d'installer simplement im-twitter ainsi
```javascript
npm install
```
## Lancement

Pour lancer le programme il suffit de faire
```javascript
npm run start
```