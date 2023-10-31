// COMO CREAR UN REPOSITORIO
/*
1- Abrir terminal y escribir git init
2- Escribir git add .
3- Escribir git commit -m "Mensaje", con esto ya tenemos el primer repositorio creado.
4- Crear el repositorio en github.
5- Copiar los comandos de "or push..." y pegarlos en la terminal de vscode.
6- Listo, ya se creó nuestra primera rama (main) con nuestro primer commit.
    en este paso puede pedir login. A mi me pidió vincular github con git y listo.
7- Ahora hay que implementar las reglas de gitflow.
    La onda es no tener todo nuestro codigo en la rama main, ya que es la que ve el usuario final.
    Por eso creamos una nueva rama, la de desarrollo:
    git checkout -b develop
    darle click en publicar y sincronizar (barra de abajo, icono de nubecita) o sino en la terminal escribir:
    git push -u origin develop
8- Para no saturar una rama de commits, ya que por cada cambio en una funcionalidad de una app se debe hacer un commit, se sugiere
    crear una rama especifica para una funcionalidad especifica. Ej:
    git checkout -b feature/say-hello
    feature =  funcionalidad/say-hello = le decimos de que va a tratar esa funcionalidad.
9- Para probar lo anterior, creamos una funcion sayHello.
*/
function sayHello() {
    console.log("Hola chancho con cola")
}
/*
10- git add .
    git commit -m "feat: se ha agregado la funcion sayHello"
    git push
y verificamos si se subieron los cambios en github. Con esto, podemos movernos entre ramas, viendo solo actualizado lo de la rama
modificada. Ahora para subirlo a la rama principal (develop) hacemos un merge.
11- MERGE: git merge --no-ff feature/say-hello (el flag --no-ff es para que se sigan viendo los cambios pasados y no se pisen)
12- Crear una nueva rama a modo de practica y prueba de lo mismo, repitiendo los pasos (crearla, subirla, git add y git commit...)
*/
function sayBye() {
    console.log("bye bye bye")
}
/*
13- Hacer copia de seguridad el proyecto. Suponiendo que está es la primer version.
    crear una rama que contenga esta versión.
    git checkout -b release/1.0.0 
    NOMENCLATURA DE LA VERSION:
         1 = major: Si se actualiza este numero puede romper todo. Es entre una version y otra, esto puede
        traer incompatibilidades.
        2 = minor: nuevas features.
        3 = hotfix: cambios rapidos para hacer en el codigo.

14- Llevar los cambios a la rama main, siendo que es la version apta para el uso.
    git checkout main
    git merge --no-ff release/1.0.0
-----------------------------------------------------------------------------------------
OK, HASTA ACÁ SUBIMOS EL PROYECTO AL MAIN Y HAY UN BACKUP EN LA RAMA release1.0.0.
-----------------------------------------------------------------------------------------
15- Ahora vamos a ver las TAGS (estan en github, al lado de las ramas):
    Son pequeñas anotaciones para seguir ciertos puntos del codigo.
    Se sube como una rama.
    git tag -a v1.0.0 -m "version 1.0.0 lista"

16- SOLUCIONAR ERRORES URGENTES: hotfix
    Desde la rama main, creamos una nueva rama
    git checkout -b hotfix/bug-name (en vez de bug-name, reemplazar por el codigo a solucionar. En este ejemplo, /funcion-say-bye)
    Subirla desde la nubecita
    Hacer los cambios en el codigo
    Subirlos:
        git add .
        git commit -m "fix: se ha arreglado error en funcion sayBye()"
        
*/