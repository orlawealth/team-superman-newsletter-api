<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subscriber;

class SubscriberController extends Controller
{
    public function index(Request $request)
    {
        $subscriber = new Subscriber();
        $subscriber->Email = $request->email;
        $subscriber->Status = 1;
        $subscriber->save();
        return response()->json($subscriber);  
    }
}
