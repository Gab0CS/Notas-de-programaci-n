-- The SELECT DISTINCT statement is used to return only distinct (different) values.
SELECT DISTINCT column1, column2, ...
FROM table_name;

--BETWEEN operator is used in a WHERE clause to filter the result set within a certain range. 
--It accepts two values that are either numbers, text or dates.

SELECT *
FROM movies
WHERE year BETWEEN 1990 AND 1999;   

SELECT * 
FROM movies 
WHERE genre = 'horror' AND year < 1985;

-- OR operator can also be used to combine multiple conditions in WHERE
SELECT *
FROM movies
WHERE genre = 'romance'
    OR genre = 'comedy';

-- We can sort the results using ORDER BY, either alphabetically or numerically. 

SELECT *
FROM movies
WHERE imdb_rating > 8
ORDER BY year DESC;

SELECT name, year, imdb_rating
FROM movies 
ORDER BY imdb_rating DESC;

-- LIKE operator is used in a WHERE clause to search for a specified pattern in a column
-- The percent sign (%) represents zero, one, or multiple characters
-- The underscore sign (_) represents one, single character

SELECT * 
FROM sports 
WHERE name LIKE '%ball';

-- DESC is a keyword to sort the results in descending order.
-- ASC is a keyword to sort the results in ascending order.
-- The column that we ORDER BY doesn’t even have to be one of the columns that we’re displaying.
-- ORDER BY always goes after WHERE (if WHERE is present).

-- LIMIT is a clause that lets you specify the maximum number of rows the result set will have. 
SELECT *
FROM movies
LIMIT 10;

-- LIMIT always goes at the very end of the query. Also, it is not supported in all SQL databases.


-- CASE statement allows us to create different outputs (usually in the SELECT statement).

SELECT name,
    CASE
        WHEN imdb_rating > 8 THEN 'Fantastic'
        WHEN imdb_rating > 6 THEN 'Poorly Received'
        ELSE 'Avoid at All Costs'
    END
FROM movies;

-- In the result, you have to scroll right because the column name is very long. 
-- To shorten it, we can rename the column to ‘Review’ using AS:

SELECT name,
    CASE
        WHEN imdb_rating > 8 THEN 'Fantastic'
        WHEN imdb_rating > 6 THEN 'Poorly Received'
        ELSE 'Avoid at All Costs'
    END AS 'Review'
FROM movies;

