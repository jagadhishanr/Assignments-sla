DELIMITER $$

CREATE PROCEDURE get_monthly_sales(
    IN  p_year  INT,
    IN  p_month INT,
    OUT p_total_sales DECIMAL(15,2)
)
BEGIN
    SELECT 
        COALESCE(SUM(order_total), 0)
    INTO p_total_sales
    FROM orders
    WHERE YEAR(order_date) = p_year
      AND MONTH(order_date) = p_month;
END$$

DELIMITER ;
