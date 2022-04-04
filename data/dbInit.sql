IF db_id('EYDB') IS NULL 
CREATE DATABASE EYDB; 

GO 

CREATE TABLE EYDB.dbo.Articulos ( 
id int identity(1,1), 
codigo varchar(50), 
nombre varchar(50), 
descripcion varchar(100), 
cantidad int); 

INSERT INTO EYDB.dbo.Articulos 
(codigo, nombre, descripcion, cantidad) 
VALUES 
('ART000', 'Producto0', 'Descripcion', 7), 
('ART001', 'Producto1', 'Descripcion', 0), 
('ART002', 'Producto2', 'Descripcion', 4), 
('ART003', 'Producto3', 'Descripcion', 5), 
('ART004', 'Producto4', 'Descripcion', 3), 
('ART005', 'Producto5', 'Descripcion', 2), 
('ART006', 'Producto6', 'Descripcion', 5), 
('ART007', 'Producto7', 'Descripcion', 4), 
('ART008', 'Producto8', 'Descripcion', 6), 
('ART009', 'Producto9', 'Descripcion', 8)