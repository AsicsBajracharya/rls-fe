import { Counter } from '@/components/counter';
import { Users } from '@/components/users';

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">RLS Next.js App</h1>
          <p className="text-xl text-muted-foreground">
            Built with Turborepo, Storybook, shadcn/ui, Redux Toolkit & React Query
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Counter />
          <Users />
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Redux Toolkit</h3>
              <p className="text-sm text-muted-foreground">
                Global state management for client-side state
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">React Query</h3>
              <p className="text-sm text-muted-foreground">
                Server state management and caching
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">shadcn/ui</h3>
              <p className="text-sm text-muted-foreground">
                Beautiful, accessible UI components
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
