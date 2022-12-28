const PagoSchema = mongoose.Schema(
  {
    concepto: {
      type: String,
      required: true,
    },
    periodo: {
      type: String,
      required: true,
    },
    capPrestado: {
      type: String,
      required: true,
    },
    pInteres: {
      type: Date,
      required: true,
    },
    cuotaCap: {
      type: String,
      default: null,
    },
    cuotaTotal: {
      type: String,
      default: null,
    },
    abono: {
      type: String,
      default: null,
    },
    saldo: {
      type: String,
      required: true,
    },
    fecha: {
      type: String,
      required: true,
    },
    cliente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cliente",
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

const Pago = mongoose.model("Pago", PagoSchema);

export default Pago;
