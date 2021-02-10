<?php

use App\Http\Controllers\PagesController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [PagesController::class, 'index'])->name('homepage');

Route::post('fetch', [PagesController::class, 'fetch'])->name('data.fetch');
Route::get('fetch', [PagesController::class, 'fetch'])->name('data.fetch');
Route::get('wallet', [PagesController::class, 'wallet'])->name('coins');
Route::get('leaderboard', [PagesController::class, 'leaderboard'])->name('leaderboard');

Route::get('{any}', [PagesController::class, 'index']);
