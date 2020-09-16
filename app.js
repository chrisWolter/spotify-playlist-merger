const SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config();

const scopes = ['user-read-private', 'user-read-email'],
  redirectUri = process.env.REDIRECT_URI,
  clientId = process.env.CLIENT_ID,
  state = 'login';

const spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  redirectUri: redirectUri,
});

const authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

console.log(authorizeURL);
