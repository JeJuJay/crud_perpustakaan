<?php

namespace App\Http\Controllers;

use App\Models\user;
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

    public function index(){
        $user = User::all();
        return view('dashboard', compact(['user']));


    }

    public function registerSave(Request $request){
        $request->validate([
            'Username' => 'required',
            'Password' => 'required',
            'Email' => 'required',  
            'NamaLengkap' => 'required',
            'Alamat' => 'required'
        ]);
       

       

        user::create([
            'Username' => $request->Username,
            'Password' => Hash::make($request->Password),
            'Email' => $request->Email,
            'NamaLengkap' => $request->NamaLengkap,
            'Alamat' => $request->Alamat,
            'Role' => 'Admin'
        ]);

        return redirect()->route('login');
    }

    public function login(){
 
        return view('auth.login');
    }

    public function loginAction(Request $request){
       
        $auth=$request->validate([
            'Email' => 'required',
            'Password' => 'required'
        ]);

        $user = user::where('Email', $request->Email)->first();
        $cek = user::where('Email', $request->Email)->count();
        if($cek > 0) {
            if(password_verify($request->Password, $user->Password)){
                return redirect()->route('dashboard');
            } else {
                return redirect()->route('login');
            }
        }


    }


    public function logout(Request $request){

        Auth::guard('web')->logout();


        $request->session()->invalidate();

        return redirect('login');

    }


    public function profile(){


    return view('profile');
    }

}
