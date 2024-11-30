import { ProductComments as ProductCommentsUI } from './productComments';
import { API } from '../../../../api';
import { fetcher } from '../../utils';
import useSWR from 'swr';
import { ReactNode } from 'react';

interface ProductCommentsProps {
  open: boolean;
  id: string | null;
  children?: ReactNode;
  handleClose: () => void;
}

export const ProductComments = ({ open, id, children, handleClose }: ProductCommentsProps) => {
  const { data, isLoading, error } = useSWR(id ? API.getComments(id) : null, fetcher);

  return (
    <ProductCommentsUI
      open={open}
      loading={isLoading}
      hasError={!!error}
      handleClose={handleClose}
      comments={data || []}
      children={children}
    />
  );
};
