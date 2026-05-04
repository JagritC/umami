'use client';
import { Column } from '@umami/react-zen';
import { LoginForm } from './LoginForm';

export function LoginPage() {
  return (
    <Column
      alignItems="center"
      justifyContent="flex-start"
      height="100vh"
      style={{
        boxSizing: 'border-box',
        paddingTop: '15vh',
        background: 'linear-gradient(to bottom, #f8fafc 0%, #eef2f7 100%)',
      }}
    >
      <LoginForm />
    </Column>
  );
}
