'use strict';

const User = require('../model/user.js');
const superagent = require('superagent');

module.exports = {
  authorize: (req) => {
    let code = req.query.code
    console.log('CODE:', code)
    // send a request to auth service for access token
    // send a request for user info
    // check if user exists
    // -> create a user
    // generating a token 

    return superagent.post('https://www.googleapis.com/oauth2/v4/token')
      .type('form')
      .send({
        code: code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: `${process.env.API_URL}/oauth`,
        grant_type: 'authorization_code',
      })
      .then(response => {
        let access_token = response.body.access_token;
        return superagent.get('https://www.googleapis.com/plus/v1/people/me/openIdConnect')
          .set('Authorization', `Bearer ${access_token}`)
          .then(response => {
            let user = response.body;
            user.access_token = token;
            return user;
          })
      })
      .then(oauthUser => {
        // create our own User?
        return User.createFromOauth(oauthUser.email);
      })
      .then(ourUser => {
        return ourUser.generateToken();
      })
      .catch(error => error);

  }
}
