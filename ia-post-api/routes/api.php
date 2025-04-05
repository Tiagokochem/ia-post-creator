<?php

use App\Http\Controllers\IAController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// Lida com qualquer requisição OPTIONS para evitar erro CORS
Route::options('/{any}', function (Request $request) {
    return response()->json(['status' => 'OK']);
})->where('any', '.*');



Route::post('/generate-post', [IAController::class, 'generatePost']);
