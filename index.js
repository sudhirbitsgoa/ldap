var express      = require('express'),
    passport     = require('passport'),
    bodyParser   = require('body-parser'),
    LdapStrategy = require('passport-ldapauth');

var OPTS = {
  server: {
    url: 'ldap://0.0.0.0:389',
    bindDN: 'cn=admin,dc=lantronix,dc=com',
    bindCredentials: 'sudhir',
    searchBase: 'cn=mach10,dc=lantronix,dc=com',
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
