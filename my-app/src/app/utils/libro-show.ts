import Show from "./mostrar";

export default class ShowLibro{
    private readonly base: Show;

    constructor(base: Show) {
        this.base = base;
    }

    public async mostrar() {
        return await this.base.SHOW();
    }
}