<?php

namespace App\Http\Controllers\Auth;

use Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminAuthController extends Controller
{
    // View Profile
    public function profile(Request $request){
        $user = Auth::user();
        return response()->json($user);
    }
}
