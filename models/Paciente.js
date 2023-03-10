import mongoose from "mongoose";

const ClienteSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    propietario: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    fecha: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    sintomas: {
      type: String,
      required: true,
    },
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "usuario",
    },
  },
  {
    timestamps: true,
  }
);

const Cliente = mongoose.model("Cliente", ClienteSchema);

export default Cliente;
