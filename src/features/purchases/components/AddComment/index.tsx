import { useState } from 'react';
import { AddComment as AddCommentUI } from './addComment';
import useSWRMutation from 'swr/mutation';
import { API } from '../../../../api';
import { poster } from '../../../common/utils';
import { useDispatch } from 'react-redux';
import { showSnackbar } from '../../../common/slices/snackbarSlice';
import { useSWRConfig } from 'swr';

interface AddCommentProps {
  purchaseId: string | null;
  productId: string | null;
}

export const AddComment = ({ purchaseId, productId }: AddCommentProps) => {
  const [puntage, setPuntage] = useState(0);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const { trigger, isMutating } = useSWRMutation(purchaseId ? API.addComment(purchaseId) : null, poster);
  const { mutate } = useSWRConfig();

  const handleComment = async () => {
    try {
      await trigger({
        description: comment,
        likes: puntage
      } as any);
      dispatch(showSnackbar({ type: 'success', message: 'Comentario agregado' }));
      productId && mutate(API.getComments(productId));
      setPuntage(0);
      setComment('');
    } catch (error) {
      dispatch(showSnackbar({ type: 'error', message: 'No se pudo agregar el comentario' }));
    }
  };

  return (
    <AddCommentUI
      puntage={puntage}
      comment={comment}
      loading={isMutating}
      setComment={setComment}
      setPuntage={setPuntage}
      handleComment={handleComment}
    />
  );
}