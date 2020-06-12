<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/health', function () use ($router) {
  return response()->json(["status" => "ok"]);
});
$router->post('/{topicRequest}/subscribe', 'SubscriberController@index');
$router->post('/{topicRequest}/unsubscribe', 'SubscriberController@unsubscribe');

$router->group(
    ['middleware' => 'jwt.auth'], 
    function() use ($router) {
        $router->get('/{topicRequest}/subscribers', 'SubscriberController@subscribers');
    }
);
