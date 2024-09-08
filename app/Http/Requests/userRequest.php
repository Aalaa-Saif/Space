<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class userRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|exists:users,email',
            'password' => 'required|min:5',
        ];
    }

    public function messages(){
        return[
            'email.required' => "email required",
            'email.exists' =>"not exist",
            'password.required' => 'password required',
            'password.min' => 'password must be at least 5',
        ];
    }
}
