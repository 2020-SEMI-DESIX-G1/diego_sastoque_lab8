//MODULES
const express = require('express');
const {  estudiantes , crearEstudiante , estudiante , eliminarEstudiante , actualizarEstudiante } = require('../controllers/estudiantes');


const router = express.Router();


router.route('/')
    .get( estudiantes)
router.route('/')
    .post(crearEstudiante)

router.route('/estudiante/:id').get(estudiante)

router.route('/estudiante/:id').delete( eliminarEstudiante)

router.route('/estudiante/:id').put( actualizarEstudiante)

  

module.exports = router;