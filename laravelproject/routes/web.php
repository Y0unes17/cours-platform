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
    return view('welcome');
});
Route::get('login','Api\CompteController@logs');
Route::get('sigup','Api\CompteController@store');
Route::get('cours','Api\CoursController@store');
Route::get('coursd','Api\CoursController@destroy');

/*Route::get('/login', function () {
    return view('login');
});*/
Route::get('/prof', function () {
    return view('prof');
});
/*Route::get('/cours', function () {
    return view('prof');
});*/
Route::get('/etudiant', function () {
    return view('etudiant');
});
Route::get('/test', function () {
    return view('etudiant');
});