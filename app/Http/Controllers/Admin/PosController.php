<?php

namespace App\Http\Controllers\Admin;

use Exception;
use App\Services\OrderService;
use App\Services\CustomerService;
use App\Http\Requests\PosOrderRequest;
use App\Http\Requests\CustomerRequest;
use App\Http\Resources\OrderDetailsResource;
use App\Http\Resources\CustomerResource;


class PosController extends AdminController
{
    private OrderService $orderService;
    private CustomerService $customerService;

    public function __construct(OrderService $order, CustomerService $customerService)
    {
        parent::__construct();
        $this->orderService = $order;
        $this->customerService = $customerService;
        $this->middleware(['permission:pos'])->only('store');
    }

    public function store(PosOrderRequest $request): \Illuminate\Http\Response | OrderDetailsResource | \Illuminate\Contracts\Foundation\Application | \Illuminate\Contracts\Routing\ResponseFactory
    {
        try {
            return new OrderDetailsResource($this->orderService->posOrderStore($request));
        } catch (Exception $exception) {
            return response(['status' => false, 'message' => $exception->getMessage()], 422);
        }
    }

    public function storeCustomer(
        CustomerRequest $request
    ): \Illuminate\Http\Response|CustomerResource|\Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory {
        try {
            return new CustomerResource($this->customerService->store($request));
        } catch (Exception $exception) {
            return response(['status' => false, 'message' => $exception->getMessage()], 422);
        }
    }
}
