<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
  protected $table = 'news';
  public $timestamps = true;
  protected $fillable = [
    'title', 'bodyText', 'homeText', 'user'
  ];
}
