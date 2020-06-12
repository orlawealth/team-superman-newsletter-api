<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
  protected $table = 'topic';
  protected $primaryKey = 'id';
  protected $fillable = ['Name'];
  protected $hidden = ['created_at','updated_at'];
}