-- COUNT 
-- fastest way to calculate how many rows are in a table is to use the COUNT()
SELECT COUNT(*)
FROM table_name;

-- SQL makes it easy to add all values in a particular column using SUM()
SELECT SUM(downloads) 
FROM fake_apps;

-- The MAX() and MIN() functions return the highest and lowest values in a column
SELECT MAX(price)
FROM fake_apps;

-- AVG() function to quickly calculate the average value of a particular column
SELECT AVG(price)
FROM fake_apps;

-- ROUND() function takes two arguments inside the parenthesis:
--a column name and an integer
SELECT ROUND(price, 0)
FROM fake_apps;

--we might want to know the mean IMDb ratings for all movies each year. 
SELECT AVG(imdb_rating)
FROM movies
WHERE year = 1999;

SELECT AVG(imdb_rating)
FROM movies
WHERE year = 2000;

SELECT AVG(imdb_rating)
FROM movies
WHERE year = 2001;

--We can use GROUP BY to do this in a single step:
SELECT year,
    AVG(imdb_rating)
FROM movies
GROUP BY year
ORDER BY year;

--GROUP BY is a clause in SQL that is used with aggregate functions. 
--It is used in collaboration with the SELECT statement to arrange identical data into groups.
--The GROUP BY statement comes after any WHERE statements, but before ORDER BY or LIMIT

--SQL lets us use column reference(s) in our GROUP BY that will make our lives easier.
SELECT ROUND(imdb_rating),
    COUNT(name)
FROM movies
GROUP BY 1
ORDER BY 1;

-- HAVING
--When we want to limit the results of a query based on an aggregate property, use HAVING.

SELECT year,
    genre,
    COUNT(name)
FROM movies
GROUP BY 1, 2
HAVING COUNT(name) > 10;

--How to use a select case with an agregate function
SELECT CASE
    WHEN url LIKE '%github.com%' THEN 'GitHub'
    WHEN url LIKE '%medium.com%' THEN 'Medium'
    WHEN url LIKE '%nytimes.com%' THEN 'New York Times'
    ELSE 'Other'
    END AS 'Source',
    COUNT(*)
FROM hacker_news
GROUP BY 1;


--Time stamp for dates
SELECT timestamp,
    strftime('%H', timestamp) AS 'HOUR'
FROM hacker_news
GROUP BY 1
LIMIT 20;

-- This returns the hour, HH, of the timestamp column!
-- %Y returns the year (YYYY)
-- %m returns the month (01-12)
-- %d returns the day of the month (1-31)
-- %H returns 24-hour clock (00-23)
-- %M returns the minute (00-59)
-- %S returns the seconds (00-59)