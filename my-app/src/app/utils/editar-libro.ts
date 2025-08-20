import Editar from "./editar";

export default class EditarLibro {
  private readonly base: Editar;

  constructor(base: Editar) {
    this.base = base;
  }

  public async editar(id: number, title: string, description: string, author: string) {
    return await this.base.UPDATE(id, title, description, author);
  }
}
