import { Button, Dialog, DialogTitle, TextField } from "@mui/material";
import { ButtonsContainer, Content } from "./addProduct.styles";

interface AddProductProps {
  open: boolean;
  cant: number;
  loading: boolean;
  setCant: (cant: number) => void;
  handleClose: () => void;
  handleBuy: () => void;
}

export const AddProduct = ({ open, cant, loading, setCant, handleClose, handleBuy }: AddProductProps) => (
  <Dialog PaperProps={{ sx: { padding: '8px 20px' } }} onClose={handleClose} open={open}>
    <DialogTitle>Comprar producto</DialogTitle>
    <Content>
      <TextField
        label="Cantidad"
        type="number"
        value={cant}
        slotProps={{ htmlInput: { min: 1 } }}
        onChange={(e) => {
          const value = parseInt(e.target.value, 10);
          if (isNaN(value)) {
            setCant(0);
          } else {
            setCant(value);
          }
        }}
      />
      <ButtonsContainer>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button variant="outlined" disabled={loading} onClick={handleBuy}>Comprar</Button>
      </ButtonsContainer>
    </Content>
  </Dialog>
);