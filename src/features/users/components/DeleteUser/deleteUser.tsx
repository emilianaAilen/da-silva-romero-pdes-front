import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

interface DeleteUserProps {
  open: boolean;
  email?: string;
  loading: boolean;
  handleCancel: () => void;
  handleDelete: () => void;
}

export const DeleteUser = ({ open, email, loading, handleCancel, handleDelete }: DeleteUserProps) => (
  <Dialog
    sx={{ '& .MuiDialog-paper': { width: '80%' } }}
    open={open}
  >
    <DialogTitle>Eliminar usuario con email: {email}</DialogTitle>
    <DialogContent dividers>
      ¿Estás seguro de que deseas borrar este usuario?
    </DialogContent>
    <DialogActions>
      <Button autoFocus disabled={loading} onClick={handleCancel}>
        Cancelar
      </Button>
      <Button disabled={loading} onClick={handleDelete}>Borrar</Button>
    </DialogActions>
  </Dialog>
)