<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\News;

class NewsController extends Controller
{
  public function getNews($userId)
  {
    $news = News::where('user', $userId)->get();
    return response()->json($news);
  }
  public function createNews(Request $request)
  {
    $this->validate($request, [
      'title' => 'required',
      'bodyText' => 'required',
      'user' => 'required'
    ]);
    $news = News::create([
      'title' => $request->title,
      'homeText' => $request->homeText,
      'bodyText' => $request->bodyText,
      'user' => $request->user,
    ]);

    return response()->json($news);
  }

  //
}
