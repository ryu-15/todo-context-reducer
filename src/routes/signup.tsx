import { createFileRoute, Navigate } from '@tanstack/react-router';

import RegistrationView from '@/components/ui/Auth/AuthView/RegistrationView';
import useAuth from '@/hooks/useAuth'; // Uncomment this if you intend to use it.

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
});

function RouteComponent() {
  const { state } = useAuth(); // Ensure this is correctly implemented.

  if (!state?.isAuthenticated) {
    return <RegistrationView />;
  }
  return <Navigate to="/" />;
}

