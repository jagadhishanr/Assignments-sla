SELECT
    TIMESTAMPDIFF(YEAR,  '2020-05-10', '2025-02-15') AS diff_years,
    TIMESTAMPDIFF(MONTH, '2020-05-10', '2025-02-15') AS diff_months,
    DATEDIFF('2025-02-15', '2020-05-10')              AS diff_days;
