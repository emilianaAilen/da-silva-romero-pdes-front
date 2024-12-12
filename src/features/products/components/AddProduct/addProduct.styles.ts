import { Box, styled } from "@mui/material";

export const Content = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px'
}));

export const ButtonsContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
}));