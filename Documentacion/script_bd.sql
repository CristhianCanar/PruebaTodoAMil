-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler version: 0.9.4
-- PostgreSQL version: 13.0
-- Project Site: pgmodeler.io
-- Model Author: ---

-- Database creation must be performed outside a multi lined SQL file. 
-- These commands were put in this file only as a convenience.
-- 
-- object: new_database | type: DATABASE --
DROP DATABASE IF EXISTS ecommerce;
CREATE DATABASE ecommerce;
\c ecommerce;
-- ddl-end --
-- object: products | type: TABLE --
DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
	id serial NOT NULL,
	name varchar(50) NOT NULL,
	uri_image text NOT NULL,
	expiration_date date NOT NULL,
	admission_date date NOT NULL,
	mark varchar(50) NOT NULL,
	quantity integer NOT NULL,
	price decimal(10,2) NOT NULL,
	employe_id integer NOT NULL,
	CONSTRAINT products_pk PRIMARY KEY (id)
);
-- ddl-end --

-- object: employees | type: TABLE --
DROP TABLE IF EXISTS employees CASCADE;
CREATE TABLE employees (
	id serial NOT NULL,
	name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	city varchar(20) NOT NULL,
	address varchar(50) NOT NULL,
	phone varchar(15) NOT NULL,
	email varchar(50),
	password text NOT NULL,
	rol_id integer NOT NULL,
	CONSTRAINT "UQ_email_employees" UNIQUE (email),
	CONSTRAINT employees_pk PRIMARY KEY (id)
);
-- ddl-end --

-- object: roles | type: TABLE --
DROP TABLE IF EXISTS roles CASCADE;
CREATE TABLE roles (
	id serial NOT NULL,
	name varchar(20),
	description varchar(50),
	CONSTRAINT roles_pk PRIMARY KEY (id)
);
-- ddl-end --

-- object: cart | type: TABLE --
DROP TABLE IF EXISTS cart CASCADE;
CREATE TABLE cart (
	id serial NOT NULL,
	order_id integer NOT NULL,
	product_id integer NOT NULL,
	quantity integer NOT NULL,
	CONSTRAINT cart_pk PRIMARY KEY (id)
);
-- ddl-end --

-- object: orders | type: TABLE --
DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
	id serial NOT NULL,
	amount decimal(10,2) NOT NULL,
	status varchar(20) NOT NULL,
	person_id integer NOT NULL,
	payment_id integer,
	CONSTRAINT orders_pk PRIMARY KEY (id)
);
-- ddl-end --

-- object: persons | type: TABLE --
DROP TABLE IF EXISTS persons CASCADE;
CREATE TABLE persons (
	id serial NOT NULL,
	name varchar(50) NOT NULL,
	last_name varchar(50) NOT NULL,
	city varchar(20) NOT NULL,
	address varchar(50) NOT NULL,
	phone varchar(15) NOT NULL,
	email varchar(50),
	status varchar(20) NOT NULL,
	CONSTRAINT persons_pk PRIMARY KEY (id),
	CONSTRAINT "UQ_email_persons" UNIQUE (email)
);
-- ddl-end --

-- object: payments | type: TABLE --
DROP TABLE IF EXISTS payments CASCADE;
CREATE TABLE payments (
	id serial NOT NULL,
	type varchar(50) NOT NULL,
	confirmation_number varchar(50) NOT NULL,
	status varchar(20) NOT NULL,
	person_id integer NOT NULL,
	CONSTRAINT payments_pk PRIMARY KEY (id)
);
-- ddl-end --

-- object: fk_employes_products | type: CONSTRAINT --
-- ALTER TABLE products DROP CONSTRAINT IF EXISTS fk_employes_products CASCADE;
ALTER TABLE products ADD CONSTRAINT fk_employes_products FOREIGN KEY (employe_id)
REFERENCES employees (id) MATCH SIMPLE
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: fk_roles_employees | type: CONSTRAINT --
-- ALTER TABLE employees DROP CONSTRAINT IF EXISTS fk_roles_employees CASCADE;
ALTER TABLE employees ADD CONSTRAINT fk_roles_employees FOREIGN KEY (rol_id)
REFERENCES roles (id) MATCH SIMPLE
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: fk_products_cart | type: CONSTRAINT --
-- ALTER TABLE cart DROP CONSTRAINT IF EXISTS fk_products_cart CASCADE;
ALTER TABLE cart ADD CONSTRAINT fk_products_cart FOREIGN KEY (product_id)
REFERENCES products (id) MATCH SIMPLE
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: fk_orders_cart | type: CONSTRAINT --
-- ALTER TABLE cart DROP CONSTRAINT IF EXISTS fk_orders_cart CASCADE;
ALTER TABLE cart ADD CONSTRAINT fk_orders_cart FOREIGN KEY (order_id)
REFERENCES orders (id) MATCH SIMPLE
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: fk_persons_orders | type: CONSTRAINT --
-- ALTER TABLE orders DROP CONSTRAINT IF EXISTS fk_persons_orders CASCADE;
ALTER TABLE orders ADD CONSTRAINT fk_persons_orders FOREIGN KEY (person_id)
REFERENCES persons (id) MATCH SIMPLE
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --

-- object: fk_payments_orders | type: CONSTRAINT --
-- ALTER TABLE orders DROP CONSTRAINT IF EXISTS fk_payments_orders CASCADE;
ALTER TABLE orders ADD CONSTRAINT fk_payments_orders FOREIGN KEY (payment_id)
REFERENCES payments (id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: fk_persons_payment | type: CONSTRAINT --
-- ALTER TABLE payments DROP CONSTRAINT IF EXISTS fk_persons_payment CASCADE;
ALTER TABLE payments ADD CONSTRAINT fk_persons_payment FOREIGN KEY (person_id)
REFERENCES persons (id) MATCH SIMPLE
ON DELETE CASCADE ON UPDATE CASCADE;
-- ddl-end --


