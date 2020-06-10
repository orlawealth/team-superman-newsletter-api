<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Jobs\SendEmail;
use App\Http\Controllers\Controller;
use App\FailedJobs;
use App\Mail\EmailForQueuing;
use Illuminate\Support\Facades\Validator;

class JobController extends Controller
{
    /**
     * Enqueue jobs
     */
    public function enqueue(Request $request)
    {
        $error_messages = [
            'from.regex' => 'enter a valid sender e-mail address!',
            'to.regex' => 'enter a valid receiver e-mail address!',
            'from.required' => 'sender e-mail address is required!',
            'to.required' => 'receiver e-mail address is required!',
        ];

        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'from' => 'required|regex:/(.+)@(.+)\.(.+)/i',
            'to' => 'required|regex:/(.+)@(.+)\.(.+)/i',
            'subject' => 'required|max:255',
            'message' => 'required',
        ],$error_messages);

        if ($validator->fails()) {
            return response()->json(['status' => 'fail', 'message' => $validator->errors()], 400);
        }

        $details = $request->all();
        $emailJob = (new SendEmail($details))->delay(Carbon::now()->addSeconds(1));
        dispatch($emailJob);

        return response()->json(['status' => 'queued', 'message' => 'message queued for sending'], 200);
    }

    public function failed()
    {
        $jobs = FailedJobs::all();

        return response()->json(['status'=>'ok','message'=>$jobs], 200);
    }
}
