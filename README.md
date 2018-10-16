# DVNA
Home damn vulnerable nodeJS application. 
This project can be used for testing the scanner service and Guardian.

### Prerequisite 

Installation : 

* npm : node package manager
* NodeJS : server run time environment
* mySQL : database to simulate sql injection

Create the user database using by server.js

* user : nodejs
* password : nodejs

Execute the script in the root folder to populate the database by executing the folowing command :

```
./reloadDatabase.sh <user> <password>
```

### Run

To run the server you need to execute in the root folder : 

```
node server.js
```

The server will listening all request coming throught the port 8000

### Customisation

* NodeJS port : in server.js modify the port variable at the line 14
* MySQL credentials : in database/mysql/mysql_db.js, modify the connection object with your credentials



