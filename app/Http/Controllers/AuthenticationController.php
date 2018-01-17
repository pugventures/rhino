<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class AuthenticationController extends Controller
{

    public function authenticate(Request $request) {
        $authenticated = false;
        
        if($user = User::where('email', $request->get('email'))->first()) {
            if (Hash::check($request->get('password'), $user->password)) {
                $authenticated = true;
            }
        }

        if($authenticated) {
            return response()->json(['user' => $user, 'error' => []]);
        } else {
            return response()->json(['user' => [], 'error' => ['Username and/or password are incorrect']]);
        }
    }
}
