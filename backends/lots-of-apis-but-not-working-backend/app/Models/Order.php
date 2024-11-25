<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    // Specify the fillable attributes
    protected $fillable = [
        'user_id', 'total_price', 'discount_code', 'discount_value'
    ];

    // Relationship: An order belongs to a user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relationship: An order can contain many products
    public function products()
    {
        return $this->belongsToMany(Product::class)->withPivot('quantity');
    }
}
