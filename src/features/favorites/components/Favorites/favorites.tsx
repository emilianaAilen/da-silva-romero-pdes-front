import { isEmpty } from "lodash";
import { ItemsWrapper } from "../../../common/components/ItemsWrapper";
import { ProductCard } from "../../../common/components/ProductCard";
import { Container } from "./favorites.styles";
import { ProductSummary } from "../../../common/types";
import { ProductComments } from "../../../common/components/ProductComments";
import { useState } from "react";
import { useDialog } from "../../../common/hooks/useDialog";
import { UserFavorites } from "../../types";
import { Accordion, AccordionDetails, AccordionSummary, Stack } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { parseToProductData } from "../../../common/utils";

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
        emptyMessage="No hay favoritos guardados">
        <Stack gap={2}>
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
        </Stack>
      </ItemsWrapper>
      <ProductComments open={open} handleClose={handleClose} id={selectedId} />
    </Container>
  )
}