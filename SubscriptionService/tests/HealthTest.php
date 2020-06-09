<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class HealthTest extends TestCase
{
    /**
     * A basic test health.
     *
     * @return void
     */
    public function testHealth()
    {
        $this->json('GET', '/health')->seeJson([
            'status' =>'ok'
        ]);
    }
}
