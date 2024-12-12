import { Button, Card, CardActions, CardContent, Rating, TextField, Typography } from "@mui/material";
import { isEmpty, isNull } from "lodash";

interface AddCommentProps {
  puntage: number;
  comment: string;
  loading: boolean;
  setComment: (comment: string) => void;
  setPuntage: (puntage: number) => void;
  handleComment: () => void;
}

export const AddComment = ({
  puntage,
  comment,
  loading,
  setComment,
  setPuntage,
  handleComment
}: AddCommentProps) => {
  const isButtonDisabled = isEmpty(comment.trim());

  return (
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
  );
};