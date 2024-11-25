<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    // Relationship: A cart belongs to a user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relationship: A cart can have many products
    public function products()
    {
        return $this->belongsToMany(Product::class)->withPivot('quantity');
    }
}
