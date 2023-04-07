-- Combining tables manually is time-consuming. SQL gives us an easy sequence for this: called a JOIN.
SELECT *
FROM orders
JOIN customers
    ON orders.customer_id = customers.customer_id;
--first line selects all columns from desired table.
--second line specifies the first table that we want to look in, orders
--third line uses JOIN to say that we want to combine information from orders with customers
--fourth line tells us how to combine the two tables
--orders table’s customer_id column with customers table’s customer_id column.  

SELECT *
FROM orders
JOIN subscriptions
    ON orders.subscription_id = subscriptions.subscription_id 
WHERE description = 'Fashion Magazine';

--Another example
SELECT COUNT(*)
FROM newspaper
JOIN online
    ON newspaper.id = online.id;

-- Left join 
-- left join will keep all rows from the first table, regardless of whether there is a matching row in the second table.
SELECT *
FROM table1
LEFT JOIN table2
    ON table1.c2 = table2.c2;

-- first line selects all columns from both tables.
-- Second line selects table1 (the “left” table).
-- The third line performs a LEFT JOIN on table2 (the “right” table).
-- The fourth line tells SQL how to perform the join (by looking for matching values in column c2).


-- Primary key vs Foreign key
-- Primary keys have a few requirements:
-- None of the values can be NULL.
-- Each value must be unique.
-- A table can not have more than one primary key column.

-- When the primary key for one table appears in a different table, it is called a foreign key.

-- Cross Join
SELECT shirts.shirt_color,
    pants.pants_color
FROM shirts
CROSS JOIN pants;

--First two lines selects shirt color and pants color .
--Third line pulls data from the table shirts.
--Fourth line performs a CROSS JOIN with pants.

SELECT month,
    COUNT(*)
FROM newspaper
CROSS JOIN months
WHERE start_month <= month AND end_month >= month
GROUP BY month;

-- Union
-- To stack one dataset on top of the UNION operator would allows us to do that.
-- Tables must have the same number of columns.
-- The columns must have the same data types in the same order as the first table.
SELECT *
FROM table1
UNION
SELECT *
FROM table2;

-- With
-- WITH statement allows us to perform a separate query

WITH previous_results AS (
    SELECT ...
    ...
    ...
    ...
)
SELECT *
FROM previous_results
JOIN customers
    ON _____ = _____;

-- previous_results is the alias that we will use to reference any columns from the query inside of the WITH clause
-- then go on to do whatever we want with this temporary table

WITH previous_query AS (
    SELECT customer_id,
    COUNT(subscription_id) AS 'subscriptions'
    FROM orders
    GROUP BY customer_id
)
SELECT customers.customer_name,
        previous_query.subscriptions
FROM previous_query 
JOIN customers 
ON previous_query.customer_id = customers.customer_id; 