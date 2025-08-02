'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, Badge } from '@rls/ui';
import { useUsers } from '@/lib/hooks/useUsers';

export function Users() {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) {
    return (
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>
            Loading users data using React Query...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground">
            Loading...
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>
            Error loading users data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center text-destructive">
            Error: {error.message}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>
          User data fetched using React Query for server state management
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {users?.map((user) => (
          <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-sm text-muted-foreground">{user.email}</div>
            </div>
            <Badge variant="secondary">ID: {user.id}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
} 