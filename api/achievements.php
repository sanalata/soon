<?php
require_once 'db.php';

$studentId = checkSession();
$courseId = isset($_GET['course_id']) ? intval($_GET['course_id']) : null;

try {
    $sql = "
        SELECT 
            a.achievementID,
            a.achievementName,
            a.CourseID,
            a.unitsID,
            c.CourseName,
            u.unitsName,
            COUNT(ma.missing_achievements_id) as eksik_sayi
        FROM achievements a
        JOIN courses c ON a.CourseID = c.CourseID
        JOIN units u ON a.unitsID = u.unitsID
        LEFT JOIN missing_achievements ma ON a.achievementID = ma.achievement_id 
            AND ma.student_id = ?
        WHERE 1=1
    ";
    
    $params = [$studentId];
    if ($courseId) {
        $sql .= " AND a.CourseID = ?";
        $params[] = $courseId;
    }
    
    $sql .= " GROUP BY a.achievementID, a.achievementName, a.CourseID, a.unitsID, c.CourseName, u.unitsName
              ORDER BY eksik_sayi DESC";

    $stmt = $conn->prepare($sql);
    $stmt->execute($params);
    $achievements = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($achievements);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}