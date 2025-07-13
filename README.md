# Next.js Project

A modern Next.js application with secure environment variable management and Vercel deployment configuration.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd temp-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Edit `.env.local` with your actual values:
```bash
# Required for development
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Add your API keys and other environment variables
DATABASE_URL="your-database-url"
OPENAI_API_KEY="your-openai-key"
# ... other variables
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format-check` - Check code formatting

## 🔐 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXTAUTH_URL` | Your application URL | `http://localhost:3000` |
| `NEXTAUTH_SECRET` | Secret key for NextAuth.js | `your-secret-key` |

### Optional Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | Database connection string | `postgresql://...` |
| `OPENAI_API_KEY` | OpenAI API key | `sk-...` |
| `STRIPE_SECRET_KEY` | Stripe secret key | `sk_test_...` |
| `STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | `pk_test_...` |
| `SMTP_HOST` | SMTP server host | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port | `587` |
| `SMTP_USER` | SMTP username | `your-email@gmail.com` |
| `SMTP_PASSWORD` | SMTP password | `your-app-password` |

## 🚀 Deployment on Vercel

### 1. Connect to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

### 2. Deploy

1. Deploy to Vercel:
```bash
vercel
```

2. For production deployment:
```bash
vercel --prod
```

### 3. Environment Variables on Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add all your environment variables from `.env.local`

**Important:** Never commit `.env.local` to version control!

## 🛡️ Security Features

- Environment variable validation with Zod
- Security headers configuration
- Type-safe environment variable access
- Comprehensive `.gitignore` to prevent sensitive data exposure

## 📁 Project Structure

```
temp-nextjs/
├── src/
│   ├── app/                 # Next.js 13+ app directory
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   └── lib/                # Utility libraries
│       └── env.ts          # Environment validation
├── public/                 # Static assets
├── .env.example           # Environment variables template
├── .env.local             # Local environment variables (not committed)
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 🔧 Configuration Files

- **`.env.example`** - Template for environment variables
- **`next.config.ts`** - Next.js configuration with security headers
- **`.prettierrc`** - Code formatting configuration
- **`lib/env.ts`** - Type-safe environment variable validation

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
