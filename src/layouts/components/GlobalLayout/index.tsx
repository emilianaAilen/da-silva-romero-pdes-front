import { ReactNode, useEffect } from 'react';
import { GlobalLayout as GlobalLayoutUI } from './globalLayout';
import { fetcher } from '../../../features/common/utils';
import { API } from '../../../api';
import useSWR, { mutate } from 'swr';
import { useCookies } from 'react-cookie';
import { CircularProgress, Stack } from '@mui/material';
import { Session } from '@toolpad/core';

interface GlobalLayoutProps {
  children: ReactNode;
}

export const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  const [cookies, , removeCookie] = useCookies(["authToken"]);

  const { data, isLoading } = useSWR(API.session, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  });

  useEffect(() => {
    if (cookies.authToken) {
      mutate(API.session);
    }
  }, [cookies.authToken]);

  const session: Session = {
    user: {
      name: data?.name,
      email: data?.email,
      image: `https://ui-avatars.com/api/?name=${data?.name}`,
    }
  }

  const authentication = {
    signIn: () => null,
    signOut: () => {
      removeCookie('authToken', { path: '/' })
    },
  }

  if (isLoading) return (
    <Stack
      display='flex'
      justifyContent='center'
      alignItems='center'
      width='100%'
      height='100%'
    >
      <CircularProgress size="3rem" />
    </Stack>
  )

  if (!cookies.authToken) return <>{children}</>;

  return <GlobalLayoutUI session={session} authentication={authentication} role={data?.role}>{children}</GlobalLayoutUI>
}