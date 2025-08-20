import { NextResponse, NextRequest } from "next/server";
import Insert from "@/app/utils/insertar";

export async function POST(request : NextRequest) {
    const data = await request.json();
    const { title, description, author } = data;

    if (!title || !description || !author) {
        return NextResponse.json(
            { error: "Faltan datos requeridos" }, 
            { status: 400 }
        );
    } else if (
        typeof title !== 'string' || 
        typeof description !== 'string' || 
        typeof author !== 'string') {
        return NextResponse.json(
            { error: "Todos los campos deben ser cadenas de texto" },
            { status: 400 }
        );
    }

    try {
        const response = new Insert(title, description, author).INSERT(title, description, author);
        return response;

    } catch (error) {
        console.error("No se pudo crear el POST", error);
        return NextResponse.json(
            { error: "Error al crear el POST" },
            { status: 500 }
        );
    }
}