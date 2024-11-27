import { ProductData } from '../../../products/types';
import { Product as ProductUI } from './product';
import { poster } from '../../utils';
import { API } from '../../../../api';
import useSWRMutation from 'swr/mutation'
import { showSnackbar } from '../../slices/snackbarSlice';
import { useDispatch } from 'react-redux';

interface ProductProps {
  productData: ProductData;
}

export const Product = ({ productData }: ProductProps) => {
  const dispatch = useDispatch();
  const { trigger, isMutating } = useSWRMutation(API.addToFavorites(productData.id), poster);

  const handleAddToFavorite = async () => {
    try {
      const userId = localStorage.getItem('id');
      await trigger({ userId, productExternalId: productData.id } as any);
      dispatch(showSnackbar({ type: 'success', message: 'Producto agregado a favoritos' }));
    } catch (error) {
      dispatch(showSnackbar({ type: 'error', message: 'No se pudo agregar a favoritos' }));
    }
  };

  return <ProductUI productData={productData} favoritePostLoading={isMutating} handleAddToFavorite={handleAddToFavorite} />
}