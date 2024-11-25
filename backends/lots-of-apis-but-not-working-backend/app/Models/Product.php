<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    // Specify the fillable attributes
    protected $fillable = [
        'name', 'description', 'price', 'quantity'
    ];

    // Relationship: A product can belong to many carts
    public function carts()
    {
        return $this->belongsToMany(Cart::class)->withPivot('quantity');
    }

    // Relationship: A product can belong to many orders
    public function orders()
    {
        return $this->belongsToMany(Order::class)->withPivot('quantity');
    }
}
