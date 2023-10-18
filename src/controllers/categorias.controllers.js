import Categoria from "../models/Categoria.js";
import Platillo from "../models/Platillos.js"

// Listar todas las categorías en orden alfabético
export const listarCategorias = async(req, res) => {
    try {
        const categorias = await Categoria.findAll({
            order: [
                ['nombre', 'ASC']
            ],
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
export const crearCategoria = async(req, res) => {
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
export const eliminarCategoria = async(req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: 'Por favor, seleccione una categoría.' });
        }

        const categoria = await Categoria.findByPk(id);

        if (!categoria) {
            return res.status(404).json({ message: 'La categoría no existe.' });
        }

        // Busca los platillos relacionados con la categoría
        const platillosRelacionados = await Platillo.findAll({
            where: {
                categoria_id: id,
            },
        });

        // Elimina la relación con la categoría (actualiza la clave foránea a NULL)
        await Platillo.update({ categoria_id: null }, {
            where: {
                categoria_id: id,
            },
        });

        // Elimina la categoría
        await categoria.destroy();

        res.status(200).json({ message: 'Categoría eliminada, pero los platillos conservan la relación.', categoria, platillosRelacionados });
    } catch (error) {
        console.log(`Ocurrió un error al eliminar una categoría: ${error.message}`);
        res.status(500).json({ message: error.message });
    }
};



export const updateCategoria = async(req, res) => {
    try {
        const { id } = req.params;
        const { nombre } = req.body;
        const categoria = await Categoria.findByPk(id);

        if (categoria) {
            const cambiosRealizados = {};

            if (nombre !== categoria.nombre) {
                cambiosRealizados.nombre = nombre;
                categoria.nombre = nombre;
            }

            await categoria.save();

            res.status(200).json({ message: "Categoria actualizada exitosamente.", categoria });

        } else {
            res.status(404).json({ message: "Categoria no encontrado." });
        }
    } catch (error) {
        console.log(
            `Ocurrió un error al actualizar una Categoria: ${error.message}`
        );

        res.status(500).json({ message: error.message });
    }
};

export const getCategoriaID = async(req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            const categoria = await Categoria.findByPk(id);
            if (categoria) {
                res.status(200).json(categoria);
            } else {
                res.status(404).json({ message: "Categoria no encontrado." });
            }
        } else {
            const categorias = await Categoria.findAll();
            if (categorias.length > 0) {
                res.status(200).json(categorias);
            } else {
                res.status(404).json({ message: "No se encontraron las Categorias." });
            }
        }
    } catch (error) {
        console.log(
            `Ocurrió un error al obtener las Categorias: ${error}`
        );

        res.status(500).json({ message: error.message });
    }
};