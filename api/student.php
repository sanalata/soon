<?php
require_once 'db.php';

$studentId = checkSession();

try {
    // Öğrenci bilgilerini al
    $stmt = $conn->prepare("
        SELECT s.ID, s.adSoyad, s.kademe, s.classID, s.SchoolID, s.learning_style
        FROM student s
        WHERE s.ID = ?
    ");
    $stmt->execute([$studentId]);
    $student = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$student) {
        throw new Exception('Öğrenci bulunamadı');
    }

    echo json_encode($student);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}