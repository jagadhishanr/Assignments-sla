SELECT 
    c.id AS course_id,
    c.title AS course_title,
    l.id AS lesson_id,
    l.title AS lesson_title,
    a.id AS assignment_id,
    a.title AS assignment_title,
    a.description,
    a.due_date
FROM courses c
JOIN lessons l ON c.id = l.course_id
JOIN assignments a ON l.id = a.lesson_id
WHERE c.id = :course_id;
