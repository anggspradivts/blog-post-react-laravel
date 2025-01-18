<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
  return view("Welcome");
});

Route::post('/signup', AuthController::class, "signup");