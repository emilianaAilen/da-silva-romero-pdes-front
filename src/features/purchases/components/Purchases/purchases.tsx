import { isEmpty } from "lodash";
import { ItemsWrapper } from "../../../common/components/ItemsWrapper";
import { ProductCard } from "../../../common/components/ProductCard";
import { ProductData } from "../../../products/types"
import { Container } from "./purchases.styles";
import { Purchase } from "../../types";
import { Rating, Stack, Typography } from "@mui/material";
import { useDialog } from "../../../common/hooks/useDialog";
import { PurchaseComments } from "../PurchaseComments";
import { useState } from "react";

interface FavoritesProps {
  purchases: Purchase[];
  loading: boolean;
  hasError: boolean;
}

export const Purchases = ({ purchases, loading, hasError }: FavoritesProps) => {
  const [selectedId, setSelectedId] = useState('');
  const { open, handleClose, handleOpen } = useDialog();

  const parseToCardData = ({ id, price_buyed, total_buyed, product }: Purchase): ProductData => (
    {
      id,
      tittle: product.name,
      price: price_buyed * total_buyed,
      imageLink: product.url_image
    }
  );

  const onClose = () => {
    setSelectedId('');
    handleClose();
  }

  const handleShowComments = (id: string) => () => {
    setSelectedId(id);
    handleOpen();
  }

  return (
    <Container>
      <ItemsWrapper
        loading={loading}
        isEmpty={isEmpty(purchases) && !loading && !hasError}
        hasError={hasError}
        errorMessage="Error al intentar obtener favoritos"
        emptyMessage="No tenes favoritos guardados">
        {purchases.map(purchase =>
          <ProductCard
            productData={parseToCardData(purchase)}
            key={purchase.id}
            showComments={handleShowComments(purchase.id)}
            summary={
              <Stack>
                <Typography>Cantidad: {purchase.total_buyed}</Typography>
                <Typography>Precio x unidad: {purchase.price_buyed}</Typography>
                <Rating name="puntage" value={purchase.puntage} readOnly />
              </Stack>
            }
          />
        )}
      </ItemsWrapper>
      <PurchaseComments open={open} id={selectedId} handleClose={onClose} />
    </Container>
  );
};