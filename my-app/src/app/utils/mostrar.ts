import postgres from "postgres";

export default class Show {
  private sql;

  constructor() {
    const connectionString =
      "postgresql://postgres.xcuzninsjebjzwjzmjjr:kN5740jekguHZqp8@aws-1-us-east-2.pooler.supabase.com:6543/postgres";
    this.sql = postgres(connectionString);
  }

  public async SHOW() {
    return await this.sql`SELECT * FROM "POST"`;
  }
}
