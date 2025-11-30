CREATE VIEW vw_high_achievers AS
SELECT 
    student_name,
    marks
FROM students
WHERE marks > 80;
