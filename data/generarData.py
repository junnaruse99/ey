
from random import randrange
import json

articulos = []

for i in range (100):
    articulos.append({
        'id': i,
        'codigo': 'ART' + '0'*(3 - len(str(i))) + str(i),
        'nombre': 'Producto' + str(i),
        'descripcion': 'Descripcion',
        'cantidad': randrange(10)
    })    

with open('articulos.json', 'w') as f:
    json.dump(articulos, f)