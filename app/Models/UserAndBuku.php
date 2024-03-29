<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAndBuku extends Model
{
    use HasFactory;


    protected $fillable = [
        'Username',
        'Password',
        'Email',
        'NamaLengkap',
        'Alamat',
        'Role',
    ];

}
