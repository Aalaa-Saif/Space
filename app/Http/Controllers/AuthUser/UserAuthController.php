<?php

namespace App\Http\Controllers\AuthUser;

use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Laravel\Sanctum\PersonalAccessToken;

class UserAuthController extends Controller
{
    public function profile(Request $request){
         $user = Auth::guard('userApi')->user();
         return response()->json($user);
    }
}
