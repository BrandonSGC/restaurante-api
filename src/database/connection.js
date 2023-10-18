import Sequelize from "sequelize";

// Configura la conexión a MySQL
export const sequelize = new Sequelize("tarea3", "root", "jesus261999", {
    host: "localhost", // Cambia a la dirección del servidor MySQL si es diferente
    dialect: "mysql",
});