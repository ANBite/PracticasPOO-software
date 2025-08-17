import { NextResponse, NextRequest } from "next/server";
import postgres from "postgres";

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

    const conectionstring = 
    "postgresql://postgres.xcuzninsjebjzwjzmjjr:kN5740jekguHZqp8@aws-1-us-east-2.pooler.supabase.com:6543/postgres";
    const sql = postgres(conectionstring);

    try {
        await sql`INSERT INTO "POST" (title, description, author)
        VALUES (${title}, ${description}, ${author})
        `;
        return NextResponse.json(
        { message: "Post creado exitosamente",
            title,
            description,
            author,
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