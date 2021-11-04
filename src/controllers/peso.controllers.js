const pesoModel = require('../models/peso.models')



const obtenerPesos = async( req, repply ) => {
    const pesos = await pesoModel.find();
    return pesos;

}

const obtenerPesoId = async( req, repply ) => {        
    const peso = await pesoModel.findById(req.params.id);
    return peso;

}


const crearPeso = async( req, repply ) => {
    const newPeso = new pesoModel(req.body)
    await newPeso.save();
    
    repply.send(newPeso);

}

const actualizarPeso = async( req, repply ) => {
    const pesoActualizado = await pesoModel.findByIdAndUpdate(req.params.id , req.body,{ new:true });
    
    
    repply.send(pesoActualizado);

}

const eliminarPeso = async( req, repply ) => {
    await pesoModel.findByIdAndDelete(req.params.id);
    repply.send();        

}




module.exports = {
    obtenerPesos,
    obtenerPesoId,
    crearPeso,
    actualizarPeso,
    eliminarPeso
}

// export.obtenerPesos = () => {
    
// }