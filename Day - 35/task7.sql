SELECT
    CASE 
        WHEN TIMESTAMPDIFF(YEAR, hire_date, NOW()) < 1 
            THEN '<1 year'
        WHEN TIMESTAMPDIFF(YEAR, hire_date, NOW()) BETWEEN 1 AND 2
            THEN '1–3 years'
        WHEN TIMESTAMPDIFF(YEAR, hire_date, NOW()) BETWEEN 3 AND 4
            THEN '3–5 years'
        ELSE '5+ years'
    END AS tenure_bucket,
    COUNT(*) AS employee_count
FROM employees
GROUP BY tenure_bucket
ORDER BY 
    CASE 
        WHEN tenure_bucket = '<1 year' THEN 1
        WHEN tenure_bucket = '1–3 years' THEN 2
        WHEN tenure_bucket = '3–5 years' THEN 3
        ELSE 4
    END;
