import { NextResponse } from 'next/server';
import { withAuth } from '@/middleware/auth';
import { getData, sendData } from '@/R_DataBase';
import { v4 as uuidv4 } from 'uuid';



export const GET = withAuth(async (req) => {
   try {
      const data = getData();
      return NextResponse.json(data, { "status": 200 });

   } catch (error) {
      return NextResponse.json({ "message": "network error" }, { "status": 400 });
   }
});

export const POST = withAuth(async (req) => {

   try {
      const len = getData().length
      const id = `${uuidv4()}N${len}`;
      const { name, password } = await req.json()
      if (!name || !password)
         return NextResponse.json({ "message": "Missing required data" })

      const newData = sendData({ id, name, password })

      return NextResponse.json(newData, { "status": 200 });

   } catch (error) {
      return NextResponse.json({ "message": "network error" }, { "status": 400 });
   }
});

export const DELET = withAuth(async (req) => {

   try {
      console.log(req);
      return NextResponse.json({ "message": "Delet request" });

   } catch (error) {
      return NextResponse.json({ "message": "network error" }, { "status": 400 });
   }

});

export const PUT = withAuth(async (req) => {
   try {
      console.log(req);
      return NextResponse.json({ "message": "put request" });

   } catch (error) {
      return NextResponse.json({ "message": "network error" }, { "status": 400 });
   }
});

export const config = {
   api: {
      bodyParser: false,
   },
};
