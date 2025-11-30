SELECT
    phone,
    REPLACE(phone, '-', '') AS phone_no_hyphens
FROM employees;
