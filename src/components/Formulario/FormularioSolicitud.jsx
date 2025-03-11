import { useState } from "react";

export default function FormularioSolicitud() {
  const [formData, setFormData] = useState({
    tires: "Correcto",
    chassis: "Correcto",
    doors: "Correcto",
    observations: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Estado del carro eléctrico:", formData);
    alert("Formulario enviado correctamente.");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Estado Actual del Carro Eléctrico</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded bg-light">
        {/* Estado de las llantas */}
        <div className="mb-3">
          <label className="form-label">Estado de las Llantas</label>
          <select
            className="form-select"
            name="tires"
            value={formData.tires}
            onChange={handleChange}
          >
            <option value="Correcto">Correcto</option>
            <option value="Incorrecto">Incorrecto</option>
          </select>
        </div>

        {/* Estado del chasis */}
        <div className="mb-3">
          <label className="form-label">Estado del Chasis</label>
          <select
            className="form-select"
            name="chassis"
            value={formData.chassis}
            onChange={handleChange}
          >
            <option value="Correcto">Correcto</option>
            <option value="Incorrecto">Incorrecto</option>
          </select>
        </div>

        {/* Estado de las puertas */}
        <div className="mb-3">
          <label className="form-label">Estado de las Puertas</label>
          <select
            className="form-select"
            name="doors"
            value={formData.doors}
            onChange={handleChange}
          >
            <option value="Correcto">Correcto</option>
            <option value="Incorrecto">Incorrecto</option>
          </select>
        </div>

        {/* Observaciones */}
        <div className="mb-3">
          <label className="form-label">Observaciones</label>
          <textarea
            className="form-control"
            name="observations"
            rows="3"
            value={formData.observations}
            onChange={handleChange}
            placeholder="Añadir observaciones..."
          ></textarea>
        </div>

        {/* Botón de envío */}
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}
