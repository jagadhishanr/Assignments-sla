SELECT 
    u.id AS student_id,
    u.name AS student_name,
    c.id AS course_id,
    c.title AS course_title
FROM users u
JOIN enrollments e ON u.id = e.user_id
JOIN courses c ON e.course_id = c.id
WHERE u.role = 'student';
