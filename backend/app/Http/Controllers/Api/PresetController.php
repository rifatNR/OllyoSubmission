<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePresetRequest;
use App\Http\Responses\ApiResponse;
use App\Models\Preset;

class PresetController extends Controller
{
    // 1. List all presets
    public function index()
    {
        $presets = Preset::select('id', 'name', 'device')->get();

        return ApiResponse::success($presets, 'Preset list loaded.');
    }

    // 2. Get single preset
    public function show($id)
    {
        $preset = Preset::find($id);

        if (!$preset) {
            return ApiResponse::error('Preset not found.', 404);
        }

        return ApiResponse::success($preset, 'Preset fetched successfully.');
    }

    // 3. Save new preset
    public function store(StorePresetRequest $request)
    {
        $preset = Preset::create($request->validated());

        return ApiResponse::success($preset, 'Preset created successfully.', 201);
    }
}
