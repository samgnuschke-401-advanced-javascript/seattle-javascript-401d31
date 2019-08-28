'use strict';

const superagent = require('superagent');
const User = require('../auth/users-model.js');

// Fetching token
// Fetching GOOGLE + USER
// creating new User
// sending back token

const authorize = (req) => {
  let code = req.query.code;

  console.log(`(1) CODE: ${code}`)

  return superagent.post('https://www.googleapis.com/oauth2/v4/token')
    .type('form')
    .send({
      code: code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.API_URL}/oauth`,
      grant_type: 'authorization_code'
    })
    .then(response => {
      let access_token = response.body.access_token;
      console.log(`(2) ACCESS TOKEN: ${access_token}`)
      return access_token;
    })
    .then(token => {
      return superagent.get('https://www.googleapis.com/plus/v1/people/me/openIdConnect')
        .set('Authorization', `Bearer ${token}`)
        .then(response => {
          let user = response.body;
          user.access_token = token;
          console.log(`(3) FETCHED GOOGLE USER: ${user}`)
          return user;
        })
    })
    .then(oauthUser => {
      console.log(`(4) CREATE OUR USER`);
      return User.createFromOauth(oauthUser.email);
    })
    .then(actualUser => {
      console.log('(5) Our own user ...', actualUser);
      return actualUser.generateToken();
    })
    .catch(err => console.log(err));
};

module.exports = { authorize };