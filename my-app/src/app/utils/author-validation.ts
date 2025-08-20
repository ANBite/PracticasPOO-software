import { NextResponse } from "next/server";

export default class Author {
    public value: string;

    constructor(value: string) {
        this.isValid(value);
        this.value = value;
    }

    public isValid(value: string): void {
        if (typeof value !== 'string' || value.length < 2) {
            throw new Error("El autor debe ser una cadena de texto");
        }
        //return this.value = value;
    }
}