CREATE VIEW vw_customer_order_summary AS
SELECT
    o.customer_id,
    COUNT(o.order_id) AS total_orders,
    SUM(o.order_total) AS total_amount
FROM orders o
GROUP BY o.customer_id;
