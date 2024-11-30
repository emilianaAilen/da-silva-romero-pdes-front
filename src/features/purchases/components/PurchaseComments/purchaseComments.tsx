import { Button, Card, CardActions, CardContent, Dialog, DialogContent, IconButton, Rating, Stack, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { isEmpty, isNull } from "lodash";

interface PurchaseCommentsProps {
  open: boolean;
  puntage: number;
  comment: string;
  loading: boolean;
  setComment: (comment: string) => void;
  setPuntage: (puntage: number) => void;
  handleClose: () => void;
  handleComment: () => void;
}

export const PurchaseComments = ({
  open,
  puntage,
  comment,
  loading,
  setComment,
  setPuntage,
  handleClose,
  handleComment
}: PurchaseCommentsProps) => {
  const isButtonDisabled = isEmpty(comment.trim());

  return (
    <Dialog
      PaperProps={{
        sx: {
          width: '600px',
          minHeight: '500px',
          maxHeight: '800px',
          backgroundImage: 'none'
        },
      }}
      open={open}
      onClose={handleClose}
    >
      <Stack width="100%" py={2} px={2} alignItems="flex-end">
        <IconButton disabled={loading} aria-label="close" size="small" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <DialogContent dividers>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography marginBottom={2}>
              Opina sobre tu compra
            </Typography>
            <TextField
              sx={{ marginBottom: 2 }}
              id="comment-box"
              fullWidth
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              label="Comentario"
              multiline
              rows={4}
            />
            <Rating
              value={puntage}
              onChange={(_event, newValue) => setPuntage(isNull(newValue) ? 0 : newValue as number)}
            />
          </CardContent>
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button size="small" disabled={isButtonDisabled || loading} onClick={handleComment}>Comentar</Button>
          </CardActions>
        </Card>
      </DialogContent>
    </Dialog>
  );
};