import postgres from "postgres";
import { NextResponse, NextRequest } from "next/server";

export default class Insert {
    private title: string;
    private description : string;
    private author : string;

    constructor(title: string, description: string, author: string) {
        this.title = title;
        this.description = description;
        this.author = author;
    }

    public async INSERT(title: string, description: string, author: string) {

        const conectionstring = 
        "postgresql://postgres.xcuzninsjebjzwjzmjjr:kN5740jekguHZqp8@aws-1-us-east-2.pooler.supabase.com:6543/postgres";
        const sql = postgres(conectionstring);

        await sql`INSERT INTO "POST" (title, description, author)
            VALUES (${this.title}, ${this.description}, ${this.author})
            `;
            return NextResponse.json(
            { message: "Post creado exitosamente",
                "Título": title,
                "Descripción" : description,
                "Autor": author,
            },
            { status: 200 }
            );
    }
}