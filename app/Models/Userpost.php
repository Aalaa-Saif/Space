<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Userpost extends Model
{
    use HasFactory;

    protected $table = "userposts";

    protected $fillable = [
        "id",
        "user_id",
        "text",
        "created_at",
        "updated_at"
    ];

    protected $hidden = [

    ];

    public function user(){
        return $this->belongsTo("App\Models\User");
    }

    public function userpostimgs(){
        return $this->hasMany("App\Models\Userpostimg");
    }

}
