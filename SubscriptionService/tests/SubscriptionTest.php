<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

use Firebase\JWT\JWT;

class SubscriptionTest extends TestCase
{
    /**
     * A basic test to subscribe, unsubscribe and subscribers.
     *
     * @return void
     */
    public function testSubscribe()
    {
        $this->json('POST', '/subscribe', ['email' => 'test@testsubscribe.com'])
             ->seeJsonStructure([
                'id', 'Email', 'Status'
             ])->seeJsonContains([
                'Status' => 1
            ]);
    }

    /**
     * A basic test to subscribe, unsubscribe and subscribers.
     *
     * @return void
     */
    public function testUnsubscribe()
    {
        $this->json('POST', '/unsubscribe', ['email' => 'test@testsubscribe.com'])
             ->seeJsonStructure([
                'id', 'Email', 'Status'
             ])->seeJsonContains([
                 'Status' => 0
             ]);
    }

    /**
     * A basic test to subscribers.
     *
     * @return void
     */
    public function testsubscribers()
    {
        $token = JWT::encode([], env('JWT_SECRET'));
        $this->json('GET', '/subscribers', [], ['Authorization' => "Bearer $token", 'Content-Type' => 'application/json'])
            ->seeStatusCode(200)
            ->seeJsonStructure([
                '*' =>
                    [
                        'id',
                        'Email',
                        'Status'
                    ]
            ]);
    }
}
