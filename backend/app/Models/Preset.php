<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Preset extends Model
{
    protected $fillable = [
        'name',
        'device',
        'settings',
    ];

    protected $casts = [
        'settings' => 'array',
    ];
}
