class Services {
  token = `..x9L4-a`;
  ruta = "https://localhost:4000/api/tiempoToken";
  obtenerUsuario = async () => {
    const respuesta = await fetch(this.ruta, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${this.token}`,
      },
    });
    const datos = await respuesta.json();
    console.log(datos);
    return datos;
  };
}
