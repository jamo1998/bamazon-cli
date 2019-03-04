CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Old Spice Shampoo', 'Cosmetics', 6.00, 500),
		('Axe Conditioner', 'Cosmetics', 6.25, 627),
		('Glad 12 Gal Trash Bags', 'Grocery', 6.00, 300),
		('Brown Paper Bags', 'Grocery', 4.25, 400),
		('Apples', 'Produce', 0.35, 350),
		('Bannana', 'Produce', 0.20, 10000),
		('Tropicana Orange Juice', 'Grocery', 4.45, 267),
        ('Rick and Morty Seasons 1-3', 'Entertainment', 20.75, 3),
        ('Nintendo Switch', 'Entertainment', 299.00, 100),
        ('Super Smash Bros Ultimate', 'Entertainment', 59.99, 4),
        ('Xbox One', 'Entertainment', 399.99, 25),
        ('Playstation 4', 'Entertainment', 399.99, 90),
        ('World of Warcraft', 'Entertainment', 59.99, 2),
        ('ASUS RoG Gaming Laptop', 'Electronics', 1499.99, 10),
        ('Apple Macbook Pro', 'Electronics', 1000.00, 250),
        ('Samsung Smart TV', 'Electronics', 199.99, 50);