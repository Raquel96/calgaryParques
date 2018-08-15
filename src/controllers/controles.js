const controller={
listar:(req,res)=>{
  req.getConnection((error,conexion)=>{
    conexion.query('select * from parques',(error, datos)=>{
      if(error){
      res.json(error);
    }
      console.log(datos);
      res.render('index',{
        data:datos
      });
    });
  });

},
insertar:(req, res)=>{
  req.getConnection((error, conectar)=>{
    const datos=req.body;
    conectar.query('Insert into parques set ?',[datos],(error, data)=>{
      if(error) throw error;
      res.redirect('/')
    })
  });

},
borrar:(req,res)=>{
  req.getConnection((error, conexion)=>{
    const id=req.params.nombre;
    conexion.query('delete from parques where nombre=?',[id],(error, rows)=>{
      res.redirect('/');
    })
  })

},
editar:(req,res)=>{
  req.getConnection((error, con)=>{
    const id=req.params.nombre;
    con.query('select * from parques  where nombre = ?',[id],(error, datos)=>{
      console.log(datos);
      res.render('editar',{
        data: datos[0]
      })
    })
  })

},
actualizar:(req,res)=>{
  const id=req.params.nombre;
  const nuevo=req.body;
  req.getConnection((error, db)=>{
    db.query('UPDATE parques set ? where nombre = ?', [nuevo, id], (error, rows)=>{
      res.redirect('/')
    })
  })
},
///juhgtfrccr

busqueda:(req,res)=>{
  const cosulta = req.body
  req.getConnection((error, juanito)=>{

    juanito.query('select * from parques  where nombre like "Max Bell"', (error, dato)=>{
      console.log(dato);
      res.render('busqueda',{
        data: dato
    })
  })

})

}
}
module.exports=controller;
