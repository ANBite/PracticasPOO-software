import { NextResponse, NextRequest } from "next/server";
import Insert from "@/app/utils/insertar";
import RegisterLibro from "../utils/libro-valid";

export async function POST(request : NextRequest) {
    const data = await request.json();
    const { title, description, author } = data;

    try {
        new RegisterLibro(new Insert(title, description, author)).
        register(title, description, author);
        return NextResponse.json(
            { message: "POST creado exitosamente",
                "Título": title,
                "Descripción": description,
                "Autor": author,
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("No se pudo crear el POST", error);
        return NextResponse.json(
            { error: "Error al crear el POST" },
            { status: 500 }
        );
    }
}