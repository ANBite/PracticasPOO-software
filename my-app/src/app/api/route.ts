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
        let dato = await sql`SELECT * from "POST"`;
        return NextResponse.json(
        { message: "Conexión exitosa a la base de datos sin insertar datos",
            "Datos ya existentes en la base de datos" : dato,
         },
        { status: 200 }
        );
    
    } catch (error) {
        console.error("Error al conectarse a la base de datos:", error);
        return NextResponse.json(
            { error: "Error al conectarse a la base de datos" },
            { status: 500 }
        );
    }
}