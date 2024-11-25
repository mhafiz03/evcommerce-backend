<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\DiscountController;
use App\Http\Controllers\UserController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


// // Display all products
// Route::get('/products', [ProductController::class, 'index']);

// // Display a single product by ID
// Route::get('/products/{id}', [ProductController::class, 'show']);

// // Store a new product
// Route::post('/products', [ProductController::class, 'store']);

// // Display the current user's cart
// Route::get('/cart', [CartController::class, 'show']);

// // Add an item to the cart
// Route::post('/cart/add', [CartController::class, 'add']);

// // Update item quantity in the cart
// Route::post('/cart/update', [CartController::class, 'update']);

// // Remove an item from the cart
// Route::post('/cart/remove', [CartController::class, 'remove']);

// // Place an order
// Route::post('/order', [OrderController::class, 'store']);

// // View a single order by ID
// Route::get('/order/{id}', [OrderController::class, 'show']);

// // View user's past orders
// Route::get('/orders', [OrderController::class, 'index']);

// // Admin Routes for Managing Discounts
// Route::middleware(['auth', 'admin'])->group(function () {
//     Route::get('/admin/discounts', [DiscountController::class, 'index']);
//     Route::post('/admin/discounts', [DiscountController::class, 'store']);
//     Route::put('/admin/discounts/{id}', [DiscountController::class, 'update']);
//     Route::delete('/admin/discounts/{id}', [DiscountController::class, 'destroy']);
// });

// // User Routes for Viewing and Applying Discounts
// Route::middleware(['auth'])->group(function () {
//     Route::post('/cart/apply-discount', [CartController::class, 'applyDiscount']);
//     Route::post('/cart/remove-discount', [CartController::class, 'removeDiscount']);
// });

// Route::get('/discounts/{code}', [DiscountController::class, 'show']);

Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    // Manage all discounts across all shops
    Route::get('/discounts', [DiscountController::class, 'index']); // List all discounts
    Route::post('/discounts', [DiscountController::class, 'store']); // Create a new discount
    Route::put('/discounts/{id}', [DiscountController::class, 'update']); // Update discount
    Route::delete('/discounts/{id}', [DiscountController::class, 'destroy']); // Delete discount

    // Manage all products (for moderation)
    Route::get('/products', [ProductController::class, 'index']); // List all products
    Route::post('/products', [ProductController::class, 'store']); // Add a new product
    Route::put('/products/{id}', [ProductController::class, 'update']); // Update product
    Route::delete('/products/{id}', [ProductController::class, 'destroy']); // Delete product
    Route::get('/products/{id}', [ProductController::class, 'show']); // View a single product

    // Manage all users
    // Route::get('/users', [UserController::class, 'index']); // List all users
    // Route::post('/users/{id}/enable', [UserController::class, 'enable']); // Enable user
    // Route::post('/users/{id}/disable', [UserController::class, 'disable']); // Disable user
    // Route::delete('/users/{id}', [UserController::class, 'destroy']); // Delete user
});

Route::middleware(['auth', 'shop'])->prefix('shop')->group(function () {
    // Shop-specific discount routes (only accessible by shop owners)
    Route::get('/discounts', [DiscountController::class, 'shopIndex']); // List discounts created by this shop
    Route::post('/discounts', [DiscountController::class, 'store']); // Create a discount
    Route::put('/discounts/{id}', [DiscountController::class, 'update']); // Update a discount
    Route::delete('/discounts/{id}', [DiscountController::class, 'destroy']); // Delete a discount

    // Shop-specific product routes
    Route::get('/products', [ProductController::class, 'shopIndex']); // List products added by this shop
    Route::post('/products', [ProductController::class, 'store']); // Add a new product
    Route::put('/products/{id}', [ProductController::class, 'update']); // Update product
    Route::delete('/products/{id}', [ProductController::class, 'destroy']); // Delete product
});


Route::middleware('auth')->group(function () {
    // Cart routes
    Route::get('/cart', [CartController::class, 'show']); // View cart
    Route::post('/cart/add', [CartController::class, 'add']); // Add item to cart
    Route::post('/cart/update', [CartController::class, 'update']); // Update cart item quantity
    Route::post('/cart/remove', [CartController::class, 'remove']); // Remove item from cart
    Route::post('/cart/apply-discount', [CartController::class, 'applyDiscount']); // Apply discount to cart
    Route::post('/cart/remove-discount', [CartController::class, 'removeDiscount']); // Remove discount

    // Order routes
    Route::post('/order', [OrderController::class, 'store']); // Place an order
    Route::get('/order/{id}', [OrderController::class, 'show']); // View a specific order
    Route::get('/orders', [OrderController::class, 'index']); // View user's past orders

    // General discount view (allow users to view a discount by code)
    Route::get('/discounts/{code}', [DiscountController::class, 'show']); // View discount details
});

