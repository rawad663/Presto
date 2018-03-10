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

Sign Up Form Inputs (Customer & Restaurant):

- First Name
- Last Name
- Email
- Password

Additional Inputs for Restaurant:

- Address
- Postal Code
- Restaurant Name
- Description

Example Post request for Register:

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
 
Example of a new LikedRestaurant
``` javascript
// postData for /likedrestaurants/
const postData = {
    "restaurant_id": "12",
    "customer_username": "example@example.com"
}
```
 
Example of a new Customer Reservation
``` javascript
// postData for /reservation
const postData = {
   "customer_username": "example@example.com",
   "reservation_date": "some date value",
   "restaurant_id": "5"
}

```