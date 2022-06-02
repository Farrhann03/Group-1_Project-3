# Group-1_Project-3
Supper Makan Apa?

For current list of location
YARC:  http://localhost:3000/public/location (GET)

Add new location to database 
YARC:  http://localhost:3000/user/newlocation  (POST)
payload: (example) Please use an actual address cos this writes into the database.
  {
    "locationId": 11,
    "name": "Coffee Smith",
    "address": "North Point City",
    "located_at": "North",
    "cuisineId": "null",
    "priceId": "null"
  }

Edit current location 
YARC:  http://localhost:3000/user/location (POST)
payload: (example) Please use an actual address cos this writes into the database.
  {
    "locationId": 10,
    "name": "Chong Pang Nasi Lemak",
    "address": "447 Sembawang Road Singapore 758404",
    "located_at": "North",
    "cuisineId": 4,
    "priceId": 1
  }

Filter restaurants location 
YARC: http://localhost:3000/public/location/East (Get)
change the last field to either North, South, East, West, Central to get locations.
