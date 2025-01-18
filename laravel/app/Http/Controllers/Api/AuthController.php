<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth as FacadesAuth;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['name'],
            'password' => bcrypt($data['name']),
        ]);

        $token = $user->createToken( 'main' )->plainTextToken;

        return response(compact('user', 'token'));
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (!FacadesAuth::attempt($credentials)) { //in tutorial is !Auth
            return response([
                'message'=>'Provided email or password is incorrect'
            ]);
        }
        /**@var User $user */
        $user = FacadesAuth::user();
        $user->createToken('mail')->plainTextToken;
    }

    public function logout(Request $request)
    {
        
    }
}
