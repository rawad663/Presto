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
// postData for /register/resto/
 
{
    "name": "Shakers",
    "description": "good ass food",
    "user": {
        "username": "bou",
        "email": "teez@gmail.com",
        "first_name": "Rony",
        "last_name": "Azrak",
        "password": "pass1234"
    }
}
  
// postData for /register/customer/
 
{
    "username": "bou",
    "email": "teez@gmail.com",
    "first_name": "Rony",
    "last_name": "Azrak",
    "password": "pass1234"
}

```
``` javascript
// Customer Reservations
const postData = {
   
}

```