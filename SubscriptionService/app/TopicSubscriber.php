<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TopicSubscriber extends Model
{
  protected $table = 'topic_subscriber';
  protected $primaryKey = 'id';
  protected $fillable = ['Topic', 'Subscriber','Status'];
  protected $hidden = ['created_at','updated_at'];
}