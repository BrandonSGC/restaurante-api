import { sequelize } from '../database/connection.js';
import { DataTypes } from 'sequelize';

const Categoria = sequelize.define(
  'Categoria',
  {
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
  },
  {
    timestamps: false,
    tableName: 'Categorias',
  }
);

export default Categoria;
