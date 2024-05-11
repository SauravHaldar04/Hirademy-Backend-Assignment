CREATE DATABASE assistant_db;
USE assistant_db;

CREATE TABLE assistant (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone INT NOT NULL,
    salary INT NOT NULL,
    city VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO assistant(name, email, phone, salary, city, country, department, role) VALUES
('John Doe', 'johdoe@gmail.com', 1234567890, 50000, 'New York', 'USA', 'HR', 'Assistant'),
('Jane Doe', 'janedoe@gmail.com', 1234567890, 40000, 'Mummbai', 'INDIA', 'SALES', 'Assistant');