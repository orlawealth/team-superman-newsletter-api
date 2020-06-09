<?php

/** @var \Laravel\Lumen\Routing\Router $router */


$router->get('/', function () use ($router) {
  return $router->app->version();
});
$router->group(['prefix' => 'api'], function () use ($router) {
  $router->get('news/{userId}/all', 'NewsController@getNews');
  $router->post('news/create', 'NewsController@createNews');
});
