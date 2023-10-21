<?php

namespace App\Http\Controllers\Auth;

use Cookie;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function logout(){

     $cookie = Cookie::forget('jwt'); //to forget the cookie

     return response([
        'message' => 'success'
     ])->withCookie($cookie);  //the front-end doesn't have access to the cookie, cannot do any thing to the cookie
                               //only thing that delete the cookie is the back-end
    }
}
