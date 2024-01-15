<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(){
        return view('auth.register');
    }

    public function registerSave(Request $request){

        Validator::make($request->all(), [
            'Username' => 'required',
            'NamaLengkap' => 'required',
            'Email' => 'required',
            'Password' => 'required|confirmed'
        ])->validate();
    }
}
