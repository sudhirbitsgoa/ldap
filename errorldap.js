var ldap = require('ldapjs');

var ldap = require('ldapjs');
var client = ldap.createClient({
  url: 'ldap://127.0.0.1:389'
});

client.on('error', function(e) {
  console.log('the error is', e);
});

client.once('connect', function(e){
  console.log('the connection is done');
});

// client.destroy();
// var server = ldap.createServer();

// server.search('ou=mach10', function(req, res, next) {
//   var obj = {
//     dn: req.dn.toString(),
//     attributes: {
//       objectclass: ['organization', 'top'],
//       o: 'mach10'
//     }
//   };

//   if (req.filter.matches(obj.attributes))
//     res.send(obj);

//   res.end();
// });

// server.listen(12389, function(er, a) {
//   console.log('LDAP server listening at %s', server.url);
// });

// server.on('error', function(err) {
//   console.log('the error is',err)
// })