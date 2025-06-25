<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\AdminAuthController;
use App\Http\Controllers\Page\PagesController;
use App\Http\Controllers\AuthUser\UserAuthController;
use App\Http\Controllers\AuthUser\LoginUserController;
use App\Http\Controllers\AuthUser\LogoutUserController;
use App\Http\Controllers\AuthUser\RegisterUserController;

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


    Route::get('/dapInfo',[PagesController::class,'dapInfo']);
    Route::get('/get_planet',[PagesController::class,'get_planet']);
    Route::get('/get_home',[PagesController::class,'get_home']);


    Route::post('/login_check',[LoginController::class,'login_check']);

    Route::group(['middleware' => 'auth:sanctum','type.admin'], function() {
        Route::get('/admin_profile',[AdminAuthController::class,'admin_profile']);
        Route::post('/admin_editPhoto',[AdminAuthController::class,'editAdminPhoto']);
        Route::post('/admin_editName',[AdminAuthController::class,'editAdminName']);
        Route::post('/admin_store_planet',[AdminAuthController::class,'store_planet']);
        Route::post('/admin_store_home',[AdminAuthController::class,'store_home']);

        Route::post('/admin_logout',[LogoutController::class,'logout']);
    });


    Route::post('/user_register',[RegisterUserController::class,'register']);
    Route::post('/user_check',[LoginUserController::class,'user_check']);


    Route::group(['middleware' => 'auth:sanctum','type.user'], function() {
        Route::post('/user_profile',[UserAuthController::class,'profile']);
        Route::post('/user_editPhoto',[UserAuthController::class,'editPhoto']);
        Route::post('/user_editName',[UserAuthController::class,'editName']);
        Route::post('/user_deletePost',[UserAuthController::class,'deletePost']);
        Route::post('/user_deleteEditImgPost',[UserAuthController::class,'deleteEditImgPost']);
        Route::post('/user_editPost',[UserAuthController::class,'editPost']);
        Route::post('/user_updatePost',[UserAuthController::class,'updatePost']);
        Route::post('/user_store_post',[UserAuthController::class,'store_post']);
        Route::get('/user_store',[RegisterUserController::class,'store']);
        Route::post('/user_logout',[LogoutUserController::class,'logout']);
    });

