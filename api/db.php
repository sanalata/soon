<?php
session_start();
header('Content-Type: application/json; charset=utf-8');

// Veritabanı bağlantı bilgileri
$host = 'localhost';
$dbname = 'digikocc_schooldb';
$username = 'your_username';
$password = 'your_password';

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Veritabanı bağlantı hatası']);
    exit();
}

// Oturum kontrolü
function checkSession() {
    if (!isset($_SESSION['role']) || $_SESSION['role'] != 'student' || !isset($_SESSION['id'])) {
        http_response_code(401);
        echo json_encode(['error' => 'Oturum geçersiz']);
        exit();
    }
    return intval($_SESSION['id']);
}