<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\AdminAuthController;
use App\Http\Controllers\Page\DepartmentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::group(['namespace' => 'Page'], function() {
    Route::get('/dapInfo',[DepartmentController::class,'dapInfo']);
});

Route::group(['namespace' => 'Auth'], function() {

    Route::post('/login_check',[LoginController::class,'login_check']);

    Route::group(['middleware' => 'auth:sanctum'], function() {
        Route::get('/admin_profile',[AdminAuthController::class,'profile']);
        Route::post('/admin_logout',[LogoutController::class,'logout']);
    });

});
