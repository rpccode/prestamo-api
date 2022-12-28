import Cliente from "../models/Cliente.js";

const agregarCliente = async (req, res) => {
  const Cliente = new Cliente(req.body);
  Cliente.Usuario = req.Usuario._id;
  try {
    const ClienteAlmacenado = await Cliente.save();
    res.json(ClienteAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const obtenerClientes = async (req, res) => {
  const Clientes = await Cliente.find().where("Usuario").equals(req.Usuario);

  res.json(Clientes);
};

const obtenerCliente = async (req, res) => {
  const { id } = req.params;
  const Cliente = await Cliente.findById(id);

  if (!Cliente) {
    return res.status(404).json({ msg: "No Encontrado" });
  }

  if (Cliente.Usuario._id.toString() !== req.Usuario._id.toString()) {
    return res.json({ msg: "Accion no válida" });
  }

  res.json(Cliente);
};

const actualizarCliente = async (req, res) => {
  const { id } = req.params;
  const Cliente = await Cliente.findById(id);

  if (!Cliente) {
    return res.status(404).json({ msg: "No Encontrado" });
  }

  if (Cliente.Usuario._id.toString() !== req.Usuario._id.toString()) {
    return res.json({ msg: "Accion no válida" });
  }

  // Actualizar Cliente
  Cliente.nombre = req.body.nombre || Cliente.nombre;
  Cliente.propietario = req.body.propietario || Cliente.propietario;
  Cliente.email = req.body.email || Cliente.email;
  Cliente.fecha = req.body.fecha || Cliente.fecha;
  Cliente.sintomas = req.body.sintomas || Cliente.sintomas;

  try {
    const ClienteActualizado = await Cliente.save();
    res.json(ClienteActualizado);
  } catch (error) {
    console.log(error);
  }
};

const eliminarCliente = async (req, res) => {
  const { id } = req.params;
  const Cliente = await Cliente.findById(id);

  if (!Cliente) {
    return res.status(404).json({ msg: "No Encontrado" });
  }

  if (Cliente.Usuario._id.toString() !== req.Usuario._id.toString()) {
    return res.json({ msg: "Accion no válida" });
  }

  try {
    await Cliente.deleteOne();
    res.json({ msg: "Cliente Eliminado" });
  } catch (error) {
    console.log(error);
  }
};

export {
  agregarCliente,
  obtenerClientes,
  obtenerCliente,
  actualizarCliente,
  eliminarCliente,
};
