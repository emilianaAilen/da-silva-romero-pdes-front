import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
}));

export const Form = styled('form')(() => ({
  width: '40%', 
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}));
