DELIMITER $$

CREATE PROCEDURE get_highest_salary(
    OUT p_highest_salary DECIMAL(10,2)
)
BEGIN
    SELECT MAX(salary)
    INTO p_highest_salary
    FROM employees;
END$$

DELIMITER ;
