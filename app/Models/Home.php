<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Home extends Model
{
    use HasFactory;

    protected $table = "homes";

    protected $fillable = [
        "id",
        "text",
        "text2",
        "text3",
        "created_at",
        "updated_at"
    ];

    protected $hidden = [

    ];
}
