DELIMITER $$

CREATE PROCEDURE increase_product_price(
    IN p_product_id INT,
    IN p_percentage DECIMAL(6,2)   -- e.g., 10 = 10%
)
BEGIN
    UPDATE products
    SET price = price + (price * (p_percentage / 100))
    WHERE product_id = p_product_id;
END$$

DELIMITER ;
