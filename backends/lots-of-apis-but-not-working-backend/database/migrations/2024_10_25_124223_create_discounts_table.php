<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDiscountsTable extends Migration
{
    public function up()
    {
        Schema::create('discounts', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->enum('type', ['fixed', 'percentage']);  // Type of discount
            $table->decimal('value', 8, 2);  // Discount amount (either a fixed value or percentage)
            $table->date('expiry_date')->nullable();  // Expiry date of the discount
            $table->decimal('minimum_purchase', 8, 2)->nullable();  // Minimum cart value to apply the discount
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('discounts');
    }
}
