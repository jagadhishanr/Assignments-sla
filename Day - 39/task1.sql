DELIMITER $$

CREATE PROCEDURE print_all_students()
BEGIN
    SELECT 
        student_id,
        student_name,
        marks,
        class_id
    FROM students;
END$$

DELIMITER ;
