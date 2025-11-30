CREATE VIEW vw_order_details AS
SELECT
    o.order_id,
    o.order_date,
    c.customer_id,
    c.customer_name,
    c.email AS customer_email,
    p.product_id,
    p.product_name,
    p.price,
    o.qty,
    (o.qty * p.price) AS line_total
FROM orders o
JOIN customers c 
      ON o.customer_id = c.customer_id
JOIN products p 
      ON o.product_id = p.product_id;
