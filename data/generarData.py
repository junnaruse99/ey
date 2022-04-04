
from random import randrange
import json

# Creo la base de datos
dbInit = ("IF db_id('EYDB') IS NULL \n" +
    'CREATE DATABASE EYDB; \n\n' +
    'GO \n\n')


# Creo la tabla
dbInit += ('CREATE TABLE EYDB.dbo.Articulos ( \n' + 
            'id int identity(1,1), \n' + 
            'codigo varchar(50), \n' + 
            'nombre varchar(50), \n' + 
            'descripcion varchar(100), \n' +
            'cantidad int); \n\n')

# Inserto elementos a la tabla
dbInit += ('INSERT INTO EYDB.dbo.Articulos \n' + 
        '(codigo, nombre, descripcion, cantidad) \n' + 
        'VALUES \n')

for i in range (10):
    dbInit += ('(' +
        "'ART" + '0'*(3 - len(str(i))) + str(i) + "', " + 
        "'Producto" + str(i) + "', " +
        "'Descripcion" + "', " + 
        str(randrange(10)) + '), \n')

with open('dbInit.sql', 'w') as f:
    f.write(dbInit[:-3])