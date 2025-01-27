import { createFileRoute, Navigate } from '@tanstack/react-router';

import useAuth from '@/hooks/useAuth';
import Dashboard from '@/components/ui/Dashboard';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { state } = useAuth();

  if (state.isAuthenticated ) {
    return (
      <Dashboard />
    );
  }


  return <Navigate to="/login" />;
}
