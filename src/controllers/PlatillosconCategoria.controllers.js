import Categoria from "../models/CategoriaconPlatillos.js";
import Platillos from "../models/Platillos.js";


export const getCategoriasConPlatillos = async(req, res) => {
    try {
        // Obtener todas las categorías con sus platillos relacionados
        const categoriasConPlatillos = await Categoria.findAll({
            include: [{
                model: Platillos,
                as: 'platillos', // Esto debe coincidir con la asociación en tu modelo Categoria
            }, ],
        });

        if (categoriasConPlatillos.length === 0) {
            return res.status(404).json({ message: 'No se han encontrado categorías con platillos.' });
        }

        res.status(200).json(categoriasConPlatillos);
    } catch (error) {
        console.log(`Ocurrió un error al obtener categorías con platillos: ${error.message}`);
        res.status(500).json({ message: error.message });
    }
};