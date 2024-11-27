import { useState } from "react";
import { ProductData } from "../../types";
import { AddProduct as AddProductUI } from './addProduct';
import { useDispatch } from "react-redux";
import useSWRMutation from "swr/mutation";
import { API } from "../../../../api";
import { poster } from "../../../common/utils";
import { showSnackbar } from "../../../common/slices/snackbarSlice";

interface AddProductProps {
  open: boolean;
  productData: ProductData;
  handleClose: () => void;
}

export const AddProduct = ({ open, productData, handleClose }: AddProductProps) => {
  const [cant, setCant] = useState(1);
  const dispatch = useDispatch();

  const { trigger, isMutating } = useSWRMutation(API.buyProduct(productData.id), poster);

  const handleBuy = async () => {
    try {
      const userID = localStorage.getItem('id');
      await trigger({
        userID,
        productID: productData.id,
        cantStockBuyed: cant,
        priceBuyed: productData.price,
        puntage: 0
      } as any);
      dispatch(showSnackbar({ type: 'success', message: 'Compra realizada' }));
    } catch (error) {
      dispatch(showSnackbar({ type: 'error', message: 'No se pudo realizar la compra' }));
    }
  };

  return (<AddProductUI open={open} cant={cant} loading={isMutating} setCant={setCant} handleClose={handleClose} handleBuy={handleBuy} />)
};