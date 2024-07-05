import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    console.log(name, email, message)

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Save the message to the database
    const newMessage = await prisma.messages.create({
      data: {
        Name: name,
        Email: email,
        Message: message,
      },
    });
    console.log(newMessage)

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
