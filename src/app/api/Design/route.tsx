import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const designs = await prisma.graphicDesigns.findMany()
    // Convert bytes to base64 for rendering images
    const designsWithBase64 = designs.map((design) => ({
      ...design,
      pdfFile: Buffer.from(design.pdfFile).toString('base64'),
    }));
    return NextResponse.json(designsWithBase64);
  } catch (error) {
    console.error('Error fetching designs:', error);
    return NextResponse.json({ error: 'Failed to fetch designs' }, { status: 500 });
  }
}
