<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cours extends Model
{
    public $table = "cours";
    public $primaryKey = 'idfile'; 
   // $table->foreign('compte')->references('name')->on('cours')->onDelete("NO ACTION");
}
