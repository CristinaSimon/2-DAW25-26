<?php
$apiKey="285402f21c92a44067f0c8d38604302f";

$competitionsURL="https://api.football-data.org/v4/competitions";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $competitionsURL);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "X-Auth-Token: $apiKey",
    "content-type: application/json"
    ]);
$response = curl_exec($ch);
curl_close($ch);
$data = json_decode($response, true);
$competitions = $data["competitions"]??[];
