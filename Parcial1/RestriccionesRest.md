#  Restricciones Rest 
Para que una API sea considerada RESTful, debe cumplir con una serie de restricciones o principios definidos por Roy Fielding, quien introdujo la arquitectura REST (Representational State Transfer) en su disertación doctoral. Las restricciones que deben cumplirse son las siguientes:

 1. Cliente-Servidor 
El principio de separación de responsabilidades establece que el cliente y el servidor deben estar claramente separados. El cliente es responsable de manejar la interfaz de usuario y el servidor de almacenar datos y lógica de negocio. Esta separación permite la evolución independiente de ambas partes.

    **Ventajas:**
Mejora la portabilidad de la interfaz de usuario a múltiples plataformas.
Permite que los componentes del servidor evolucionen sin afectar al cliente y viceversa.

2. Sin estado (Stateless)
Cada solicitud del cliente al servidor debe contener toda la información necesaria para que el servidor pueda procesarla. Esto significa que el servidor no debe almacenar ningún estado de la sesión del cliente entre solicitudes.

    Ejemplo: Si un cliente necesita autenticarse en varias solicitudes, debe enviar la información de autenticación (como tokens) en cada una de ellas.

    Ventajas:

    Escalabilidad mejorada, ya que no hay sobrecarga en el servidor para gestionar el estado del cliente.
    Facilidad en el balanceo de carga y recuperación ante fallos.
3. Cacheable
Las respuestas del servidor deben ser etiquetadas como cacheables o no cacheables. Si una respuesta es cacheable, el cliente puede reutilizar esa respuesta en solicitudes futuras para reducir la necesidad de interactuar nuevamente con el servidor.

    Ventajas:
    Mejora el rendimiento de las aplicaciones al reducir la carga en el servidor y disminuir la latencia.
Reduce la duplicación de datos transferidos innecesariamente.
4. Interfaz uniforme (Uniform Interface)
La uniformidad en la interfaz es uno de los principios más importantes de REST. Las interacciones entre el cliente y el servidor se rigen por una interfaz única, bien definida. Esto se logra a través de:

    Identificación de recursos: Todos los recursos (entidades o datos) se deben identificar mediante URL únicas.
Manipulación de recursos a través de representaciones: El cliente interactúa con los recursos mediante representaciones de ellos (normalmente en JSON o XML).
Mensajes autodescriptivos: Cada solicitud debe contener toda la información necesaria para ser entendida y procesada de manera autónoma.
Hipermedios como el motor del estado de la aplicación (HATEOAS): Los clientes deben ser capaces de descubrir qué acciones están permitidas a través de los hipervínculos proporcionados en las respuestas.
5. Arquitectura en capas
La arquitectura REST puede estar dividida en capas. Estas capas pueden encargarse de diferentes responsabilidades, como la gestión de la seguridad, balanceo de carga, o cacheo. El cliente no debe poder diferenciar entre las capas, lo que mejora la modularidad.

    Ventajas:
Mejora la escalabilidad, ya que cada capa puede ser gestionada y escalada de manera independiente.
Incrementa la seguridad al aislar funciones en diferentes capas.
6. Código bajo demanda (opcional)
Aunque no es un requisito obligatorio, REST permite que los servidores envíen código ejecutable (como scripts o applets) al cliente para extender su funcionalidad.