# shopify-backend-challenge

## Description

Backend features for a logistics company handling tennis rackets. This application focuses on back end features utilizing Express and Sequelize to store data and use it. This application provides full backend CRUD functionality for both the tennis rackets and warehouses as well as the ability to assign item to certain warehouses.

Feature included: ability to create a warehouse/locations and assign tenis racket to a specific location

## Technologies
- JavaScript
- Express
- Node
- Mysql
- Sequelize
## Functionality
![API routes being tested using Insomnia](./assets/shopify.gif)
## Installation (if Local Functionallity Desired)
    
1. Clone the repo onto your local machine
2. Setup a ```.env``` file with mysql login credentials
3. Open integrated terminal
4. Run ```npm i``` to install dependencies
5. To access your MySQL database, in your terminal enter ```mysql -u root -p```
6. Run the schema file usign ```db/schema.sql``` after connecting to mysql and exit using ```quit```
7. Run ```npm run seed``` to seed the database
8. Run ```npm start``` to boot up the server
9. Connect to ```http://localhost:3000``` in your browser
## Author 
- Takara Truong

## Github Link

* https://github.com/truont2/shopify-backend-challenge