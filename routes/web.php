<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::prefix('api')->group(function () {
    Route::post('/authenticate', 'AuthenticationController@authenticate');
    
    Route::prefix('users')->group(function () {
        Route::get('/all', 'UserController@getAll');
    });
});