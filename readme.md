# Gestor de Citas Médicas - Simulación de Base de Datos MongoDB

Este proyecto tiene como objetivo simular una base de datos de un hospital utilizando MongoDB. Se modelan colecciones que representan médicos, usuarios y citas médicas, y se implementa un sistema de inicio de sesión con diferentes niveles de acceso.

## Diseño de la Simulación

### Colecciones

1. **Médicos:** Contiene detalles ficticios de los médicos, como nombres, especialidades y horarios de consulta.
2. **Usuarios:** Almacena información ficticia de los usuarios del sistema, incluyendo datos de contacto y credenciales de inicio de sesión.
3. **Citas Médicas:** Registra citas médicas simuladas con información de pacientes (usuarios), médicos, fechas y horas.

### Sistema de Inicio de Sesión

Se ha implementado un sistema de inicio de sesión simulado con dos tipos de usuarios:

1. **Usuario Específico:** Permite acceso total a la información de todas las colecciones, lo que permite consultas detalladas y exploración completa de los datos ficticios.
2. **Usuario Limitado:** Ofrece acceso limitado a la información. Solo se pueden visualizar las citas médicas relacionadas con el usuario, como si fueran sus propias citas.

## Uso de la Simulación

1. **Inicio de Sesión:** Los usuarios ingresan utilizando credenciales predefinidas para acceder al sistema. Dependiendo del tipo de usuario seleccionado, se establece el nivel de acceso.
2. **Exploración de Datos:** Una vez dentro, los usuarios pueden explorar los datos ficticios. Los usuarios específicos tienen acceso completo a todas las colecciones y pueden ejecutar consultas detalladas. Los usuarios limitados tienen un acceso restringido y solo pueden ver sus citas simuladas.
3. **Agendamiento de Citas:** No se permite la creación, actualización o eliminación de citas en esta simulación, ya que la base de datos contiene datos predefinidos.

# Instrucciones para Utilizar la Simulación del Gestor de Citas Médicas con MongoDB

Para utilizar la simulación del gestor de citas médicas con MongoDB, sigue estos pasos:

## Clonar el Repositorio

1. Abre tu terminal o línea de comandos.
2. Ejecuta el siguiente comando para clonar el repositorio desde GitHub:

```
git clone https://github.com/Nirclaw/Mongo_citas.git
```





## Configuración e Inicio

1. Asegúrate de tener Node.js y npm (Node Package Manager) instalados en tu sistema. Si no los tienes, puedes descargarlos e instalarlos desde [aquí](https://nodejs.org/).
2. Instala las dependencias del proyecto ejecutando:

```
npm install
```

1. Una vez que todas las dependencias estén instaladas, inicia la simulación ejecutando:

```
npm run dev
```

## Notas

- Esta simulación está diseñada para propósitos educativos y de demostración. No se conecta a una base de datos real y utiliza datos ficticios generados para ilustrar el concepto del gestor de citas médicas.
- Asegúrate de que estés en el directorio correcto del proyecto y de haber instalado las dependencias antes de ejecutar el comando `npm run dev`



# Recomendación para Utilizar Thunder Client con el Proyecto de Gestor de Citas Médicas

Para interactuar con el proyecto de gestor de citas médicas, se recomienda utilizar la extensión Thunder Client para Visual Studio Code. Dado que el proyecto no cuenta con una interfaz gráfica, Thunder Client facilitará la realización de solicitudes HTTP a los endpoints proporcionados. A continuación, se detallan los endpoints disponibles y cómo utilizarlos con Thunder Client.



# iniciar sesion 

## Credenciales de Acceso para Simulación de Gestor de Citas Médicas

En esta simulación del gestor de citas médicas, se utilizan diferentes roles para definir los niveles de acceso a las consultas de las colecciones. A continuación, se detallan las credenciales para los dos roles principales:

### Rol: Admin

- **Usuario:** Nicolas
- **Contraseña:** 123456789
- **Acceso:** Tiene acceso a todas las consultas de las colecciones de médicos, usuarios y citas médicas. y a todas sus versiones 
- versiones : 1.0.0

### Rol: User

- **Usuario:** Miguel
- **Contraseña:** 123456789
- **Acceso:** Tiene acceso únicamente a la colección de citas médicas y a sus propias consultas.
- versiones : 1.0.0

Estas credenciales te permitirán experimentar con diferentes niveles de acceso y realizar consultas en las colecciones correspondientes, según el rol que elijas utilizar durante la simulación.

**POST**

http://127.10.10.10:5100/login/

pasar los datos asi 

```json
{
  "user": "Nicolas",
  "password": "123456789"
}
```

Después de iniciar sesión exitosamente, recibirás una clave de autenticación que estará activa durante un período limitado de 3 horas. Esta clave es esencial para autorizar tus solicitudes y acceder a los endpoints correspondientes en la simulación del gestor de citas médicas.





Una vez hayas ingresado tus credenciales y enviado la solicitud de inicio de sesión, el servidor te proporcionará una clave de autenticación en la respuesta. Esta clave es esencial para identificarte en las solicitudes futuras y acceder a los endpoints correspondientes.

Luego, al realizar solicitudes a otros endpoints, debes incluir esta clave en los encabezados de la solicitud. Esto se logra agregando un encabezado "Authorization" con el valor "Bearer [tu_clave_de_autenticación]". Por ejemplo: Authorization: Bearer tu_clave_de_autenticación





# IMPORTANTE

**Recuerda que una vez que la clave de autenticación expire después de las 3 horas, deberás iniciar sesión nuevamente para obtener una nueva clave y continuar utilizando la simulación.**





# ENDPOINDS

## USUARIO

**GET** 

Obtener todos los pacientes alfabéticamente

http://127.10.10.10:5100/usuario/

----------------

**GET**

http://127.10.10.10:5100/cita/

Obtener todas las citas alfabéticamente

----------------------

**GET**

http://127.10.10.10:5100/medico/

Obtener todos los médicos de una especialidad específica (por ejemplo, **'Cardiología'**):

----------------------

**GET**

Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con **1**):

http://127.10.10.10:5100/cita/55443322

------------------

**GET**

Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **med_nroMatriculaProsional 1**)

http://127.10.10.10:5100/cita/medico/567890

--------------

**GET**

Obtener las consultorías para un paciente específico (por ejemplo, paciente **con usu_id 1**)

http://127.10.10.10:5100/cita/paciente/9988776

-------------

**GET**

Encontrar todas las citas para un día específico (por ejemplo, **'2023-07-12'**)

http://127.10.10.10:5100/cita//fecha-cita/2023-07-12

-----------------

**GET**

Obtener los médicos y sus consultorios

http://127.10.10.10:5100/medico/medicos

---------------------

**GET**

http://127.10.10.10:5100/cita/numCitas

Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_nroMatriculaProsional 1 en '2023-07-12'**)

```json
{
  "id": "345678",
  "fecha": "2023-08-25"
}
```

---------

**GET**

Obtener los consultorio donde se aplicó las citas de un paciente

http://127.10.10.10:5100/usuario/consultoriospaciente/99887766

---------------------

**GET**

 Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendidad

http://127.10.10.10:5100/usuario/citasGenero/F

http://127.10.10.10:5100/usuario/citasGenero/M

----------------------------

**GET**

http://127.10.10.10:5100/citas/rechazadas

Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.