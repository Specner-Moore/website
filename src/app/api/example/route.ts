import { NextRequest, NextResponse } from 'next/server';
import { env } from '@/lib/env';

export async function GET() {
  try {
    
    // Example response with environment info (be careful not to expose sensitive data)
    const response = {
      message: 'Environment variables are working!',
      environment: env.NODE_ENV,
      timestamp: new Date().toISOString(),
      // Only include non-sensitive environment info
      hasDatabase: !!env.DATABASE_URL,
      hasOpenAI: !!env.OPENAI_API_KEY,
      hasStripe: !!env.STRIPE_SECRET_KEY,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Example of using required environment variables
    // Uncomment the line below to see how getRequiredEnvVar works
    // const databaseUrl = getRequiredEnvVar('DATABASE_URL');
    
    return NextResponse.json({
      message: 'POST request received',
      data: body,
      environment: env.NODE_ENV,
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 