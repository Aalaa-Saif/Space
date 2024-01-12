<?php

namespace App\Http\Controllers\Auth;

use App\Models\Admin;
use App\Traits\PhotoTrait;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    use PhotoTrait;

    public function register (Request $request){
        $file_name = $this->savephoto($request->photo,'img/admin/img');

        $user= Admin::create([
            "name" => $request->name,
            "email" =>$request->email,
            "password" => Hash::make($request->password),
            "photo"=>$file_name,
        ]);

        return response()->json([
            "status"=>true,
            "msg"=>"Admin added successfully",
        ]);
    }
}
