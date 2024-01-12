<?php

namespace App\Http\Controllers\AuthUser;

use App\Models\User;
use App\Traits\PhotoTrait;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class RegisterUserController extends Controller
{
    use PhotoTrait;

    public function register (Request $request){
        $file_name = $this->savephoto($request->photo,'img/user/img');

        $user= User::create([
            "name" => $request->name,
            "email" =>$request->email,
            "password" => Hash::make($request->password),
            "photo"=>$file_name,
        ]);

        return response()->json([
            "status"=>true,
            "msg"=>"User added successfully",
        ]);
    }
}
