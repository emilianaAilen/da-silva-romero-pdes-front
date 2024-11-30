import { useEffect, useState } from 'react';
import { PurchaseComments as PurchaseCommentsUI } from './purchaseComments';
import useSWRMutation from 'swr/mutation';
import { API } from '../../../../api';
import { poster } from '../../../common/utils';
import { useDispatch } from 'react-redux';
import { showSnackbar } from '../../../common/slices/snackbarSlice';

interface PurchaseCommentsProps {
  open: boolean;
  id: string;
  handleClose: () => void;
}

export const PurchaseComments = ({ open, id, handleClose }: PurchaseCommentsProps) => {
  const [puntage, setPuntage] = useState(0);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
   
  useEffect(() => {
    setPuntage(0);
    setComment('');
  }, [open]);

  const { trigger, isMutating } = useSWRMutation(API.addComment(id), poster);

  const handleComment = async () => {
    try {
      await trigger({
        description: comment,
        likes: puntage
      } as any);
      dispatch(showSnackbar({ type: 'success', message: 'Comentario agregado' }));
      handleClose();
    } catch (error) {
      dispatch(showSnackbar({ type: 'error', message: 'No se pudo agregar el comentario' }));
    }
  };

  return (
    <PurchaseCommentsUI
      open={open}
      puntage={puntage}
      comment={comment}
      loading={isMutating}
      setComment={setComment}
      setPuntage={setPuntage}
      handleClose={handleClose}
      handleComment={handleComment}
    />
  );
}