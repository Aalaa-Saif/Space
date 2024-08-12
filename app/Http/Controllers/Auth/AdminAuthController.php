<?php

namespace App\Http\Controllers\Auth;

use Auth;
use File;
use App\Models\test;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Laravel\Sanctum\PersonalAccessToken;

class AdminAuthController extends Controller
{

    public function getTest(){

        test::all();

        $edit = test::all();
        return response()->json($edit);

    }

    public function postTest(Request $request){
        $post = test::find($request->id);
        if(!$post){
            return response()->json([
                "status"=>false,
                "msg"=>"ID not Found"
            ]);
        }

        if($request->text != null){
            $post->text = $request->text;
        }
        else{
            $post->text = $post->text;
        }

        if($request->info != null){
            $post->info = $request->info;
        }
        else{
            $post->info = $post->info;
        }

        if($request->word != null){
            $post->word = $request->word;
        }
        else{
            $post->word = $post->word;
        }
        $post->update();


    }

    public function profile(Request $request){
        // $admin = auth()->user();
       // $token = PersonalAccessToken::where('token', $hashedToken)->first();
       //$admin = auth('sanctum')->user();

        $admin = Auth::guard('adminApi')->user();
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


}
