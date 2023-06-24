#!/bin/bash
echo "Nos cambiamos de directorio al proyecto"
cd /home/mediacion/mediacion_code
echo "Actualizamos el codigo del proyecto deacuerdo con el del servidor de versiones"

echo "Creamos la red de los contenedores en caso de no existir"
docker network inspect proyecto_final-network >/dev/null 2>&1 || docker network create proyecto_final-network
echo "realizamos un pull de lo que se requiere para generar los contenedores"
docker-compose pull
echo "construimos las imagenes"
docker-compose build
echo "se crean los contenedores"
docker-compose up -d
echo "se limpian los residuos de las ejecuciones fallidas"
docker system prune -a -f
echo "termino la el despliegue de la aplicacion"