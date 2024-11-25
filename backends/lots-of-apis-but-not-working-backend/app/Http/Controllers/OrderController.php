<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Discount;

class OrderController extends Controller
{
    // Show a specific order by ID
    public function show($id)
    {
        // Find the order
        $order = Order::find($id);

        // Check if the order exists
        if (!$order) {
            return response()->json(['message' => 'Order not found'], 404);
        }

        // Return the order details
        return response()->json($order);
    }

    // Show all orders for the current user
    public function index()
    {
        // Retrieve all orders for the authenticated user
        $orders = auth()->user()->orders;

        // Return the orders
        return response()->json($orders);
    }

    // Place an order and apply the discount if available
    public function store(Request $request)
    {
        // Get the user's cart
        $cart = auth()->user()->cart;

        if ($cart->products->isEmpty()) {
            return response()->json(['message' => 'Your cart is empty'], 400);
        }

        // Calculate the cart total (before applying the discount)
        $cartTotal = $cart->products->sum(function ($product) {
            return $product->pivot->quantity * $product->price;
        });

        // Check if there's a discount applied to the cart
        $discountValue = 0;
        if ($cart->discount_code) {
            $discount = Discount::where('code', $cart->discount_code)->first();

            if ($discount) {
                // Calculate the discount value using the same helper function as in CartController
                $discountValue = $this->calculateDiscount($cartTotal, $discount);
            }
        }

        // Calculate the final total after applying the discount
        $finalTotal = $cartTotal - $discountValue;
        if ($finalTotal < 0) {
            $finalTotal = 0;
        }

        // Create a new order
        $order = new Order();
        $order->user_id = auth()->id();
        $order->total_price = $finalTotal;  // Store the final price after discount
        $order->discount_code = $cart->discount_code;
        $order->discount_value = $discountValue;  // Keep track of the applied discount value
        $order->save();

        // Attach the products from the cart to the order
        foreach ($cart->products as $product) {
            $order->products()->attach($product->id, ['quantity' => $product->pivot->quantity]);
        }

        // Clear the cart after placing the order
        $cart->products()->detach();
        $cart->discount_code = null;
        $cart->discount_value = 0;
        $cart->save();

        // Return a success message with the order details
        return response()->json(['message' => 'Order placed successfully', 'order' => $order], 201);
    }

    // Helper method to calculate the discount value (same as CartController)
    private function calculateDiscount($cartTotal, $discount)
    {
        if ($discount->type === 'percentage') {
            return $cartTotal * ($discount->value / 100);
        } elseif ($discount->type === 'fixed') {
            return min($discount->value, $cartTotal);  // Ensure discount does not exceed cart total
        }

        return 0;
    }
}
