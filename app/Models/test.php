<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class test extends Model
{
    use HasFactory;

    protected $table = "tests";

    protected $fillable = [
        "id",
        "text",
        "info",
        "word",
        "created_at",
        "updated_at"
    ];

    protected $hidden = [

    ];


}
