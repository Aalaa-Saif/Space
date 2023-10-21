<?php

namespace App\Http\Controllers\Auth;

use Auth;
use Illuminate\Http\Request;
use App\Traits\GeneralReturn;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;

class LoginController extends Controller
{
    use GeneralReturn;

    #Login Check
    public function login_check(Request $request){

        #validation

        //login
        $credentials = $request->only('email','password');

        if(!Auth::guard('web')->attempt($credentials)) {
            return response([
                'status' => false,
                'message'=> 'Invalid credentials'
            ], Response::HTTP_UNAUTHORIZED);
        }


        $user = Auth::user();
        $token = $user->createToken('token')->plainTextToken; //token that sanctum generate

        //here store token in cookie ..more secure
        $cookie = cookie('jwt', $token, 60*24); //1 day  //this laravel function .. generate jwt token
        $user = Auth::guard('web')->user();
        $user ->api_token = $token;
        return $this->returnData("success", 'user', $user)->withCookie($cookie);
        /*return response([
            'status' => true,
            'message' =>$token
        ])->withCookie($cookie);*/
    }
}
