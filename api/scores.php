<?php
require_once 'db.php';

$studentId = checkSession();

try {
    $stmt = $conn->prepare("
        SELECT 
            ss.Score_id,
            ss.score,
            ss.deneme_id,
            d.deneme_name,
            st.skor_adi,
            ss.submission_date
        FROM student_score ss
        JOIN denemeler d ON ss.deneme_id = d.deneme_id
        JOIN skor_turleri st ON ss.skor_turu_id = st.skor_turu_id
        WHERE ss.StudentID = ?
        ORDER BY ss.submission_date DESC
    ");
    $stmt->execute([$studentId]);
    $scores = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($scores);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}