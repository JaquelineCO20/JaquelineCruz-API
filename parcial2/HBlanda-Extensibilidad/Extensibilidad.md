# Extensibilidad
El tema de la extensibilidad en las APIs, según el libro, parte del principio de que una buena API nunca está completamente terminada. Esto se debe a que, con el tiempo, las APIs requieren crecer o cambiar debido a diversos factores, como las nuevas formas en que los desarrolladores clientes utilizan la API o cambios en el modelo de negocio del propietario de la API.

**Extensibilidad:**
Se refiere a la capacidad de una API de evolucionar sin romper la funcionalidad de las aplicaciones que ya están usando versiones anteriores de la API. En otras palabras, una API extensible permite agregar nuevas funcionalidades o modificar las existentes sin obligar a los clientes a adaptarse inmediatamente a los cambios.

**Gestión de la Extensibilidad:**
Cuando se extiende una API, se libera una nueva versión del software. Aquí es crucial comunicar estos cambios a los usuarios de la API (los desarrolladores) y asegurarse de que sus aplicaciones seguirán funcionando. Al hacerlo, es importante tener en cuenta varios aspectos clave:
- **Compatibilidad retroactiva:** Asegurarse de que los cambios no rompan el funcionamiento de las aplicaciones existentes.
- **Versionado:** Permitir a los clientes elegir qué versión de la API quieren utilizar. Esto se logra generalmente incluyendo el número de versión en la URL de los recursos (p. ej., `/v1/recurso`).
- **Desfase de versiones anteriores:** Mantener las versiones anteriores durante un tiempo razonable para que los desarrolladores puedan migrar sus aplicaciones a la nueva versión sin prisas.

Una buena API debe tener en cuenta los siguientes puntos:
- ¿Es fácil añadir nuevos puntos finales?
- ¿Es la nueva versión compatible con versiones anteriores?
- ¿Pueden los clientes seguir trabajando con versiones anteriores de la API mientras se actualiza su código?
- ¿Qué ocurrirá con los clientes existentes que utilicen la nueva API?
-¿Hasta qué punto será fácil para los clientes dirigirse a la nueva versión de la API?

**Esquemas de versionado:**
El versionado es crucial para la extensibilidad. Uno de los esquemas populares es el versionado semántico (SemVer), donde las versiones de la API siguen el formato: `MAYOR.MENOR.PARCHE`. El número mayor se incrementa cuando se introducen cambios no retrocompatibles, el menor cuando se añaden nuevas características sin romper la compatibilidad y el parche se incrementa con correcciones de errores.

Además, se destacan enfoques de versión en la URL, donde cada endpoint contiene el número de versión o bien un URL sin versión explícita que apunta a la última versión disponible. Estos enfoques tienen ventajas y desventajas que deben ser evaluadas dependiendo del contexto de uso.

En resumen, la extensibilidad es un atributo clave de una API bien diseñada, asegurando que puede evolucionar de manera controlada y escalable  .

# Ventajas:
* Claridad en la versión utilizada.
* Facilita la migración de versiones.
* Permite mantener varias versiones de la API.
* Simplifica las migraciones sin interrupciones para los clientes.
* Asegura compatibilidad hacia atrás para actualizaciones.
* URLs más simples.
* Migración instantánea al último código de la API.
* Migración más sencilla desde la perspectiva del cliente.
* Facilita pruebas en la última versión de la API.

# Desventajas
* Las URLs son más largas.
* Un mal manejo del código de versión puede hacer más difícil la migración entre versiones si se codifica manualmente en cada endpoint.
* La versión oculta puede generar confusión.
* Los cambios no compatibles rompen a los clientes sin versiones específicas.
* Requiere una arquitectura más compleja para gestionar la selección de versiones.
