const Markers = require("./MarkerList");

class Sockets {
  constructor(io) {
    this.io = io;
    this.socketsEvents();
    this.markers = new Markers();
  }

  //aqui creamos todos los eventos que necesitamos en los sopckets
  socketsEvents() {
    // configuracion del socket server
    this.io.on("connection", (client) => {
      client.emit("markers-available", this.markers.activos);

      client.on("new-marker", (marker) => {
        // const { id, lat, lng } = marker;
        this.markers.addMarker(marker);
        //right now we will go to emit this new marker to averyone except to me using broadcast
        client.broadcast.emit("new-marker", marker);
      });

      client.on("movement-marker", (marker) => {
        this.markers.updateMarker(marker);
        client.broadcast.emit("movement-marker", marker);
      });

      client.on("disconnect", () => {
        console.log("cliente desconectado");
        /* … */
      });
    });
  }
}

module.exports = Sockets;
