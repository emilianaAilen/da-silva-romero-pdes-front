import { Avatar, Card, CardContent, CardHeader, Dialog, DialogContent, IconButton, Rating, Stack, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { isEmpty } from "lodash";
import { ProductComment } from "../../types";
import { ItemsWrapper } from "../ItemsWrapper";
import { ReactNode } from "react";

interface ProductCommentsProps {
  open: boolean;
  loading: boolean;
  hasError: boolean;
  comments: ProductComment[];
  children?: ReactNode;
  handleClose: () => void;
}

export const ProductComments = ({
  open,
  loading,
  hasError,
  comments,
  children,
  handleClose,
}: ProductCommentsProps) => {
  const getLocalDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString();
  }

  return (
    <Dialog
      PaperProps={{
        sx: {
          width: '600px',
          minHeight: '500px',
          maxHeight: '800px',
          backgroundImage: 'none',
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
        <ItemsWrapper
          loading={loading}
          isEmpty={!hasError && !loading && isEmpty(comments)}
          hasError={hasError}
          emptyMessage="No hay comentarios"
          errorMessage="Error al tratar de obtener comentarios"
        >
          <Stack width="100%" gap={2} maxHeight="350px" overflow="auto" marginBottom={2}>
            {comments.map(comment => (
              <Card sx={{ width: '100%', overflow: 'unset' }} key={comment.id}>
                <CardHeader
                  avatar={
                    <Avatar>
                      {comment.username[0]}
                    </Avatar>
                  }
                  title={comment.username}
                  subheader={getLocalDate(comment.createdAt)}
                />
                <CardContent>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {comment.description}
                  </Typography>
                  <Rating name="likes" value={comment.likes} readOnly />
                </CardContent>
              </Card>
            ))}
          </Stack>
        </ItemsWrapper>
        {children}
      </DialogContent>
    </Dialog>
  );
};