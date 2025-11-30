SELECT 
    DATEDIFF(NOW(), hire_date) AS days_since_hired
FROM employees
WHERE employee_id = 1;
