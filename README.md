### set up TLS/ startTLS
follow the instruction in https://www.digitalocean.com/community/tutorials/how-to-encrypt-openldap-connections-using-starttls#configure-openldap-to-use-the-certificate-and-keys

To enable SSL over ldap
add this 

In /etc/default/slapd make sure services contains ldaps:///:
SLAPD_SERVICES="ldap:/// ldapi:/// ldaps:///"

```
ldapwhoami -H ldaps:// -x
```
should return 
```
anonymous
```