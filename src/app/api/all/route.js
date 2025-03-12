import { NextResponse } from "next/server";
import pg from "pg"

// 連接 PostgreSQL
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// 處理 GET 請求，回傳商品列表
export async function GET() {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM ProductTable WHERE category ='viewAll'");
    console.log(result)
    client.release();
    console.log(result.rows)
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error("Database error:", err);
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  }
}