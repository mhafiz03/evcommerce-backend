<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Discount;

class CartController extends Controller
{
    // Show the current user's cart
    public function show()
    {
        // Retrieve the current user's cart (assumes cart is linked to user)
        $cart = auth()->user()->cart;

        // Return the cart contents
        return response()->json($cart);
    }

    // Add an item to the cart
    public function add(Request $request)
    {
        // Validate the incoming request data
        $validated = $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1'
        ]);

        // Find the product
        $product = Product::find($validated['product_id']);

        // Add the product to the user's cart (assumes there's a relationship between cart and user)
        $cart = auth()->user()->cart;
        $cart->products()->attach($product->id, ['quantity' => $validated['quantity']]);

        // Return success message
        return response()->json(['message' => 'Product added to cart'], 200);
    }

    // Update the quantity of an item in the cart
    public function update(Request $request)
    {
        // Validate the incoming request data
        $validated = $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1'
        ]);

        // Find the user's cart
        $cart = auth()->user()->cart;

        // Update the quantity of the specified product in the cart
        $cart->products()->updateExistingPivot($validated['product_id'], ['quantity' => $validated['quantity']]);

        // Return success message
        return response()->json(['message' => 'Cart updated successfully'], 200);
    }

    // Remove an item from the cart
    public function remove(Request $request)
    {
        // Validate the incoming request
        $validated = $request->validate([
            'product_id' => 'required|exists:products,id'
        ]);

        // Find the user's cart
        $cart = auth()->user()->cart;

        // Remove the product from the cart
        $cart->products()->detach($validated['product_id']);

        // Return success message
        return response()->json(['message' => 'Product removed from cart'], 200);
    }

    // Apply a discount to the cart
    public function applyDiscount(Request $request)
    {
        // Validate the request
        $request->validate([
            'discount_code' => 'required|string'
        ]);

        // Find the discount by the code
        $discount = Discount::where('code', $request->discount_code)->first();

        // Check if the discount exists
        if (!$discount) {
            return response()->json(['message' => 'Invalid discount code'], 400);
        }

        // Check if the discount has expired
        if ($discount->expiry_date && $discount->expiry_date < now()) {
            return response()->json(['message' => 'This discount code has expired'], 400);
        }

        // Check if the cart total meets the minimum purchase requirement
        $cart = auth()->user()->cart;
        $cartTotal = $cart->products->sum(function ($product) {
            return $product->pivot->quantity * $product->price;
        });

        if ($discount->minimum_purchase && $cartTotal < $discount->minimum_purchase) {
            return response()->json(['message' => 'Your cart total does not meet the minimum purchase amount for this discount'], 400);
        }

        // Apply the discount (e.g., by reducing the total price in the session or storing it in the cart)
        $cart->discount_code = $discount->code;
        $cart->discount_value = $this->calculateDiscount($cartTotal, $discount);
        $cart->save();

        return response()->json(['message' => 'Discount applied successfully', 'discount' => $discount], 200);
    }

    // Remove the applied discount
    public function removeDiscount(Request $request)
    {
        $cart = auth()->user()->cart;

        // Remove the discount code
        $cart->discount_code = null;
        $cart->discount_value = 0;
        $cart->save();

        return response()->json(['message' => 'Discount removed successfully'], 200);
    }

    // Helper method to calculate the discount value
    private function calculateDiscount($cartTotal, $discount)
    {
        if ($discount->type === 'percentage') {
            return $cartTotal * ($discount->value / 100);
        } elseif ($discount->type === 'fixed') {
            return min($discount->value, $cartTotal); // Ensure discount does not exceed cart total
        }

        return 0;
    }
}
