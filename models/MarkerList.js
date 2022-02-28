class Markers {
  constructor(activos) {
    this.activos = {};
  }

  //recuerda que en los arreglos es push y en los objetos para agregar es computando
  addMarker(marker) {
    this.activos[marker.id] = marker;
    return marker;
  }
  deleteMarker(id) {
    return delete this.activos[id];
  }
  updateMarker(marker) {
    this.activos[marker.id] = marker;
    return marker;
  }
}
module.exports = Markers;
