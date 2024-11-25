<?php

namespace App\Policies;

use App\Models\User;

class UserPolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }

    public function isCustomer(User $user)
    {
        return $user->role === 'customer';
    }

    public function isMerchant(User $user)
    {
        return $user->role === 'merchant';
    }

}
