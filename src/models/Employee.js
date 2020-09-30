const { Schema, Model, model } = require('mongoose');

// crea el schema de employee con los campos, nombre, posicion, oficina y salario ademas de añadir una fecha de creacion.
const schema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true }
}, {
    timestamps: true,
    versionKey: false
})

// Crea el model del schema y lo exporta
module.exports = model('Employee', schema)