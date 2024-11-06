<?php
require_once 'db.php';

$studentId = checkSession();
$kademe = isset($_GET['kademe']) ? intval($_GET['kademe']) : 0;

try {
    // Öğrencinin kademesine göre dersleri getir
    $stmt = $conn->prepare("
        SELECT c.CourseID, c.CourseName, c.kademe
        FROM courses c
        WHERE c.kademe = ?
        ORDER BY c.CourseName
    ");
    $stmt->execute([$kademe]);
    $courses = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($courses);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}