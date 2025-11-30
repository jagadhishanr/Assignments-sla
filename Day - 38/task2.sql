CREATE VIEW vw_student_classes AS
SELECT 
    s.id AS student_id,
    s.name AS student_name,
    c.class_name
FROM students s
JOIN classes c 
      ON s.class_id = c.class_id;
