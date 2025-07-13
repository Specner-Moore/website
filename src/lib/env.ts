import { z } from 'zod';

// Define the schema for environment variables
const envSchema = z.object({
  // Database
  DATABASE_URL: z.string().optional(),
  
  // Authentication
  NEXTAUTH_URL: z.string().url().optional(),
  NEXTAUTH_SECRET: z.string().min(1).optional(),
  
  // API Keys
  OPENAI_API_KEY: z.string().optional(),
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_PUBLISHABLE_KEY: z.string().optional(),
  
  // Email/SMTP
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASSWORD: z.string().optional(),
  
  // Environment
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  
  // Vercel
  VERCEL_URL: z.string().optional(),
});

// Parse and validate environment variables
const envParseResult = envSchema.safeParse(process.env);

if (!envParseResult.success) {
  console.error('❌ Invalid environment variables:', envParseResult.error.flatten().fieldErrors);
  throw new Error('Invalid environment variables');
}

// Export validated environment variables
export const env = envParseResult.data;

// Helper function to get required environment variables
export function getRequiredEnvVar(key: keyof typeof env): string {
  const value = env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

// Helper function to check if we're in production
export const isProduction = env.NODE_ENV === 'production';
export const isDevelopment = env.NODE_ENV === 'development'; 