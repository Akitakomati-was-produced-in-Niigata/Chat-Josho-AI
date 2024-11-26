import { NextResponse } from 'next/server';
import { getAzOpenAIData } from '../../models/azopenaiApplicationService';


// GETリクエストを処理する関数
export const GET = async (req: Request, userId: string, ) => {
  try {
    console.log("imakoko")
    const url = new URL(req.url);
    const message = url.searchParams.get(`message`);
    if (!message) {
      return NextResponse.json({ error: 'Message query parameter is required' }, { status: 400 });
    }

    const data = await getAzOpenAIData(message,userId);
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.log('🚀 ~ file: route.ts ~ error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const dynamic = 'force-dynamic';