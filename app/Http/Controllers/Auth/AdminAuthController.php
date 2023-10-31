<?php

namespace App\Http\Controllers\Auth;

use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Laravel\Sanctum\PersonalAccessToken;

class AdminAuthController extends Controller
{
    public function profile(Request $request){
        $admin = Auth::guard('adminApi')->user();
       // $admin = auth()->user();
      // $token = PersonalAccessToken::where('token', $hashedToken)->first();
      //$admin = auth('sanctum')->user();
        return response()->json($admin);
    }
}
