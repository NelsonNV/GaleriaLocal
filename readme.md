# Galeria Local

este programa busca facilitar el crear un servidor local en hogar para ver videos o peliculas que ya tengas descargados.

## intrucciones

Nesesitas instalar python3 y flask para que puedas utilizar el programa

- dentro de la carpeta donde tengas en main.py y index.html creas una carpeta que se llame `static` y dentro tienes que poner una carpeta que se llame  `videos` recomiendo si estas en linux usar un enlace simbolico con la carpeta videos.

si estas en windows puedes tranformar esa carpeta en la carpeta de videos del sistema o simplemente mover tus videos y peliculas que quieras adentro de la carpeta **videos**


## Usar enlace simbolicos

En caso de que quieras mostrar los videos de tu carpeta principal de videos puedes usar los enlaces simbolicos asi no mueves o copias videos

### windows 
**Recordar ejecutar como administrador en la cmd o powershell**

``mklink /J "static\videos" "[carpeta video]"``

### linux
`ln -s [capreta video] static/video`


## privacidad

para esta se debe crear una carpeta con el nombre `videosPrivados` 

para esta solo se acedera con una contraseña que se escribe en main.py
