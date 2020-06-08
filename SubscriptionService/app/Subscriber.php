<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subscriber extends Model
{
  protected $table = 'Subscriber';
  protected $primaryKey = 'id';
  protected $fillable = ['Email','Status'];
  protected $hidden = ['created_at','updated_at'];
}