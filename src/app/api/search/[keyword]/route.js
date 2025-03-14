import { NextResponse } from "next/server";
import pg from "pg"


//連接 PostgreSQL
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});


// 處理 GET 請求，回傳商品列表
export async function GET(req, { params }){
  const keyword = params.keyword
  console.log(keyword)

  try{
    const client = await pool.connect()
    const result = await client.query("SELECT * FROM ProductTable WHERE productname LIKE $1",[`%${keyword}%`])
    console.log(result)
    client.release() //確保釋放連線，避免連線池crash
    console.log(result.rows)
    return NextResponse.json(result.rows)
  }
  catch(err){
    console.error("Database error,",err)
    return NextResponse.json({ error: "Database connection error"},{status:500})
  }
}