<?php

namespace App\Http\Controllers\AuthUser;

use Cookie;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LogoutUserController extends Controller
{
    public function logout(){

        $cookie = Cookie::forget('jwt'); //to forget the cookie

        return response([
           'message' => 'userToken deleted successfully'
        ])->withCookie($cookie);  //the front-end doesn't have access to the cookie, cannot do any thing to the cookie
                                  //only thing that delete the cookie is the back-end
       }
}
