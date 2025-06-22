<?php

namespace App\Http\Controllers\Page;

use App\Models\Home;
use App\Models\Planet;
use App\Models\Department;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PagesController extends Controller
{
    public function dapInfo(){
       $classinfo = Department::select('id','name')->get();
       return response()->json($classinfo);
    }

    public function get_planet(){
        $getPlanet = Planet::all();
        return response()->json($getPlanet);
    }

    public function get_home(){
        $getHome = Home::all();
        return response()->json($getHome);
    }
}
