import mongoose from "mongoose";

const GastoSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    cantidad: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      required: true,
    },
    fecha: {
      type: Date,
      required: true,
      default: Date.now(),
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

const Gasto = mongoose.model("Gasto", GastoSchema);

export default Gasto;
