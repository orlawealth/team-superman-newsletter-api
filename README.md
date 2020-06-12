# TEAM-SUPERMAN

## A dockerized micro-service for subscribing for and sending newsletters

## Pre-Requisites

- MongoDB and database created
- Copy and paste your mongodb connection string in the .\NewsCompositionService\src\config\config.js file
- Copy and paste your mongodb connection string in the .\SubscriptionService\src\config.js file

## How to Install and run the application

- Clone this repository
- Open the EmailingService 
    * Run "npm install"
    * Run "npm start"
    * This service is served on http://localhost:7000
- Open the NewsCompositionService
    * Run "npm install"
    * Run "npm start"
    * This service is served on http://localhost:8000
- Open the SubscriptionService
    * Run "npm install"
    * Run "npm start"
    * This service is served on http://localhost:4000
- Open the NewsPageService
    * Run "npm install"
    * Run "npm start"
    * This service is served on http://localhost:5000

- Open your browser and go to http://localhost:5000
- Subscribe to our news letter by entering your email and clicking "subscribe"
- To create a newsletter go to http://localhost:5000
    * Enter author's name
    * Write your news
    * Click submit
- Open your email app and check your Inbox, you must have received our Newsletter! (The one you created anyway :) ). 

## API Documentation

- [Swagger Documentation on Heroku]()

## Technologies Used

- NodeJS / Express
- Mongo Database
- Swagger for API Documentation
- Heroku For Hosting

## Contributors

- [Omomurewa George-Ashiru](https://github.com/murewaashiru)
- [Ndubuisi Jr Chukuigwe](https://github.com/ndubuisijr)
- [Emmanuel Menyaga](https://github.com/mhizterkeyz)
