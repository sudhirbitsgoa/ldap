var express      = require('express'),
    passport     = require('passport'),
    bodyParser   = require('body-parser'),
    LdapStrategy = require('passport-ldapauth');
// https://console.jumpcloud.com/#/directories/ldap_server/5a66fbd9232e1102f7e438e7/details
var OPTS = {
  server: {
    url: 'ldap://ldap.jumpcloud.com:389',
    bindDN: 'uid=sbaru,ou=Users,o=5a66f92efd2d1dfd7867d1d7,dc=jumpcloud,dc=com',
    bindCredentials: 'sudhir',
    searchBase: 'o=5a66f92efd2d1dfd7867d1d7,dc=jumpcloud,dc=com',
    searchFilter: '(uid={{username}})'
  }
};

var app = express();

passport.use(new LdapStrategy(OPTS));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());

app.post('/login', passport.authenticate('ldapauth', {session: false}), function(req, res) {
  res.send({status: 'ok'});
});

app.listen(8081);
