DELIMITER $$

CREATE PROCEDURE update_product_stock(
    IN p_product_id INT,
    IN p_new_stock INT
)
BEGIN
    UPDATE products
    SET stock_qty = p_new_stock
    WHERE product_id = p_product_id;
END$$

DELIMITER ;
