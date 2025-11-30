SELECT
    YEAR(birthdate)  AS birth_year,
    MONTH(birthdate) AS birth_month,
    DAY(birthdate)   AS birth_day
FROM students;
