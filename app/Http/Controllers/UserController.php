<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Request;
use App\Models\User;


class UserController extends Controller
{

    public function getAll(Request $request) {
        $users = User::all();
        
        return response()->json(['users' => $users, 'error' => []]);
    }
}
