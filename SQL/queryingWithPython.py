# Thanks to Python’s Database-API (DB-API 2.0), we can connect Python to RDBMS 
# (Relational Database Management System) like SQLite.
import sqlite3

# We can connect to a new or pre-existing database with the sqlite3.connect()
connection = sqlite3.connect("first.db")

# we need a way to call SQL statements on the data within the database. 
# To do this, we use something called a cursor object. Using a cursor object, we can:
    #represent a database cursor
    #call statements to our SQLite database
    #return the data in our python environment. 

#We create a cursor object by using the cursor method from the connection class:
cursor = connection.cursor()


# To start a SQL command (also known as a SQL statement), we must attach the 
# .execute() method to your cursor object as such
cursor.execute()

# The SQL command CREATE TABLE creates a new table in the connected database.
cursor.execute('''CREATE TABLE toys (
                id INTEGER,
                name TEXT,
                price REAL,
                type TEXT)''')
# We use the .execute() method with the curs object to create a table named toys
#Additionally, we used a triple-quoted string because the SQL command string stretched 
#across multiple lines. We recommend always using a triple-quote (''' or """) around 
#the SQL statement to avoid any possible errors.

#After creating a data table, we may want to insert the data.
#we will use the SQL command INSERT INTO table_name VALUES
cursor.execute('''INSERT INTO toys VALUES (2244560, 'Ultimate Ninja Fighter', 24.99, 'action')''')
#This line of code added a row of data, (2244560, 'Ultimate Ninja Fighter', 24.99, 'action') into the toys


#Insert multiple rows with one command
new_students = [(102, 'Joe', 32, '2022-05-16', 'Pass'),
        (103, 'Stacy', 10, '2022-05-16', 'Pass'),
        (104, 'Angela', 21, '2022-12-20', 'Pass'),
        (105, 'Mark', 21, '2022-12-20', 'Fail'),
        (106, 'Nathan', 21, '2022-12-20', 'Pass')
]
# Insert values into the students table
cursor.executemany('''INSERT INTO students VALUES (?,?,?,?,?)''', new_students)

# Within parentheses, there is a list of question marks that act as field placeholders. 
# The five question marks represent each of the five fields in the database (The columns) 
# we are inserting values into. Lastly, we include the object new_students at the end of the .executemany() method.


#Retrieving data

#.fetchone() method
# This method, in combination with cursor.execute(), will fetch one row of the data.
# Return first row in students
cursor.execute("SELECT * FROM students").fetchone()

# Output
(101, 'Alex', 32, '2022-05-16', 'Pass')

#.fetchmany() method
#If you want to pull more than one row, you can use the .fetchmany() method. 
# This method will return the first set of specified rows.
# Return first three rows in students
cursor.execute("SELECT * FROM students").fetchmany(3)
# Output
[(101, 'Alex', 32, '2022-05-16', 'Pass'),
(102, 'Joe', 32, '2022-05-16', 'Pass'),
(103, 'Stacy', 10, '2022-05-16', 'Pass')]

# .fetchall() method
# The last fetch method is .fetchall(), and it does just that. This method will fetch every row of data from the data table.
# Return all rows in students
cursor.execute("SELECT * FROM students").fetchall()


#Python loops with sqlite
# The following code will iterate through each row in the students table and print each row where the Grade field is 'Pass'.
for row in cursor.execute('''SELECT * FROM students WHERE Grade = 'Pass';'''):
    print(row)

#You can also use a for loop to iterate through a table field and calculate a measurement.

# save all rows from a field with .fetchall() then use a for loop to find some sort of result.`
major_codes = cursor.execute("SELECT major_code FROM students;").fetchall()

# Obtain the average of the tuple list by using for loops
sum = 0
for num in major_codes: 
    sum = sum + num[0]
average = sum / len(major_codes)

# Show average
print(average)
#SQL statement to retrieve the major code field from the students table
#sum initialized at 0, to sum up the total values in the data.
#for loop to iterate through every number in major_code to create the mean average major_code
#num[0] to sum at each iteration. Note that num is a tuple of length 1 (such as (12,)) so num[0] 
#will allow us to access the actual integer.


#Commiting changes and closing data base connection
# If we create or edit a data table using SQLite, we MUST use the .commit() method to save any alteration made to the database.
connection.commit()
#Once we have committed all changes, we may close the connection to the database with .close().
connection.close()  