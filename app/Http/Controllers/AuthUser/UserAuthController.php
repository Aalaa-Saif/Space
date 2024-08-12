<?php

namespace App\Http\Controllers\AuthUser;

use Auth;
use File;
use App\Models\User;
use App\Models\Userpost;
use App\Traits\PhotoTrait;
use App\Models\Userpostimg;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Laravel\Sanctum\PersonalAccessToken;

class UserAuthController extends Controller
{
    use PhotoTrait;

    #get data from DB to profile page
    public function profile(Request $request){
         $user = Auth::guard('userApi')->user();

         //$post = Userpost::orderBy('created_at','DESC')->where('user_id',Auth::guard('userApi')->user()->id)->with('userpostimgs')->get();

        // $data = ["user"=>$user,"post"=>$post];
         //return response()->json($data);
         //return response()->json($user);

          $search = $request->search;
         //$search = $request->query('search');
         $pos = Userpost::orderBy('created_at','DESC')->where('user_id',Auth::guard('userApi')->user()->id)->with('userpostimgs');
         $post = $pos
         ->where('text', 'LIKE', "%{$search}%")
         ->get();
         $data = ["user"=>$user,"post"=>$post];
         return response()->json($data);
    }

    public function store_post(Request $request){
       $user_id = Auth::guard('userApi')->user()->id;
       if(!$request->text){
        $user_post = Userpost::create([
            'user_id' => $user_id,
            'text' => " ",
           ]);

            if($request->has('image')){
                foreach($request->file('image') as $img){
                    $img_ext = $img->extension();
                    $img_name = time().rand(1,4000).'.'.$img_ext;
                    $path = 'img//user/postimg';
                    $img ->move($path,$img_name);
                    Userpostimg::create([
                        'userpost_id' => $user_post->id,
                        'image' => $img_name
                    ]);
                }
            }

       }

       $user_post = Userpost::create([
        'user_id' => $user_id,
        'text' => $request->text,
       ]);

        if($request->has('image')){
            foreach($request->file('image') as $img){
                $img_ext = $img->extension();
                $img_name = time().rand(1,4000).'.'.$img_ext;
                $path = 'img//user/postimg';
                $img ->move($path,$img_name);
                Userpostimg::create([
                    'userpost_id' => $user_post->id,
                    'image' => $img_name
                ]);
            }
        }

        return response() ->json([
            "status"=>true,
            "msg"=>"success creats post",
        ]);
    }

    #for edit profile photo
    public function editPhoto(Request $request){
        $profile_update = User::find($request->id);
        if(!$profile_update)
        return response()->json([
            "status"=>false,
            "msg"=>"ID not Found"
        ]);

        if($request->has('photo')){
            $path = public_path('/img/user/img/'.$profile_update->photo);
            if(File::exists($path)){
                File::delete($path);
            }
           $img = $request->file('photo');
           $img_ext = $img->extension();
           $img_name = time().rand(1,4000).'.'.$img_ext;
           $path = 'img/user/img/';
           $img ->move($path,$img_name);
        }
        else {
            $img_name = $profile_update->photo;
        }

        $profile_update->photo = $img_name;
        $profile_update->update();
        return response()->json([
            "status"=>true,
            "msg"=>__('Photo Updated Successfully')
        ]);
    }

    #for edit profile name
    public function editName(Request $request){
        $profile_update = User::find($request->id);
        if(!$profile_update)
        return response()->json([
            "status"=>false,
            "msg"=>"ID not Found"
        ]);
        if($request->name != null){
            $profile_update->name = $request->name;
        }
        else{
            $profile_update->name = $profile_update->name;
        }
        $profile_update->update();

        return response()->json([
            "status"=>true,
            "msg"=>__('Name Updated Successfully')
        ]);

    }


    public function deletePost(Request $request){
        $delete = Userpost::find($request->id);
        if (!$delete)
        return response()->json([
            "status"=>false,
        ]);
            foreach($delete->userpostimgs as $img){
                $path = public_path('img/user/postimg/'.$img->image);
                if(File::exists($path)){
                 File::delete($path);
                }
            }

        $delete->delete();
        $delete->userpostimgs()->delete();
        return response()->json([
            "status"=>true,
            "id"=>$request->id
        ]);
    }

    public function editPost(Request $request){
        $edit = Userpost::find($request->id);
        if(!$edit){
            return response()->json([
                "status"=>false,
                "msg"=>"ID not Found"
            ]);
        }

        $edit = Userpost::select('id','text')->with('userpostimgs')->find($request->id);
        return response()->json($edit);
    }

    public function updatePost(Request $request){
        $update = Userpost::find($request->id);
        $input = $request->all();
        if(!$update)
        return response()->json([
            "status"=>false,
            "msg"=>"ID not Found"
        ]);
        if($request->has('image')){
            foreach($request->file('image') as $img){
                $img_ext = $img->extension();
                $img_name = time().rand(1,4000).'.'.$img_ext;
                $path = 'img/user/postimg';
                $img ->move($path,$img_name);

                Userpostimg::create([
                    'userpost_id' => $update->id,
                    'image' => $img_name
                ]);
            }
        }
        $update->update($input);

        return response()->json([
            "status"=>true,
            "msg"=>"update post done"
            //"msg"=>__('edit post Updated Successfully')
        ]);
    }

    public function deleteEditImgPost(Request $request){
        $id = Userpostimg::find($request->id);
        if (!$id)
        return response()->json([
            "status"=>false,
        ]);
            //foreach($delete->userpostimgs as $img){
                $path = public_path('img/user/postimg/'.$id->image);
                if(File::exists($path)){
                 File::delete($path);
                }
           // }

        $id->delete();

        return response()->json([
            "status"=>true,
            "id"=>$request->id
        ]);
    }


}
