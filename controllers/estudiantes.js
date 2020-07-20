const Estudiantes = require('../models/Estudiantes');



// get estudiantes
exports.estudiantes =  async ( req , res) => {
    const estudiantes = await Estudiantes.find().select('nombre edad');
    res.render('estudiantes', { estudiantes });

};

//get estudiante
exports.estudiante = async ( req , res) => {
 
    try {
        const estudiante = await Estudiantes.findById(req.params.id).select('nombre edad');
        res.render('estudiantes_detail', { estudiante });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

//Registro de nuevo estudiante post
exports.crearEstudiante =  async ( req , res) => {
    const { nombre, edad } = req.body;
    await Estudiantes.create({ nombre, edad });
    const estudiantes = await Estudiantes.find().select('nombre edad');
    res.render('estudiantes', { estudiantes });

}


//Actualizar Estudiante put 
exports.actualizarEstudiante =  async ( req , res ) => {
    const estudiante = await Estudiantes.findByIdAndUpdate(req.params.id, {
        $set: {
            nombre: req.body.nombre,
            edad: req.body.edad
        }
    },
    (err, docs) => {
        if (err) {
            res.json({ Errormessage: err });
        } else {
            return res.status(200).json({ message: "Actualizado Correctamente!" });
        }
    }
    );
}
// delete eustiantes
exports.eliminarEstudiante =  async ( req, res ) => {

 
      const estudiante = await Estudiantes.findByIdAndDelete(req.params.id,
        (err, docs) => {
            if (err) {
                res.json({ errormessage: err });
            } else {
                return res.status(200).json({ message: "Eliminado Correctamente" });
            }
        }
    );

    
}
