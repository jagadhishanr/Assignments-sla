-- Single-statement approach (MySQL 8+)
WITH base AS (
  SELECT
    employee_id,
    LOWER(CONCAT(SUBSTRING(first_name, 1, 1), REPLACE(last_name, ' ', ''))) AS base_username
  FROM employees
),
ranked AS (
  SELECT
    employee_id,
    base_username,
    ROW_NUMBER() OVER (PARTITION BY base_username ORDER BY employee_id) AS rn
  FROM base
),
final AS (
  SELECT
    employee_id,
    CASE
      WHEN rn = 1 THEN base_username
      ELSE CONCAT(base_username, LPAD(rn - 1, 3, '0'))
    END AS new_username
  FROM ranked
)
UPDATE employees e
JOIN final f USING (employee_id)
SET e.username = f.new_username;
