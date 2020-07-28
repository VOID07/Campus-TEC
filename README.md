[[_TOC_]]

# 1. Introducción <a id="introduccion"/>
## 1.1 Breve descripción del propósito del sistema <a id="descripcion"/>

CampusTEC se presenta como un a solución al problema de una virtualización repentina de los cursos de la universidad X-TEC, debido a la pandemia de COVID-19. 

La plataforma CampusTEC, pretende llevar indicadores de motivación, estrés, porcentaje de tareas entregadas, entre otros, a los niveles normales previos a la pandemia, esto mediante el fortalecimiento de las interacciones digitales entre estudiantes y profesores en un curso, además de proveer un sistema que permita mejorar la planificación de las tareas a realizar durante las semanas del semestre por parte de los estudiantes, esto mediante la creación de actividades y retos dentro de los cursos, que pueden permitir obtener una remuneración económica al ser completados.

Por parte de X-TEC, permite reducir gastos administrativos de evaluaciones que aumentaros su frecuencia, permitiendo que se sigan invirtiendo fondos en otros proyectos de bienestar institucional, así como de investigación y extensión.


## 1.2 Restricciones y limitaciones  <a id="restricciones"/>
El documento presente tiene como alcance únicamente describir lo que se ha hablado
durante las sesiones, y todos aquellos acuerdos a los que se ha llegado durante sesiones (y descritos
en las minutas aprobadas). Cualquier modificación que se requiera por cualquiera de las partes, se
tiene que someter a discusión y luego a análisis con el fin de definir los costos y posibles riesgos que
el cambio pueda significar para la percepción actual del producto.

## 1.3 Definición de listo (Definition of Done) del equipo de trabajo <a id="dofdone"/>
Para que una funcionalidad se pueda entregar como completa, debe cumplir con todos los puntos a continuación, correspondientes a la definición de listo del equipo:
- Pruebas unitarias con al menos un 80% de aprobación.
- Documentación interna de todas las funciones implementadas utilizando formato definido por el equipo.
- Si aplica, añadir al manual de usuario la documentación respectiva.
- Código con el formato definido por el equipo (nombres de varialbles, nombres de funciones, identación)
- Código sincronizado en su propio branch en github, luego integrado en el branch develop.

# 2. Requerimientos Funcionales
En esta sección se listan las funcionalidades e historias de usuario del sistema, dentro de cada historia de usuario.
Se incluyen los diagramas de funcionalidades de los diferentes features como archivos adjuntos en cada uno de los features listados en la sección [2.1](#feature)
Se incluye el mockUp de las historias de usuario como archivo adjunto en cada una de las historias listadas en la sección [2.2](#us)

<a id="feature"></a>
## 2.1 Listado de Features y diagrama de funcionalidades (aplicado a User Stories)
#9
#10
#11
#12

<a id="us"></a>
## 2.2 User stories 
#13
#14
#15
#16
#17
#18
#19
#20
#21
#22
#23
#24
#25
#26
#27
#28
#29
#30

## 2.3 Diagrama de Secuencia de Sistema: Crear Reto de Curso
::: mermaid

sequenceDiagram
Profesor->>Login_service: Ingresar credenciales
activate Profesor
activate Profesor
activate Login_service
Login_service->>Auth_Service: Verificar credenciales
activate Auth_Service
Auth_Service->> DB: Request credenciales usuario
activate DB
DB ->> Auth_Service : Credenciales de usuario
deactivate DB
Auth_Service ->> Profesor: Credenciales incorrectos
deactivate Profesor
Auth_Service ->> Login_service: Credenciales correctos
deactivate Auth_Service
Login_service ->> Perfil: Redirige
deactivate Login_service
activate Perfil
Perfil -->> Profesor : Perfil personal // Cursos
deactivate Perfil
Profesor ->> Cursos: Curso seleccionado
activate Cursos
Cursos -->> Profesor: Semanas
deactivate Cursos
Profesor ->> Semana_curso: Semana seleccionada
activate Semana_curso
Semana_curso -->> DB : Query Actividades y retos - Semana
activate DB
DB -->> Semana_curso: Actividades y retos -Semana
deactivate DB
Semana_curso -->> Profesor: Actividades y retos - Semana
deactivate Semana_curso
loop Para n retos por semana
Profesor ->> Semana_curso: Crear reto
activate Semana_curso
Semana_curso -->> Retos: Crear reto
deactivate Semana_curso
activate Retos
Retos -->> Profesor: Campos de reto
Profesor ->> Retos: Información reto
loop Para n actividades por reto
Retos ->> Actividades: Crear actividad
activate Actividades
Actividades -->> Profesor: Campos actividad
Profesor ->> Actividades: Información actividad
Actividades -->> Retos: Listado de actividades
deactivate Actividades
end
Retos -->> Profesor: Listado de retos
Retos -->> Twitter API: Publicar Reto
activate Twitter API
Twitter API -->> Retos : Server Response
deactivate Twitter API
deactivate Retos
end
deactivate Profesor
:::
## 2.4 Diagrama de Actividad: Crear y completar un reto de curso

<center>
<img src="https://app.lucidchart.com/publicSegments/view/2253a262-ccf8-4178-a599-fb3947dfcbb1/image.png"  width="50%">
</center>

## 2.5 Matriz de rastreo de dependencias de User Stories
[Matriz Rastreo de los requerimientos](/.attachments/Matriz%20de%20rastreo%20-%20Hoja%201-829861e3-10d4-473f-a0ad-026d91470be6.pdf)
![Anotación 2020-07-27 213146.png](/.attachments/Anotación%202020-07-27%20213146-26203af3-6f2f-4a57-a9c7-6bc024cc8e25.png)
# 3. Requerimientos no funcionales

En todo proyecto se requiere una serie de requerimientos no funcionales, es decir requerimientos que no están relacionados con alguna funcionalidad del sistema como lo que se detallaron en las secciones previas, en cambio, este tipo de requerimiento especifican criterios para evaluar la operación representando comportamientos necesarios que deben seguir el sistema.

## 3.1 Requerimientos no funcionales
### 3.1.1 Usabilidad
- El sistema no contará con funcionalidades acorde a la ley 7600 en esta versión del producto.
- Se realizarán pruebas de usabilidad sobre la aplicación con al menos 3 usuarios en total.

### 3.1.2 Fiabilidad
- La información obtenida sobre el sistema de registro de X-TEC se realizará por medio del uso de XML. El formato del XML será facilitado por el cliente.
- La ubicación de la base de datos a utilizar a lo largo de la aplicación será discutido en una futura sesión.
- El diferencial de toda la información de la base de datos deberá ser respaldada diariamente y deberá ser respaldada completamente semanalmente.
- El sistema no se bloqueará en caso de múltiples fallos durante el inicio de sesión.
- En caso de fallo crítico del sistema deberá mostrar un mensaje indicando que el sistema no se encuentra disponible
- En caso de fallo por parte de Twitter deberá mostrar un mensaje indicando que no se puede conectar con el servicio.

### 3.1.3 Rendimiento
- La aplicación deberá poder mantener 1000 usuarios de Campus TEC Conectados simultáneamente
- El tiempo de respuesta dentro de la aplicación deberá ser de 2 segundos en al menos 90% de los casos y 4 segundos durante la generación de reportes.
- Se debe cumplir con los requisitos de Hardware mínimos especificados en las secciones [3.2.2](#hardware1) y  [3.2.3](#hardware2)

### 3.1.4 Soporte
- La plataforma deberá ser optimizada para Google Chrome y Mozilla Firefox. Las versiones de los navegadores serán discutidos en una futura sesión.

### 3.1.5 Requerimientos Adicionales
- La tipografía utilizada a lo largo de la aplicación será discutido en una futura sesión.
- El logotipo de X-TEC a utilizar a lo largo de la aplicación será discutido en una futura sesión.
- El logotipo de Campus TEC a utilizar a lo largo de la aplicación será discutido en una futura sesión.
- El manual de marca a utilizar a lo largo del proyecto será discutido en una futura sesión.


## 3.2 Restricciones del sistema  

En esta sección se describen las restricciones desde el punto de vista de Hardware y Software que deben ser considerados . Consideran restricciones de implementación tecnología, convenciones, elementos de plataforma como: memoria, ancho de banda o capacidad de procesamiento.

### 3.2.1 Restricciones operativas de la plataforma 
- El sistema será accesible dentro y fuera de la red de X-TEC.
- La aplicación debe ser programada utilizando JAVA o C#, junto con web technologies.
- La plataforma se plantea en este sprint, como una plataforma web para PC, por lo que no se asegura su correcto funcionamiento en dispositivos móviles.
- Para lo que es el manejo de información del sistema se utilizara el SGDB MSSQL Server.
- Se utilizan las versiones LTS más recientes de todas las tecnologías a utilizar, disponibles al 27/07/2020.
<a id='hardware1'></a>
### 3.2.2 Requisitos de Hardware mínimos para el servidor

|**Componente**|  **Requerimiento**|
|-|--|
| Almacenamiento | **Mínimo:**  40 GB Disponibles  |
| Monitor | **Mínimo:** Super-VGA (800x600) |
| Internet |  Acceso a internet|
| Memoria | **Mínimo:** 1 GB |
| Frecuencia del procesador|**Mínimo:** 1.4 GHz|
| Tipo de procesador|  64-bit |
<a id='hardware2'></a>
### 3.2.3 Requisitos de Hardware mínimos para el cliente

|**Componente**| **Requerimiento** |
|--|--|
| Procesador | **Mínimo:** 1.0 GHz |
| Memoria | **Mínimo:** 1 GB para SO de 32 bits o 2 GB para SO de 64 bits |
| Gráficos | **Mínimo:** Tarjeta compatible con DirectX (o su equivalente OpenGL) y con 64 MB |
| Pantalla | **Mínimo:** Resolución 800x600 |
| Disco Duro | **Mínimo:** 16 GB para un SO de 32 bits o 32 GB para un SO de 64 bits |
| Otros Requisitos | Se necesita conexión a internet |



## 3.3 Descripción de Interfaces Externas
# 4. Elementos Adicionales
## 4.1 Minutas de las reuniones de requerimientos con el cliente
[PEDS-JYD_ Minuta Sesión 1.pdf](/.attachments/PEDS-JYD_%20Minuta%20Sesión%201-7198947d-7016-472b-a3a4-56f236aba627.pdf)

[PEDS-JYD_ Minuta Sesión 2.pdf](/.attachments/PEDS-JYD_%20Minuta%20Sesión%202-5974ab0a-75ad-46b9-8294-ab66d2c33594.pdf)

[PEDS-JYD_ Minuta Sesión 3.pdf](/.attachments/PEDS-JYD_%20Minuta%20Sesión%203-2f99298d-6322-4e07-aadc-03987c2024b0.pdf)

[PEDS-JYD_ Minuta Sesión 4.pdf](/.attachments/PEDS-JYD_%20Minuta%20Sesión%204-e3490113-c832-4676-916c-323c90be8dc9.pdf)

[PEDS-JYD_ Minuta Sesión 5.pdf](/.attachments/PEDS-JYD_%20Minuta%20Sesión%205-6928fad2-4457-45e9-a78c-89a520d06b60.pdf)

[PEDS-JYD_ Minuta Sesión 6.pdf](/.attachments/PEDS-JYD_%20Minuta%20Sesión%206-8805f3e1-798f-485e-9bad-d06be17e46e7.pdf)
