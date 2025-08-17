import { NextResponse, NextRequest } from "next/server";

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
    return NextResponse.json(
        { message: "Datos recibidos correctamente",
            title,
            description,
            author,
         },
        { status: 200 }
    );
}