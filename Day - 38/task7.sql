DELIMITER $$

CREATE PROCEDURE insert_employee(
    IN p_first_name VARCHAR(100),
    IN p_last_name  VARCHAR(100),
    IN p_email      VARCHAR(255),
    IN p_hire_date  DATE,
    IN p_salary     DECIMAL(10,2)
)
BEGIN
    INSERT INTO employees (
        first_name,
        last_name,
        email,
        hire_date,
        salary
    )
    VALUES (
        p_first_name,
        p_last_name,
        p_email,
        p_hire_date,
        p_salary
    );
END$$

DELIMITER ;
