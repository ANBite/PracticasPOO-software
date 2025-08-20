import postgres from "postgres";

export default class Eliminar {
  private sql;

  constructor() {
    const connectionString =
      "postgresql://postgres.xcuzninsjebjzwjzmjjr:kN5740jekguHZqp8@aws-1-us-east-2.pooler.supabase.com:6543/postgres";
    this.sql = postgres(connectionString);
  }

  public async DELETE(id: number) {
    const result = await this.sql`
      DELETE FROM "POST"
      WHERE id = ${id}
      RETURNING *
    `;
    return result; // devolvemos el post eliminado o []
  }
}
