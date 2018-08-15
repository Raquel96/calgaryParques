const express = require('express');
const router=express.Router();
const controles= require('../controllers/controles');
router.get('/', controles.listar

);
router.post('/Insertar', controles.insertar);

router.get('/borrar/:nombre', controles.borrar);
router.get('/actualizar/:nombre', controles.editar);
router.post('/actualizar/:nombre', controles.actualizar);
/////jnhubuh
router.get('/busqueda/:query', controles.busqueda);

module.exports=router;
