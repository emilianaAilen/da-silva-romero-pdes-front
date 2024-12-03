import { isEmpty } from "lodash";
import { ItemsWrapper } from "../../../common/components/ItemsWrapper";
import { ProductCard } from "../../../common/components/ProductCard";
import { Container } from "./favorites.styles";
import { ProductData } from "../../../products/types";
import { ProductSummary } from "../../../common/types";
import { ProductComments } from "../../../common/components/ProductComments";
import { useState } from "react";
import { useDialog } from "../../../common/hooks/useDialog";
import { UserFavorites } from "../../types";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FavoritesProps {
  favorites: ProductSummary[] | UserFavorites[];
  loading: boolean;
  hasError: boolean;
  isAdmin: boolean;
}

export const Favorites = ({ favorites, loading, hasError, isAdmin }: FavoritesProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { open, handleClose, handleOpen } = useDialog();

  const handleSelectProductId = (id: string) => () => {
    setSelectedId(id);
    handleOpen();
  }
  const parseToProductData = ({ id, name, price, url_image }: ProductSummary): ProductData => (
    {
      id,
      tittle: name,
      price: Number(price),
      imageLink: url_image
    }
  );

  const favoriteProductsList = (favoriteProducts: ProductSummary[]) => favoriteProducts.map(product =>
    <ProductCard
      productData={parseToProductData(product)}
      showComments={handleSelectProductId(product.id)}
      key={product.id}
    />
  )

  return (
    <Container>
      <ItemsWrapper
        loading={loading}
        isEmpty={isEmpty(favorites) && !loading && !hasError}
        hasError={hasError}
        errorMessage="Error al intentar obtener favoritos"
        emptyMessage="No tenes favoritos guardados">
        {isAdmin ? (
          (favorites as UserFavorites[]).map((favorite) => (
            <Accordion key={favorite.username}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {favorite.username}
              </AccordionSummary>
              <AccordionDetails>
                {favoriteProductsList(favorite.productResponse)}
              </AccordionDetails>
            </Accordion>
          ))
        ) : (
          favoriteProductsList(favorites as ProductSummary[])
        )}
      </ItemsWrapper>
      <ProductComments open={open} handleClose={handleClose} id={selectedId} />
    </Container>
  )
}