import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Original GET function to return all designs

// New function to return only the first three designs
export async function GET() {
  try {
    const designs = await prisma.graphicDesigns.findMany();
    
    const designsWithBase64 = designs.map((design) => ({
      ...design,
      pdfFile: Buffer.from(design.pdfFile).toString('base64'),
    }));

    // Slice to get the first three designs
    const firstThreeDesigns = designsWithBase64.slice(0, 3);

    return NextResponse.json(firstThreeDesigns);
  } catch (error) {
    console.error('Error fetching designs:', error);
    return NextResponse.json({
      error: 'Failed to fetch designs',
      message: error.message,
    }, { status: 500 });
  }
}