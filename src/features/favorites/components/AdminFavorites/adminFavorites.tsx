import { isEmpty } from "lodash";
import { ItemsWrapper } from "../../../common/components/ItemsWrapper";
import { ProductCard } from "../../../common/components/ProductCard";
import { Container } from "./adminFavorites.styles";
import { ProductData } from "../../../products/types";
import { ProductSummary } from "../../../common/types";
import { ProductComments } from "../../../common/components/ProductComments";
import { useState } from "react";
import { useDialog } from "../../../common/hooks/useDialog";
import { UserFavorites } from "../../types";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AdminFavoritesProps {
  usersFavorites: UserFavorites[];
  loading: boolean;
  hasError: boolean;
}

export const AdminFavorites = ({ usersFavorites, loading, hasError }: AdminFavoritesProps) => {
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

  return (
    <Container>
      <ItemsWrapper
        loading={loading}
        isEmpty={isEmpty(usersFavorites) && !loading && !hasError}
        hasError={hasError}
        errorMessage="Error al intentar obtener favoritos"
        emptyMessage="No tenes favoritos guardados">
        {usersFavorites.map(userFavorites => (
          <Accordion key={userFavorites.username}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              {userFavorites.username}
            </AccordionSummary>
            <AccordionDetails>
              {userFavorites.productResponse.map(product =>
                <ProductCard
                  productData={parseToProductData(product)}
                  showComments={handleSelectProductId(product.id)}
                  key={product.id}
                />
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </ItemsWrapper>
      <ProductComments open={open} handleClose={handleClose} id={selectedId} />
    </Container>
  )
}