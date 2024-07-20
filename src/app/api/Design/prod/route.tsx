import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '3', 10);

  try {
    const totalDesigns = await prisma.graphicDesigns.count();
    const designs = await prisma.graphicDesigns.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    const designsWithBase64 = designs.map((design) => ({
      ...design,
      pdfFile: Buffer.from(design.pdfFile).toString('base64'),
    }));

    return NextResponse.json({
      designs: designsWithBase64,
      total: totalDesigns,
    });
  } catch (error) {
    console.error('Error fetching designs:', error);
    return NextResponse.json({
      error: 'Failed to fetch designs',
      message: error.message,
    }, { status: 500 });
  }
}
