//modulo
 
/**
 * Saludar a una persona con su nombre.
 * 
 * @param {string} nombre - El nombre de la persona a saludar.
 * @returns {string} -Mensaje de saludo.
 */
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

/**
 * Despedirse de una persona con su nombre.
 * 
 * @param {string} nombre - Nombre de la persona a despedir.
 * @returns {string} -Mensaje de despedida.
 */
function despedirse(nombre) {
    return `Adiós, ${nombre}!`;
}

module.exports = {
    saludar,
    despedirse
};
