'use client';
import { Column, Text } from '@umami/react-zen';
import Link from '@/components/common/Link';
import { LoginForm } from './LoginForm';

export function LoginPage() {
  return (
    <Column
      alignItems="center"
      justifyContent="flex-start"
      height="100vh"
      backgroundColor="surface-raised"
      style={{ paddingTop: '15vh' }}
    >
      <LoginForm />
      <Column alignItems="center" marginTop="4">
        <Text color="muted" size="sm">
          <Link href="https://umami.is" target="_blank" rel="noopener noreferrer" prefetch={false}>
            About
          </Link>
        </Text>
      </Column>
    </Column>
  );
}
