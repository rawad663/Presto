PRESTO UI
--

Web-UI component of the presto application.


API Call Functions
--

The following functions are specified to make AJAX calls to the server
using axios:

- aGet(route)
- aPost(route, postData)
- aPut(route, putData)
- aDelete(route)

API Post Form Data
--

``` javascript
// Sign Up
const postData = {
    username: String
    firstName: String,
    lastName: String,
    email: String,
    userType: String ("customer" || "restaurant")
    password: String
}

```
``` javascript
// Customer Reservations
const postData = {
   
}

```