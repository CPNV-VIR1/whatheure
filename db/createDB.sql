-- Drop the database if it exists
DROP DATABASE IF EXISTS whatheure;

-- Create the database
CREATE DATABASE whatheure;

-- Use the database
USE whatheure;

-- Create the "locations" table
CREATE TABLE locations (
                           ID INT AUTO_INCREMENT PRIMARY KEY,
                           location VARCHAR(255),
                           offset INT
);
