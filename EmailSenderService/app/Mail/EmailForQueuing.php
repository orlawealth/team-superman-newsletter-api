<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EmailForQueuing extends Mailable
{
    use Queueable, SerializesModels;

    protected $email_data;

    public function __construct($data)
    {
        $this->email_data = $data;
    }
     /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $address = $this->email_data['from'];
        $name    = $this->email_data['name'];
        $subject = $this->email_data['subject'];
        $message = $this->message['message'];
        return $this->from($address, $name )
            ->subject($subject)
            ->view('mails.email',array('message'=> $message));
    }
}
