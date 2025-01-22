import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';

import { AuthProvider } from '@/providers/AuthProvider';
import { TodoProvider } from '@/providers/TodoProvider';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <AuthProvider>
        <TodoProvider>
          <Outlet />
        </TodoProvider>
      </AuthProvider>
    </React.Fragment>
  );
}