<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    // Display all products
    public function index()
    {
        // Fetch all products from the database
        $products = Product::all();
        
        // Return the products as a JSON response (for API) or pass them to a view
        return response()->json($products); // or return view('products.index', compact('products'));
    }

    // Display a single product by ID
    public function show($id)
    {
        // Fetch the product by its ID
        $product = Product::find($id);
        
        // Check if the product exists
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        // Return the product details as JSON or view
        return response()->json($product); // or return view('products.show', compact('product'));
    }

    // Store a new product (usually for admins)
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'quantity' => 'required|integer',
        ]);

        // Create a new product
        $product = Product::create($validated);

        // Return a success response
        return response()->json(['message' => 'Product created successfully', 'product' => $product], 201);
    }

    // Update an existing product by ID (for admins)
    public function update(Request $request, $id)
    {
        // Fetch the product
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        // Validate the request data
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'sometimes|required|numeric',
            'quantity' => 'sometimes|required|integer',
        ]);

        // Update the product with the new data
        $product->update($validated);

        // Return a success response
        return response()->json(['message' => 'Product updated successfully', 'product' => $product], 200);
    }

    // Delete a product (for admins)
    public function destroy($id)
    {
        // Fetch the product
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        // Delete the product
        $product->delete();

        // Return a success response
        return response()->json(['message' => 'Product deleted successfully'], 200);
    }
}
