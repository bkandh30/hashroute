# Hashroute

Link management at scale - A full-stack application built on Cloudflare's infrastructure.

## Tech Stack

- **Frontend**: React 19, TanStack Router, TanStack Query, Tailwind CSS v4
- **Backend**: Cloudflare Workers, Hono, tRPC
- **Database**: Cloudflare D1 (SQLite), Drizzle ORM
- **Auth**: Better Auth
- **Package Manager**: pnpm (workspaces)

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- pnpm >= 10.x
- Cloudflare account (for deployment)

### Installation

```bash
# Install dependencies
pnpm install

# Build shared packages
pnpm build-package
```

### Development

```bash
# Start the frontend application
pnpm dev-frontend

# Start the data service (in a separate terminal)
pnpm dev-data-service
```
