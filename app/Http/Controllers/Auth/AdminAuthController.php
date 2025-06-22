<?php

namespace App\Http\Controllers\Auth;

use Auth;
use File;
use App\Models\Home;
use App\Models\test;
use App\Models\Planet;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Laravel\Sanctum\PersonalAccessToken;

class AdminAuthController extends Controller
{

    public function postTest(){

    }

    public function profile(Request $request){
        // $admin = auth()->user();
       // $token = PersonalAccessToken::where('token', $hashedToken)->first();
       //$admin = auth('sanctum')->user();

        $admin = Auth::guard('adminApi')->user();
      /*  $planet = Planet::create([
            'text' => $request->text,
        ]);*/
       // $planet = Planet::all()->where('admin_id',Auth::guard('adminApi')->user()->id);
        //$data = ["admin"=>$admin,"planet"=>$planet];
        return response()->json($admin);
    }

    public function edit(Request $request){
        $profile_update = Auth::guard('adminApi')->find($request->id);
        if(!$profile_update)
        return response()->json([
            "status"=>false,
            "msg"=>"ID not Found"
        ]);

         //update
         if($request->has('photo')){
            $path = public_path('/img/admin/img/'.$profile_update->photo);
            if(File::exists($path)){
                File::delete($path);
            }
           $img = $request->file('photo');
           $img_ext = $img->extension();
           $img_name = time().rand(1,4000).'.'.$img_ext;
           $path = 'img/admin/img';
           $img ->move($path,$img_name);
        }
        else {
            $img_name = $profile_update->photo;
        }
        $profile_update->name = $request->name;
        $profile_update->photo = $img_name;
        $profile_update->update();

        return response()->json([
            "status"=>true,
            "msg"=>__('AdminUpdateProfileSuccessfully')
        ]);

    }

    public function store_planet(Request $request){
        $admin_id = Auth::guard('adminApi')->user()->id;
        if(!$request->text){
         $admin_planet = Planet::create([
             'text' => " ",
            ]);

            }
            $admin_planet = Planet::create([
                'text' => $request->text,
               ]);

                return response() ->json([
                    "status"=>true,
                    "msg"=>"success planet data uploaded",
                ]);

        }
    public function store_home(Request $request){
        $admin_id = Auth::guard('adminApi')->user()->id;
        if(!$request->text){
         $admin_planet = Home::create([
             'text' => " ",
             'text2' => " ",
             'text3' => " ",
            ]);

            }
            $admin_planet = Home::create([
                'text' => $request->text,
                'text2' => $request->text2,
                'text3' => $request->text3,
               ]);

                return response() ->json([
                    "status"=>true,
                    "msg"=>"success planet data uploaded",
                ]);

        }

}
