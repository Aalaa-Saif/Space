<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Userpostimg extends Model
{
    use HasFactory;

    protected $table = "userpostimgs";

    protected $fillable = [
        "id",
        "userpost_id",
        "image",
        "created_at",
        "updated_at"
    ];

    protected $hidden = [

    ];

    public function userpost(){
        return $this->belongsTo("App\Models\Userpost");
    }

}
