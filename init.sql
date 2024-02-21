-- init.sql
-- Create the 'type' table with unique constraint on the 'name' column
CREATE TABLE IF NOT EXISTS type (name VARCHAR(255) PRIMARY KEY);

-- Insert the 'click' type into the 'type' table
INSERT
    IGNORE INTO type (name)
VALUES
    ('click'),
    ('close');

-- Create the 'item' table with unique constraint on the 'name' column
CREATE TABLE IF NOT EXISTS item (name VARCHAR(255) PRIMARY KEY);

-- Insert the 'subscribe' item into the 'item' table
INSERT
    IGNORE INTO item (name)
VALUES
    ('subscribe'),
    ('inbox');

-- Create the 'event' table
CREATE TABLE IF NOT EXISTS event (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    item VARCHAR(255) NOT NULL,
    timestamp VARCHAR(255) NOT NULL,
    FOREIGN KEY (type) REFERENCES type(name),
    FOREIGN KEY (item) REFERENCES item(name)
);