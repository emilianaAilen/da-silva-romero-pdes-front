import { isEmpty } from "lodash";
import { ItemsWrapper } from "../../../common/components/ItemsWrapper";
import { ProductCard } from "../../../common/components/ProductCard";
import { ProductData } from "../../../products/types"
import { Container } from "./purchases.styles";
import { Purchase, UserPurchases } from "../../types";
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material";
import { useDialog } from "../../../common/hooks/useDialog";
import { AddComment } from "../AddComment";
import { useState } from "react";
import { ProductComments } from "../../../common/components/ProductComments";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FavoritesProps {
  purchases: Purchase[] | UserPurchases[];
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

  const purchasesList = (purchases: Purchase[]) => purchases.map(purchase =>
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
  );

  return (
    <Container>
      <ItemsWrapper
        loading={loading}
        isEmpty={isEmpty(purchases) && !loading && !hasError}
        hasError={hasError}
        errorMessage="Error al intentar obtener compras"
        emptyMessage="No hay compras registradas">
        <Stack gap={2}>
          {isUser ? purchasesList(purchases as Purchase[]) : (
            (purchases as UserPurchases[]).map((purchase) => (
              <Accordion key={purchase.username}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  {purchase.username}
                </AccordionSummary>
                <AccordionDetails>
                  {purchasesList(purchase.productPurchase)}
                </AccordionDetails>
              </Accordion>
            ))
          )}
        </Stack>
      </ItemsWrapper>
      <ProductComments open={open} id={productId} handleClose={onClose}>
        {isUser && <AddComment purchaseId={purchaseId} productId={productId} />}
      </ProductComments>
    </Container>
  );
};