<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePresetRequest extends FormRequest
{
    public function authorize()
    {
        return true; // allow all for now
    }

    public function rules()
    {
        return [
            'name'     => 'required|string|max:255',
            'device'   => 'required|string|in:light,fan',
            'settings' => 'nullable|array',
        ];
    }

    public function messages()
    {
        return [
            'name.required'   => 'Preset name is required.',
            'device.required' => 'Device type is required.',
            'device.in'       => 'Device must be one of: light, fan.',
        ];
    }
}
