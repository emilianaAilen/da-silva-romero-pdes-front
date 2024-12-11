import useSWRMutation from "swr/mutation";
import { DeleteUser as DeleteUserUI } from './deleteUser';
import { useSWRConfig } from 'swr';
import { API } from '../../../../api';
import { deleter } from '../../../common/utils';
import { useDispatch } from 'react-redux';
import { showSnackbar } from '../../../common/slices/snackbarSlice';

interface DeleteUserProps {
  open: boolean;
  email?: string;
  handleClose: () => void;
}

export const DeleteUser = ({ open, email, handleClose }: DeleteUserProps) => {
  const dispatch = useDispatch();
  const { trigger, isMutating } = useSWRMutation(email ? API.admin.deleteUser(email) : null, deleter);
  const { mutate } = useSWRConfig();

  const handleDelete = async () => {
    try {
      await trigger();
      dispatch(showSnackbar({ type: 'success', message: 'Usuario borrado' }));
      mutate(API.admin.getAllUsers);
      handleClose();
    } catch (error) {
      dispatch(showSnackbar({ type: 'error', message: 'No se pudo borrar el usuario' }));
    }
  };

  return <DeleteUserUI open={open} email={email} loading={isMutating} handleCancel={handleClose} handleDelete={handleDelete} />;
}