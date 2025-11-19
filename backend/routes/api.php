<?php

use App\Http\Controllers\Api\DeviceController;
use App\Http\Controllers\Api\PresetController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/test', function () {
    return ['message' => 'API is working!'];
});

Route::apiResource('devices', DeviceController::class);

Route::apiResource('presets', PresetController::class)->only([
    'index',
    'show',
    'store'
]);
