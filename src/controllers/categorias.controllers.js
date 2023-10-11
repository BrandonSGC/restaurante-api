import Categoria from "../models/Categoria.js";

// Listar todas las categorías en orden alfabético
export const listarCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll({
      order: [['nombre', 'ASC']],
    });
    
    if (categorias.length === 0) {
      return res.status(404).json({ message: 'No se han encontrado categorías.' });
    }
    
    res.status(200).json(categorias);
  } catch (error) {
    console.log(`Ocurrió un error al obtener las categorías: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};


// Crear una nueva categoría
export const crearCategoria = async (req, res) => {
  try {
    const { nombre } = req.body;

    // Verifica si la categoría ya existe
    const categoriaExistente = await Categoria.findOne({ where: { nombre } });

    if (categoriaExistente) {
      return res.status(400).json({ message: 'La categoría ya existe.' });
    }

    await Categoria.create({ nombre });

    res.status(201).json({ message: 'Categoría creada exitosamente.' });
  } catch (error) {
    console.log(`Ocurrió un error al crear una categoría: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

// Eliminar una categoría
export const eliminarCategoria = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'Por favor, seleccione una categoría.' });
    }

    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ message: 'La categoría no existe.' });
    }

    await categoria.destroy();
    res.status(200).json({ message: 'Categoría eliminada exitosamente.' });
  } catch (error) {
    console.log(`Ocurrió un error al eliminar una categoría: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

// Editar una categoría
export const editarCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'Por favor, seleccione una categoría.' });
    }

    const categoria = await Categoria.findByPk(id);

    if (!categoria) {
      return res.status(404).json({ message: 'La categoría no existe.' });
    }

    categoria.nombre = nombre;
    await categoria.save();

    res.status(200).json({ message: 'Categoría actualizada exitosamente.' });
  } catch (error) {
    console.log(`Ocurrió un error al editar una categoría: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};
