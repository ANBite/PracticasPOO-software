import { NextResponse } from "next/server";

export default class All{
    public title: string;
    public description: string;
    public author: string;

    constructor(title: string, description: string, author: string) {
        this.title = title;
        this.description = description;
        this.author = author;
    }

    public isValid(): void {
        if (
            !this.title || 
            !this.description || 
            !this.author ) {
            throw new Error("Faltan datos requeridos");
        }
        //return this,this.title + "\n" + this.description + "\n" + this.author;
    }
}