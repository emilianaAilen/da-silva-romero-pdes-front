import { isEmpty } from "lodash";
import { ItemsWrapper } from "../../../common/components/ItemsWrapper";
import { ProductCard } from "../../../common/components/ProductCard";
import { ProductData } from "../../../products/types"
import { Container } from "./purchases.styles";
import { Purchase } from "../../types";
import { Stack, Typography } from "@mui/material";
import { useDialog } from "../../../common/hooks/useDialog";
import { AddComment } from "../AddComment";
import { useState } from "react";
import { ProductComments } from "../../../common/components/ProductComments";

interface FavoritesProps {
  purchases: Purchase[];
  isUser: boolean;
  loading: boolean;
  hasError: boolean;
}

export const Purchases = ({ purchases, loading, hasError, isUser }: FavoritesProps) => {
  const [productId, setProductId] = useState<string | null>(null);
  const [purchaseId, setPurchaseId] = useState<string | null>(null);
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
    setProductId(null);
    setPurchaseId(null);
    handleClose();
  }

  const handleShowComments = (purchase: Purchase) => () => {
    setProductId(purchase.product.id);
    setPurchaseId(purchase.id);
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
            showComments={handleShowComments(purchase)}
            summary={
              <Stack>
                <Typography>Cantidad: {purchase.total_buyed}</Typography>
                <Typography>Precio x unidad: {purchase.price_buyed}</Typography>
              </Stack>
            }
          />
        )}
      </ItemsWrapper>
      <ProductComments open={open} id={productId} handleClose={onClose}>
        {isUser && <AddComment purchaseId={purchaseId} productId={productId} />}
      </ProductComments>
    </Container>
  );
};