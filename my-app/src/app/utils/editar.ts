import postgres from "postgres";

export default class Editar {
  private sql;

  constructor() {
    const connectionString =
      "postgresql://postgres.xcuzninsjebjzwjzmjjr:kN5740jekguHZqp8@aws-1-us-east-2.pooler.supabase.com:6543/postgres";
    this.sql = postgres(connectionString);
  }

  public async UPDATE(id: number, title: string, description: string, author: string) {
    const result = await this.sql`
      UPDATE "POST"
      SET title = ${title}, description = ${description}, author = ${author}
      WHERE id = ${id}
      RETURNING *
    `;
    return result; // devolvemos el post actualizado o []
  }
}
