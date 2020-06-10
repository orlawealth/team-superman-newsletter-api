# Team Superman - Newsletter - Subscription Service

Subscription service have a list of emails, you can subscribe, unsubscribe and get all in the list

## How to run this service with Docker

Just run following commands

```bash
docker build -t subscription .
docker-compose up
```

Whether you need to create tables in mysql

```bash
docker-compose exec subscription php artisan migrate
```

## How to run on your local machine

You need to have PHP, composer and mysql. First you need copy .env.example to be .env and set your mysql configurations. Run the following commands

```bash
composer install
php -S localhost:8000 -t public
```

Then you can use three endpoints.

## What endpoints are available

We just have 3 endpoint and {topic} is a topic you want to subscribe or get information

1. /{topic}/subscribe you can send a email to subscribe. Parameter email and response is id, Email and Status
2. /{topic}/unsubscribe you can unsubscribe a email. Parameter email and response is id, Email and Status
3. /{topic}/subscribers you can get all subscribers with status 1. Just need to send a Bearer token (you need to know the secret to generate a JWT) and respose object array with id, Email and Status

## How to test

We have created a set of test with phpunit inside tests folder. Just run

```bash
php vendor/bin/phpunit
```

## Support

You can send an email to ajdelgados@gmail.com