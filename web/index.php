<?php

// web/index.php
require_once __DIR__.'/../vendor/autoload.php';

use Symfony\Component\HttpFoundation\Response;

$app = new Silex\Application();

$app->register(new Silex\Provider\TwigServiceProvider(), [
    'twig.path' => __DIR__.'/../src/views',
]);

$app->register(new Silex\Provider\UrlGeneratorServiceProvider());

$app->error(function (\Exception $e, $code) {
    return new Response($e->getMessage());
});

$app->get('/', function () use ($app) {
    return $app['twig']->render('index.twig', []);
})->bind('home');

$app->get('/projects', function () use ($app) {
    return $app['twig']->render('projects.twig', []);
})->bind('projects');

$app->run();
