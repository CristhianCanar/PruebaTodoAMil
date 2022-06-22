CREATE DATABASE ecommerce;

CREATE TYPE status AS ENUM ('activo', 'inactivo');
CREATE TABLE persons(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  last_name VARCHAR(50),
  city VARCHAR(20),
  address VARCHAR(50),
  phone VARCHAR(15),
  email VARCHAR(50) UNIQUE,
  status status);

INSERT INTO persons (name, last_name, city, address, phone, email, status)
  VALUES ('Pepito', 'perez', 'Ciudad', 'addres', '3215185', 'a@g.com', 'activo');

CREATE TYPE status AS ENUM ('activo', 'inactivo');
CREATE TABLE persons(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  last_name VARCHAR(50),
  city VARCHAR(20),
  address VARCHAR(50),
  phone VARCHAR(15),
  email VARCHAR(50) UNIQUE,
  status status);