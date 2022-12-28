import mongoose from "mongoose";

const PrestamoSchema = mongoose.Schema(
  {
    Cliente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cliente",
    },
    Interess: {
      type: mongoose.Schema.Types.Double,
      required: true,
    },
    Capital: {
      type: mongoose.Schema.Types.Double,
      required: true,
    },
    intTotal: {
      type: mongoose.Schema.Types.Double,
      required: true,
    },
    total: {
      type: mongoose.Schema.Types.Double,
      required: true,
    },
    fecha: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    tipoPeriodo: {
      type: String,
      required: true,
    },
    numPeriodo: {
      type: Integer,
      required: true,
    },
    intPeriodo: {
      type: mongoose.Schema.Types.Double,
      required: true,
    },
    PeriodoAt: {
      type: mongoose.Schema.Types.Integer,
      required: true,
    },
    abono: {
      type: Boolean,
      required: true,
    },
    status: {
      type: Integer,
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

const Prestamo = mongoose.model("Prestamo", PrestamoSchema);

export default Prestamo;
