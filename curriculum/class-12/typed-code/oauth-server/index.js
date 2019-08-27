'use strict';

const express = require('express');
const superagent = require('superagent');
const app = express();

app.use(express.json());

app.get('/oauth', authorize);

// What do we need in our request?
// These should be stored in .env
// Token URL
const googleTokenUrl = 'https://www.googleapis.com/oauth2/v4/token';
// API URL
const googleApiUrl = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';
// Client id
const CLIENT_ID = '893281997452-j2o1a9cd0bmkle5l3987p32mbac84c6p.apps.googleusercontent.com';
// Client secret
const CLIENT_SECRET = 'NdSbvkVujjGTZ7qGgQIsZUSX';
// redirect URL
const API_URL = 'http://localhost:3000/oauth';


function authorize(req, res) {
  // grab the code from our req.query
  let code = req.query.code;

  // make a request to google Oauth
  return superagent.post(googleTokenUrl)
    .type('form')
    .send({
      code: code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: API_URL,
      grant_type: 'authorization_code'
    })
    .then(response => {
      let access_token = response.body.access_token;
      console.log('2 ACCESS_TOKEN', access_token);
      return access_token;
    })
    .then(token => {
      return superagent.get(googleApiUrl)
        .set('Authorization', `Bearer ${token}`)
        .then(response => {
          let user = response.body
          console.log(`USER: ${user}`)
          res.status(200).json(user);
        })
        .catch(err => console.error('error', err))
    })
    .catch(err => console.error('error', err));
  // -> return an access_token
  // make a request to google API
  // -> google user 
}

app.listen(3000, () => {
  console.log('Oauth Server up on 3000');
});