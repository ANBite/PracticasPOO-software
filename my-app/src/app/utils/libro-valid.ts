import { NextResponse } from "next/server";
import Insert from "./insertar";
import Libro from "./libro";

export default class RegisterLibro{
    private readonly base: Insert;

    constructor(base: Insert) {
        this.base = base;
    }

    public async register(title: string, description: string, author: string) {
        const libro = Libro.crear(title, description, author);
        await this.base.INSERT(libro.title.value, libro.description.value, libro.author.value);
    }
}