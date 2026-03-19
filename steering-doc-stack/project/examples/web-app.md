# Example: Web Application Project

## Project Overview
- **Name**: InvoiceFlow
- **Purpose**: SaaS invoicing platform for freelancers
- **Stack**: TypeScript, Next.js 15, Supabase, Tailwind CSS
- **Architecture**: Next.js App Router with server actions

## Directory Structure
```
invoiceflow/
├── app/              # Next.js App Router pages and layouts
├── components/       # React components (ui/ for primitives, features/ for composed)
├── lib/              # Shared utilities, Supabase client, types
├── supabase/         # Migrations and seed data
└── tests/            # Playwright E2E tests
```

## Conventions
- **Components**: One per file, PascalCase, default export
- **Server Actions**: In `app/actions/`, named `[verb][Noun].ts`
- **Database**: Snake_case columns, camelCase in TypeScript via Supabase codegen
- **Tests**: E2E only, no unit tests for UI components
- **Errors**: Let them throw — global error boundary catches everything

## Key Terminology
- **Invoice**: A billable document sent to a client
- **LineItem**: A single row in an invoice (description, quantity, rate)
- **Client**: The person or company being billed

## Build & Run
```bash
npm install
npx supabase start
npm run dev
```
