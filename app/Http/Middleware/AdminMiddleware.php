<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->user()->tokenCan('role:admin')) {
            return $next($request);
        }
        return response()->json('Not Authorized', 401);

        /*$bearer = $request->bearerToken();
        if ($token = DB::table('personal_access_tokens')->where('admin_token',hash('sha256',$bearer))->first())
        {
            if ($user = \App\Models\Admin::find($token->tokenable_id))
            {
                Auth::login($user);
                return $next($request);
            }
        }

        return response()->json([
            'success' => false,
            'error' => 'Access denied.',
        ]);*/
    }
}
