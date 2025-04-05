<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class IAController extends Controller
{
    public function generatePost(Request $request)
    {
        $request->validate([
            'theme' => 'required|string|max:255',
        ]);

        $theme = $request->input('theme');
       
        // integração real com OpenAI (mantida comentada por enquanto)
        
        $response = Http::withToken(env('OPENAI_API_KEY'))->post('https://api.openai.com/v1/chat/completions', [
            'model' => 'gpt-3.5-turbo',
            'messages' => [
                ['role' => 'user', 'content' => "Crie um post de redes sociais sobre o tema: $theme"],
            ],
        ]);

        return response()->json([
            'post' => $response['choices'][0]['message']['content'] ?? 'Erro ao gerar conteúdo.'
        ]);
        
    }
}
