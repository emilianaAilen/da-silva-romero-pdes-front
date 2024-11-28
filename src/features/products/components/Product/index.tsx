import { ProductData } from '../../types';
import { poster } from '../../../common/utils';
import { API } from '../../../../api';
import useSWRMutation from 'swr/mutation'
import { showSnackbar } from '../../../common/slices/snackbarSlice';
import { useDispatch } from 'react-redux';
import { ProductCard } from '../../../common/components/ProductCard';

interface ProductProps {
  productData: ProductData;
}

export const Product = ({ productData }: ProductProps) => {
  const dispatch = useDispatch();
  const { trigger, isMutating } = useSWRMutation(API.addToFavorites(productData.id), poster);

  const handleAddToFavorite = async () => {
    try {
      await trigger();
      dispatch(showSnackbar({ type: 'success', message: 'Producto agregado a favoritos' }));
    } catch (error) {
      dispatch(showSnackbar({ type: 'error', message: 'No se pudo agregar a favoritos' }));
    }
  };

  return <ProductCard
    productData={productData}
    favoritePostLoading={isMutating}
    showActions
    handleAddToFavorite={handleAddToFavorite}
  />
}