DELIMITER $$

CREATE PROCEDURE get_employees_by_department(
    IN p_department_id INT
)
BEGIN
    SELECT
        employee_id,
        first_name,
        last_name,
        email,
        department_id,
        hire_date,
        salary
    FROM employees
    WHERE department_id = p_department_id;
END$$

DELIMITER ;
