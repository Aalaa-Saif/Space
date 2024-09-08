<?php

namespace App\Http\Controllers\AuthUser;

use Auth;
use App\Models\User;
use Illuminate\Http\Request;
use App\Traits\GeneralReturn;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\userRequest;

class LoginUserController extends Controller
{
    use GeneralReturn;

    #Login Check
    public function user_check(userRequest $request){

        #validation

       //login
       $credentials = $request->only('email','password');

       if(!Auth::guard('web')->attempt($credentials)) {
           return response([
               'status' => false,
               'message'=> 'Admin Invalid credentials'
           ], Response::HTTP_UNAUTHORIZED);
       }

       $user = Auth::guard('web')->user();
       $token = $user->createToken('token', ['role-user'])->plainTextToken; //token that sanctum generate

       //here store token in cookie ..more secure
       $cookie = cookie('jwt', $token, null); //1 day  //this laravel function .. generate jwt token
       $user = Auth::guard('web')->user();
       $user ->api_token = $token;
       return $this->returnData("user success", 'user', $user)->withCookie($cookie);

    }
}
