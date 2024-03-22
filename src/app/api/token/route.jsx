import { NextResponse } from 'next/server';
import { generateToken } from '@/utils/auth';
import bcrypt from 'bcryptjs';

const SECRET_PAYLOAD = { password: bcrypt.hashSync("Rr1122002211Rr", 10) };

// export const GET = async (req) => {
//    const token = generateToken({ password: SECRET_PAYLOAD.password });
//    return NextResponse.json({ token })
// }

export const POST = async (req) => {

   try {

      const { password } = await req.json();
      if (!password) {
         return NextResponse.json({ message: 'Request body is required' }, { status: 400 });
      }

      if (!bcrypt.compareSync(String(password), String(SECRET_PAYLOAD.password))) {
         return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
      }

      const token = generateToken({ password: SECRET_PAYLOAD.password });
      return NextResponse.json({ "token": token }, { status: 200 });


   } catch (error) {
      console.error('Error parsing request body:', error);
      let errorMessage = 'Invalid request body';
      if (error instanceof SyntaxError) {
         errorMessage = 'Invalid JSON format in request body';
      }
      return NextResponse.json({ message: errorMessage }, { status: 400 });
   }

}

//export const config = {
//   api: {
//      bodyParser: true,
//   },
//};
