<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Discount;

class DiscountController extends Controller
{
    // Admin: List all discounts
    public function index()
    {
        $discounts = Discount::all();
        return response()->json($discounts);
    }

    // Admin: Create a new discount
    public function store(Request $request)
    {
        // Validate the incoming request
        $validated = $request->validate([
            'code' => 'required|string|unique:discounts,code',
            'type' => 'required|in:fixed,percentage',  // Type can be 'fixed' or 'percentage'
            'value' => 'required|numeric|min:0',
            'expiry_date' => 'nullable|date|after:today',
            'minimum_purchase' => 'nullable|numeric|min:0'
        ]);

        // Create a new discount
        $discount = Discount::create($validated);

        return response()->json(['message' => 'Discount created successfully', 'discount' => $discount], 201);
    }

    // Admin: Update an existing discount
    public function update(Request $request, $id)
    {
        $discount = Discount::find($id);

        if (!$discount) {
            return response()->json(['message' => 'Discount not found'], 404);
        }

        // Validate the incoming request
        $validated = $request->validate([
            'code' => 'required|string|unique:discounts,code,' . $discount->id,
            'type' => 'required|in:fixed,percentage',
            'value' => 'required|numeric|min:0',
            'expiry_date' => 'nullable|date|after:today',
            'minimum_purchase' => 'nullable|numeric|min:0'
        ]);

        // Update the discount
        $discount->update($validated);

        return response()->json(['message' => 'Discount updated successfully', 'discount' => $discount], 200);
    }

    // Admin: Delete a discount
    public function destroy($id)
    {
        $discount = Discount::find($id);

        if (!$discount) {
            return response()->json(['message' => 'Discount not found'], 404);
        }

        $discount->delete();

        return response()->json(['message' => 'Discount deleted successfully'], 200);
    }

    // User/Admin: Show discount details by code
    public function show($code)
    {
        $discount = Discount::where('code', $code)->first();

        if (!$discount) {
            return response()->json(['message' => 'Discount code not valid'], 404);
        }

        return response()->json($discount);
    }
}
