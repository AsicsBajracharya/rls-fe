# RLS - Next.js Monorepo

A modern Next.js application built with Turborepo, featuring Storybook, shadcn/ui, Redux Toolkit, and React Query for comprehensive state management.

## 🚀 Features

- **Turborepo**: Monorepo setup for scalable development
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Full type safety across the project
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Beautiful, accessible UI components
- **Redux Toolkit**: Global state management for client-side state
- **React Query**: Server state management and caching
- **Storybook**: Component development and documentation
- **ESLint**: Code linting and formatting
- **Vitest**: Unit testing with coverage

## 📁 Project Structure

```
rls/
├── apps/
│   └── web/                 # Next.js application
│       ├── src/
│       │   ├── app/         # App Router pages
│       │   ├── components/  # App-specific components
│       │   ├── lib/         # Utilities and configurations
│       │   └── hooks/       # Custom React hooks
│       ├── .storybook/      # Storybook configuration
│       └── public/          # Static assets
├── packages/
│   ├── ui/                  # Shared UI components (shadcn/ui)
│   │   ├── src/
│   │   │   ├── components/  # Reusable UI components
│   │   │   ├── utils.ts     # Utility functions
│   │   │   └── index.css    # Global styles
│   │   └── components.json  # shadcn/ui configuration
│   └── config/              # Shared configurations
├── turbo.json              # Turborepo configuration
├── pnpm-workspace.yaml     # pnpm workspace configuration
└── package.json            # Root package.json
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: 
  - Redux Toolkit (client state)
  - React Query (server state)
- **Testing**: Vitest + Storybook
- **Build Tool**: Turborepo
- **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm 8+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rls
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 📚 Available Scripts

### Root Level
- `pnpm dev` - Start all applications in development mode
- `pnpm build` - Build all applications
- `pnpm lint` - Lint all packages
- `pnpm format` - Format code with Prettier
- `pnpm storybook` - Start Storybook
- `pnpm build-storybook` - Build Storybook for production

### Web App (apps/web)
- `pnpm dev` - Start Next.js development server
- `pnpm build` - Build Next.js application
- `pnpm start` - Start production server
- `pnpm lint` - Lint TypeScript and ESLint
- `pnpm storybook` - Start Storybook
- `pnpm build-storybook` - Build Storybook

## 🎨 UI Components

The project uses a shared UI package (`@rls/ui`) for consistent, accessible components across all applications. Available components include:

- Button
- Card
- Badge
- Input
- And more...

### Adding New Components

To add new components to the shared UI package:

```bash
cd packages/ui
pnpm dlx shadcn@latest add <component-name>
```

### Using Components in Apps

Import components from the shared UI package:

```typescript
import { Button, Card, Badge } from '@rls/ui';
```

## 📖 Storybook

Storybook is configured for component development and documentation:

```bash
pnpm storybook
```

Visit [http://localhost:6006](http://localhost:6006) to view your components in isolation.

## 🔧 State Management

### Redux Toolkit
Used for global client-side state management. Example usage:

```typescript
import { useAppSelector, useAppDispatch } from '@/lib/store';
import { increment } from '@/lib/slices/counterSlice';

const count = useAppSelector((state) => state.counter.value);
const dispatch = useAppDispatch();

// Dispatch actions
dispatch(increment());
```

### React Query
Used for server state management and caching. Example usage:

```typescript
import { useQuery } from '@tanstack/react-query';

const { data, isLoading, error } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
});
```

## 🧪 Testing

The project includes Vitest for unit testing and Storybook for component testing:

```bash
# Run tests
pnpm test

# Run tests with coverage
pnpm test:coverage
```

## 📦 Monorepo Structure

### Apps
- `web`: Main Next.js application

### Packages
- `ui`: Shared UI components library (shadcn/ui)
- `config`: Shared configurations (ESLint, TypeScript)

## 🔄 Development Workflow

1. **UI Components**: Add shared components in `packages/ui/src/components/`
2. **App Development**: Create app-specific components in `apps/web/src/components/`
3. **State Management**: Add Redux slices in `apps/web/src/lib/slices/`
4. **API Integration**: Create React Query hooks in `apps/web/src/lib/hooks/`
5. **Documentation**: Add Storybook stories for components
6. **Testing**: Write unit tests with Vitest

## 🚀 Deployment

The application can be deployed to various platforms:

- **Vercel**: Optimized for Next.js
- **Netlify**: Static site generation
- **Docker**: Containerized deployment

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and stories
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review Storybook examples 