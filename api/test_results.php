<?php
require_once 'db.php';

$studentId = checkSession();

try {
    $stmt = $conn->prepare("
        SELECT 
            str.result_id,
            str.deneme_id,
            d.deneme_name,
            str.course_id,
            c.CourseName,
            str.net,
            str.dogru_sayisi,
            str.yanlis_sayisi,
            str.bos_sayisi,
            str.date_completed
        FROM student_test_results str
        JOIN denemeler d ON str.deneme_id = d.deneme_id
        JOIN courses c ON str.course_id = c.CourseID
        WHERE str.student_id = ?
        ORDER BY str.date_completed DESC
    ");
    $stmt->execute([$studentId]);
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($results);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}