var SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config();

var scopes = ['user-read-private', 'user-read-email'],
  redirectUri = process.env.REDIRECT_URI,
  clientId = process.env.CLIENT_ID,
  state = 'login';

var spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  redirectUri: redirectUri,
});

var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

console.log(authorizeURL);