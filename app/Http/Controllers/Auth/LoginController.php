<?php

namespace App\Http\Controllers\Auth;

use Auth;
use App\Models\Admin;
use Illuminate\Http\Request;
use App\Traits\GeneralReturn;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class LoginController extends Controller
{
    use GeneralReturn;

    #Login Check
    public function login_check(Request $request){

        #validation

      //login
        $credentials = $request->only('email','password');

        if(!Auth::guard('admin')->attempt($credentials)) {
            return response([
                'status' => false,
                'message'=> 'Admin Invalid credentials'
            ], Response::HTTP_UNAUTHORIZED);
        }


        $admin = Auth::guard('admin')->user();
        $token = $admin->createToken('token', ['role-admin'])->plainTextToken; //token that sanctum generate

        //here store token in cookie ..more secure
        $cookie = cookie('jwt', $token, null); //1 day  //this laravel function .. generate jwt token
        $admin = Auth::guard('admin')->user();
        $admin ->api_token = $token;
        return $this->returnData("admin success", 'admin', $admin)->withCookie($cookie);
    }
}
