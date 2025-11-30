DELIMITER $$

CREATE PROCEDURE get_employees_in_salary_range(
    IN p_min_salary DECIMAL(10,2),
    IN p_max_salary DECIMAL(10,2)
)
BEGIN
    SELECT 
        employee_id,
        first_name,
        last_name,
        salary,
        department_id,
        hire_date
    FROM employees
    WHERE salary BETWEEN p_min_salary AND p_max_salary
    ORDER BY salary;
END$$

DELIMITER ;
