import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const designs = await prisma.graphicDesigns.findMany();
    
    // Log designs to ensure they are fetched correctly
    console.log('Fetched designs:', designs);
    console.log(designs)
    
    const designsWithBase64 = designs.map((design) => ({
      ...design,
      pdfFile: Buffer.from(design.pdfFile).toString('base64'),
    }));

    // Log the base64 data
    // console.log('Designs with base64:', designsWithBase64);
    // console.log(NextResponse.json(designsWithBase64))

    return NextResponse.json(designsWithBase64);
  } catch (error) {
    console.error('Error fetching designs:', error);
    return NextResponse.json({
      error: 'Failed to fetch designs',
      message: error.message,
    }, { status: 500 });
  }
}

