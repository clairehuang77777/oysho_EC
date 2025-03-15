import { NextResponse } from "next/server";
import pg from "pg"


//連接 PostgreSQL
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});


// 處理 GET 請求，回傳商品列表
export async function GET(req, { params }){
  const { id } = await params
  try{
    const client = await pool.connect()
    const result = await client.query("SELECT * FROM ProductTable WHERE productuniqueid = $1",[id])
    // console.log(result)
    client.release() //確保釋放連線，避免連線池crash
    // console.log(result.rows)
    return NextResponse.json(result.rows[0])
  }
  catch(err){
    console.error("Database error,",err)
    return NextResponse.json({ error: "Database connection error"},{status:500})
  }
}
