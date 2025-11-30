SELECT
    order_id,
    product_id,
    qty,
    price,
    total_price(qty, price) AS line_total
FROM order_items;
