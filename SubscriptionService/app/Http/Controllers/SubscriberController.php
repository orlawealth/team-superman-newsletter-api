<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subscriber;
use App\Topic;
use App\TopicSubscriber;

class SubscriberController extends Controller
{
    public function index(Request $request, $topicRequest)
    {
        $this->validate($request, [
            'email' => 'required|email',
        ]);

        $subscriber = Subscriber::where('Email', '=', $request->email)->first();
        if(!$subscriber) {
            $subscriber = new Subscriber();
            $subscriber->Email = $request->email;
            $subscriber->Status = 1;
            $subscriber->save();
        }

        $topic = Topic::where('Name', '=', $topicRequest)->first();
        if(!$topic) {
            $topic = new Topic();
            $topic->Name = $topicRequest;
            $topic->save();
        }

        $topicSubscriber = TopicSubscriber::where('Topic', $topic->id)->where('Subscriber', $subscriber->id)->first();
        if(!$topicSubscriber) {
            $topicSubscriber = new TopicSubscriber();
            $topicSubscriber->Topic = $topic->id;
            $topicSubscriber->Subscriber = $subscriber->id;
        }
        $topicSubscriber->Status = 1;
        $topicSubscriber->save();

        return response()->json(['id'=> $topicSubscriber->id, 'Email'=> $subscriber->Email, 'Status' => $topicSubscriber->Status]);
    }

    public function unsubscribe(Request $request, $topicRequest)
    {
        $this->validate($request, [
            'email' => 'required|email',
        ]);
        
        $subscriber = Subscriber::where('Email', '=', $request->email)->first();
        if($subscriber) {

            $topic = Topic::where('Name', '=', $topicRequest)->first();
            if(!$topic) {
                $topic = new Topic();
                $topic->Name = $topicRequest;
                $topic->save();
            }

            $topicSubscriber = TopicSubscriber::where('Topic', $topic->id)->where('Subscriber', $subscriber->id)->first();
            if(!$topicSubscriber) {
                $topicSubscriber = new TopicSubscriber();
                $topicSubscriber->Topic = $topic->id;
                $topicSubscriber->Subscriber = $subscriber->id;
            }
            $topicSubscriber->Status = 0;
            $topicSubscriber->save();

            return response()->json(['id'=> $topicSubscriber->id, 'Email'=> $subscriber->Email, 'Status' => $topicSubscriber->Status]);
        }

        return response()->json(['error' => [
            'code' => 404,
            'message' => 'Not found',
        ]], 404);
    }

    public function subscribers($topicRequest) {
        $topic = Topic::where('Name', $topicRequest)->first();
        if($topic) {
            $subscribers = [];

            $topicSubscribers = TopicSubscriber::where('Topic', $topic->id)->where('Status', 1)->get();

            foreach($topicSubscribers as $topicSubscriber) {
                $subscriber = Subscriber::find($topicSubscriber->Subscriber);
                if($subscriber) {
                    $subscribers[] = ['id' => $topicSubscriber->id, 'Email' => $subscriber->Email, 'Status' => $topicSubscriber->Status];
                }
            }

            return response()->json($subscribers);
        }

        return response()->json([]);
    }
}
