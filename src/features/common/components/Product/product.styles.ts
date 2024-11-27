import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  display: 'flex',
  borderBottom: '1px solid #EEEEEE',
  margin: '0px 16px',
  gap: '50px'
}));

export const Picture = styled('img')(() => ({
  padding: '16px 16px 0 0',
  width: '180px',
  height: '180px',
  borderRadius: '4px'
}));

export const InfoContainer = styled(Box)(() => ({
  paddingTop: '30px',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  width: '500px'
}));

export const PriceContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

export const Price = styled('p')(() => ({
  margin: 0,
  fontSize: '24px'
}));

export const Title = styled('p')(() => ({
  fontSize: '18px'
}));


export const ActionsContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
}));