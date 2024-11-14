import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
}));

export const ProductsContainer = styled(Box)(() => ({
  marginTop: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '60%',
}));