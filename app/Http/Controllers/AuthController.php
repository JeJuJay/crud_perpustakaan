<?php

namespace App\Http\Controllers;

use App\Models\UserAndBuku;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

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

        User::create([
            'Username' => $request->Username,
            'NamaLengkap' => $request->NamaLengkap,
            'Email' => $request->Email,
            'Password' => Hash::make($request->Password),
            'Role' => 'Admin'
        ]);

        return redirect()->route('login');
    }

    public function login(){

        return view('auth.login');
    }

    public function loginAction(Request $request){

        Validator::make($request->all(), [
            'Email' => 'required|Email',
            'Username' => 'required',
            'Password' => 'required|confirmed'
        ])->validate();


        if (!Auth::attempt($request->only('Email', 'Username', 'Password'), $request->boolean('remember'))) {
            throw ValidationException::withMesseges([
                'Email' => trans('auth.failed')
            ]);
        }


        $request->session()->regenerate();

        return redirect()->route('dashboard');

    }

}
