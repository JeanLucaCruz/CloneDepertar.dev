<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Cache;

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

Route::get('/produtos', function(Request $request){

    return response()->json(['success' => true, 'msg' => "Bem-vindo a API de produtos"]);

});


// ADICIONAR PRODUTO NA API
Route::post('/produtos', function(Request $request){

    $produtos = json_decode(Cache::get('produtos'));

    $produto = $request->json()->all();
    $produtos[] = $produto;

    Cache::put('produtos', json_encode($produtos));

    return response()->json(['success' => true, 'msg' => "Produto adicionado com sucesso"]);
});

// PEGAR TODOS OS PRODUTOS DO CACHE
Route::get('/produtos/all', function(){

    $produtos = Cache::get('produtos');

    return response()->json(['produtos' => json_decode($produtos)]);

});

// PEGAR UM PRODUTO DO CACHE

Route::get('/produtos/{id}', function($id){

    $produtos = json_decode(Cache::get('produtos'), true);

    foreach($produtos as $produto){
        if ($produto['id'] == $id) {
            return response()->json(['produto' => $produto]);
        }
    }

    return response()->json(['error' => "Produto não encontrado"]);

});

// DELETAR TODO CACHE

Route::delete('/produtos', function () {
    Cache::forget('produtos');

    return response()->json(['success' => true, 'msg' => "Produtos excluídos!"]);
});

//DELETAR UM PRODUTO POR ID
Route::delete('/produtos/{id}', function ($id) {

    $produtos = json_decode(Cache::get('produtos'));

    foreach ($produtos as $key => $produto) {

        if ($produto->id == $id) {
            array_splice($produtos, $key, 1);
            Cache::put('produtos', json_encode($produtos));
            return response()->json(['success' => true, 'msg' => "Produto removido com sucesso!"]);
        }
    }

    return response()->json(['success' => false, 'msg' => "Produto não encontrado!"]);
});