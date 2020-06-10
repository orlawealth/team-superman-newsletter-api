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
    News::create([
      'title' => $request->title,
      'homeText' => $request->homeText,
      'bodyText' => $request->bodyText,
      'user' => $request->user,
    ]);

    $markup = [];
    $markup['title'] = '<h1>' . $request->title . '</h1>';
    if ($request->homeText) {
      $markup['homeText']  = '<p>' . $request->homeText . '</p>';
    }
    $markup['bodyText'] = '<p>' . $request->bodyText . '</p>';
    return response()->json($markup);
  }
}
