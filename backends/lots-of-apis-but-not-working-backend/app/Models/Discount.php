<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    // Specify the fillable fields
    protected $fillable = [
        'code', 'type', 'value', 'expiry_date', 'minimum_purchase'
    ];

    // You may also add any relationships, if necessary
}
