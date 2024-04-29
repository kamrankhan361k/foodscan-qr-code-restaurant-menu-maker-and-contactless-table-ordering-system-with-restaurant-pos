<?php

namespace App\Services;


use App\Enums\SwitchBox;
use App\Models\FrontendOrder;
use App\Models\NotificationAlert;
use App\Models\User;
use Illuminate\Support\Facades\Config;
use Exception;
use Illuminate\Support\Facades\Log;

class PosCustomerPasswordSmsNotificationBuilder
{
    public $name;
    public $email;
    public $password;
    public $phone;
    public $country_code;

    public function __construct($name, $email, $password, $phone, $country_code)
    {
        $this->name = $name;
        $this->email = $email;
        $this->password = $password;
        $this->phone = $phone;
        $this->country_code = $country_code;
    }

    public function send()
    {
        if (!blank($this->phone) && !blank($this->country_code)) {
            if ($this->email && $this->password) {
                $this->sms();
            }
        }
    }

    private function sms()
    {
        try {
            $smsManagerService = new SmsManagerService();
            $smsService = new SmsService();

            $message = "Hello $this->name,\n\n";
            $message .= "Your Email: $this->email\n";
            $message .= "Your Password: $this->password\n";
            $message .= "Login Here: " . config('app.url') . "\n\n";
            $message .= "Thanks,\n" . config('app.name');

            if ($smsService->gateway() && $smsManagerService->gateway($smsService->gateway())->status()) {
                $smsManagerService->gateway($smsService->gateway())->send($this->country_code, $this->phone, $message);
            }
        } catch (Exception $e) {
            Log::info($e->getMessage());
        }
    }

}
