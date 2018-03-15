PRESTO UI
==

Web-UI component of the Presto app.

This _README_ will go over the functionalities of the app from the Front-End point of view.
We will start by defining the API functions created in the app and how to use them, then talk
about forms and their input fields.


**Running the App:**

1. Clone the repo: `git clone git@github.com:rawad663/presto.git`
2. Install the app dependencies:  `npm install`
3. Run the app:  `npm`


API Call Functions
--


The following functions are specified to make AJAX calls to the server using axios:

- aGet(route)
```
const aGet = route => axios.get(route);
```
- aPost(route, postData)
```
const aPost = (route, postData_ => axios.post(route, postData);
```
- aPut(route, putData)
```
const aPut = (route, putData) => axios.put(route, putData);
```
- aDelete(route)
```
const aDelete = route => axios.delete(route);
```

Form Input Fields
--


#### Sign Up (Customer and Restaurants):

- First Name: _String_
- Last Name: _String_
- Email: _String_
- User Type: `"customer" || "restaurant"`
- Password: _String_
- Confirm Password: _String_


**Additional Fields for Restaurant:**

- Restaurant Name: _String_
- Description: _String_
- Address: _String_
- Postal Code: _String_
- Cover Image (_coming soon..._)
 
  
(TODO: Add more form info)
