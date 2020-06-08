# The News Composition Service

## This service allows you create and save your newsletter to a database

# Installation:

### Run

## composer install

### to install all required dependencies

# Usage:

### Copy the

## .env.example

### file into a new

## .env

### file in the root folder of this project, replace the

## DB_USERNAME and DB_PASSWORD

### wih the appropriate values.

### Run the following commands on your database terminal

## create Database NewsCompositionService;

### Then run

## php artisan migrate

### to migrate all changes. To serve this project locally, run

## php -S localhost:8000 -t public

## Endpoints available: 
### /api/news/{userId}/all: To get all news that have the userId as a user from the database table 
### /api/news/create: To create a news