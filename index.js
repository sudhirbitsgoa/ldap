var express      = require('express'),
    passport     = require('passport'),
    bodyParser   = require('body-parser'),
    LdapStrategy = require('passport-ldapauth'),
    fs           = require('fs');
// https://console.jumpcloud.com/#/directories/ldap_server/5a66fbd9232e1102f7e438e7/details
var OPTS = {
  server: {
    url: 'ldaps://ldap.lantronix.com',
    bindDN: 'cn=admin,dc=lantronix,dc=com',
    bindCredentials: 'sudhir',
    searchBase: 'cn=mach10,dc=lantronix,dc=com',
    searchFilter: '(uid={{username}})',
    tlsOptions: {
      ca: [fs.readFileSync('/etc/ldap/ca_certs.pem')]
    }
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
