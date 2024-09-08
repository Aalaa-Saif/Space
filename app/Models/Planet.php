<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Planet extends Model
{
    use HasFactory;

    protected $table = "planets";

    protected $fillable = [
        "id",
        "text",
        "created_at",
        "updated_at"
    ];

    protected $hidden = [

    ];
}
