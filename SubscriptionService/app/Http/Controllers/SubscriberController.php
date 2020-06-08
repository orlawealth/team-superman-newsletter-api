<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subscriber;

class SubscriberController extends Controller
{
    public function index(Request $request)
    {
        $subscriber = Subscriber::where('Email', '=', $request->email)->first();
        if(!$subscriber) {
            $subscriber = new Subscriber();
            $subscriber->Email = $request->email;
        }
        $subscriber->Status = 1;
        $subscriber->save();
        return response()->json($subscriber);  
    }

    public function unsubscribe(Request $request)
    {
        $subscriber = Subscriber::where('Email', '=', $request->email)->first();
        if($subscriber) {
            $subscriber->Status = 0;
            $subscriber->save();
            return response()->json($subscriber);
        }  
        return response()->json(['error' => [
            'code' => 404,
            'message' => 'Not found',
        ]], 404);
    }
}
