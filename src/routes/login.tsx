import { createFileRoute, Navigate } from '@tanstack/react-router';

import LoginView from '@/components/ui/Auth/AuthView/LoginView';
import useAuth from '@/hooks/useAuth';

export const Route = createFileRoute('/login')({
  component: RouteComponent,
});

function RouteComponent() {
  const { state } = useAuth();

  if (!state?.isAuthenticated) {
    return<LoginView />
  }

  return <Navigate to="/" />;
}
