<?php

namespace App\Http\Controllers\Page;

use App\Models\Department;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DepartmentController extends Controller
{
    public function dapInfo(){
       $classinfo = Department::select('id','name')->get();
       return response()->json($classinfo);
    }
}
