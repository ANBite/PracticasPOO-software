import Eliminar from "./eliminar";

export default class EliminarLibro {
  private readonly base: Eliminar;

  constructor(base: Eliminar) {
    this.base = base;
  }

  public async eliminar(id: number) {
    return await this.base.DELETE(id);
  }
}
