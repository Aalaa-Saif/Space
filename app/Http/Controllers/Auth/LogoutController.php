<?php

namespace App\Http\Controllers\Auth;

use Cookie;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function logout(Request $request){

        $cookie = Cookie::forget('jwt'); //to forget the cookie

        return response([
           'message' => 'userToken deleted success'
        ])->withCookie($cookie);  //the front-end doesn't have access to the cookie, cannot do any thing to the cookie
                                  //only thing that delete the cookie is the back-end

       // $user->tokens()->where('id', $tokenId)->delete();

        /*$user = request()->user();
        $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();
        return  $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();*/
        //$user = request()->user();
        //return  $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();
       }
}
