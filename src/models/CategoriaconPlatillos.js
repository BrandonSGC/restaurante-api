import { sequelize } from '../database/connection.js';
import { DataTypes } from 'sequelize';
import Platillos from './Platillos.js'; // Importa el modelo Platillos

const Categoria = sequelize.define(
    'Categoria', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
    }, {
        timestamps: false,
        tableName: 'Categorias',
    }
);

// Define la asociación entre Categoria y Platillos
Categoria.hasMany(Platillos, { foreignKey: 'categoria_id', as: 'platillos' });

export default Categoria;