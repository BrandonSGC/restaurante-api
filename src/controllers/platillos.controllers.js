import Platillo from "../models/Platillos.js";

// Crear un nuevo platillo
export const createPlatillo = async(req, res) => {
    try {
        const { nombre, costo, categoria_id, activo } = req.body;
        const nuevoPlatillo = await Platillo.create({
            nombre,
            costo,
            categoria_id,
            activo,
        });

        res.status(201).json({
            message: "Platillo creado exitosamente",
            platillo: nuevoPlatillo,
        });
    } catch (error) {
        console.log(
            `Ocurrió un error al crear un platillo: ${error.message}`
        );
        res.status(409).json({ message: error.message });
    }
};

// Consultar platillos
export const getPlatillo = async(req, res) => {
    try {
        const platillos = await Platillo.findAll();
        if (platillos.length > 0) {
            res.status(200).json(platillos);
        } else {
            res.status(404).json({ message: "No se encontraron platillos." });
        }
    } catch (error) {
        console.log(
            `Ocurrió un error al obtener los platillos: ${error}`
        );

        res.status(500).json({ message: error.message });
    }
};

export const getPlatilloID = async(req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            const platillo = await Platillo.findByPk(id);
            if (platillo) {
                res.status(200).json(platillo);
            } else {
                res.status(404).json({ message: "Platillo no encontrado." });
            }
        } else {
            const platillos = await Platillo.findAll();
            if (platillos.length > 0) {
                res.status(200).json(platillos);
            } else {
                res.status(404).json({ message: "No se encontraron platillos." });
            }
        }
    } catch (error) {
        console.log(
            `Ocurrió un error al obtener los platillos: ${error}`
        );

        res.status(500).json({ message: error.message });
    }
};



// Actualizar un platillo
export const updatePlatillo = async(req, res) => {
    try {
        const { id } = req.params;
        const { nombre, costo, categoria_id, activo } = req.body;
        const platillo = await Platillo.findByPk(id);

        if (platillo) {
            const cambiosRealizados = {};

            if (nombre !== platillo.nombre) {
                cambiosRealizados.nombre = nombre;
                platillo.nombre = nombre;
            }

            if (costo !== platillo.costo) {
                cambiosRealizados.costo = costo;
                platillo.costo = costo;
            }

            if (categoria_id !== platillo.categoria_id) {
                cambiosRealizados.categoria_id = categoria_id;
                platillo.categoria_id = categoria_id;
            }

            if (activo !== platillo.activo) {
                cambiosRealizados.activo = activo;
                platillo.activo = activo;
            }

            await platillo.save();

            res.status(200).json({ message: "Platillo actualizado exitosamente.", platillo });
        } else {
            res.status(404).json({ message: "Platillo no encontrado." });
        }
    } catch (error) {
        console.log(
            `Ocurrió un error al actualizar un platillo: ${error.message}`
        );

        res.status(500).json({ message: error.message });
    }
};

// Borrar un platillo
export const deletePlatillo = async(req, res) => {
    try {
        const { id } = req.params;
        const platillo = await Platillo.findByPk(id);

        if (platillo) {
            const datosEliminados = { nombre: platillo.nombre, costo: platillo.costo, categoria_id: platillo.categoria_id, activo: platillo.activo };

            await platillo.destroy();
            res.status(200).json({ message: "Platillo eliminado exitosamente.", datosEliminados });
        } else {
            res.status(404).json({ message: "Platillo no encontrado." });
        }
    } catch (error) {
        console.log(
            `Ocurrió un error al eliminar un platillo: ${error.message}`
        );

        res.status(500).json({ message: error.message });
    }
};