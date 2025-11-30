SELECT 
    DATEDIFF(
        CASE
            -- If birthday this year has already passed, use next year
            WHEN DATE_FORMAT(CURDATE(), '%m-%d') > DATE_FORMAT('1998-04-15', '%m-%d')
                THEN DATE_FORMAT(CONCAT(YEAR(CURDATE()) + 1, '-', DATE_FORMAT('1998-04-15', '%m-%d')), '%Y-%m-%d')
            ELSE
                DATE_FORMAT(CONCAT(YEAR(CURDATE()), '-', DATE_FORMAT('1998-04-15', '%m-%d')), '%Y-%m-%d')
        END,
        CURDATE()
    ) AS days_until_next_birthday;
