const { Schema , model  } = require('mongoose')


const pesoSchema = new  Schema(
{
  valorPeso :
  {type: Number},
  fechaRegistro:
  {type: Date}
},
{
    versionKey:false,
    timestamps:false
}

)

module.exports = model('peso',pesoSchema)