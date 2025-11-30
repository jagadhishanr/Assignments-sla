DELIMITER $$

CREATE PROCEDURE calculate_bill(
    IN  p_price    DECIMAL(10,2),
    IN  p_quantity INT,
    OUT p_bill     DECIMAL(10,2)
)
BEGIN
    SET p_bill = p_price * p_quantity;
END$$

DELIMITER ;
