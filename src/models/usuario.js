const mongoose = require("mongoose"); // importando el componente mogoose
const bcrypt = require("bcrypt"); // importando el componente bcrypt para encriptar la contraseña
const usuarioSchema = mongoose.Schema({

  usuario: {
    type: String,
    required: true,
  },
  clave: {
    type: String,
    required: true,
  },
});
usuarioSchema.methods.encryptClave = async(clave) => {
      const salt = await bcrypt.genSalt(10);
      return bcrypt.hash(clave, salt);
  }
module.exports = mongoose.model("Usuario", usuarioSchema);
