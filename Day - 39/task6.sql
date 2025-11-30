DELIMITER $$

CREATE PROCEDURE insert_order(
    IN p_customer_id INT,
    IN p_product_id  INT,
    IN p_qty         INT,
    IN p_order_date  DATE,
    IN p_order_total DECIMAL(10,2)
)
BEGIN
    INSERT INTO orders (
        customer_id,
        product_id,
        qty,
        order_date,
        order_total
    )
    VALUES (
        p_customer_id,
        p_product_id,
        p_qty,
        p_order_date,
        p_order_total
    );
END$$

DELIMITER ;
