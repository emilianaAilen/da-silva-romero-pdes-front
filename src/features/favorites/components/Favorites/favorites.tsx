import { isEmpty } from "lodash";
import { ItemsWrapper } from "../../../common/components/ItemsWrapper";
import { ProductCard } from "../../../common/components/ProductCard";
import { Container } from "./favorites.styles";
import { ProductData } from "../../../products/types";
import { ProductSummary } from "../../../common/types";
import { ProductComments } from "../../../common/components/ProductComments";
import { useState } from "react";
import { useDialog } from "../../../common/hooks/useDialog";

interface FavoritesProps {
  favoritesProducts: ProductSummary[];
  loading: boolean;
  hasError: boolean;
}

export const Favorites = ({ favoritesProducts, loading, hasError }: FavoritesProps) => {
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
        isEmpty={isEmpty(favoritesProducts) && !loading && !hasError}
        hasError={hasError}
        errorMessage="Error al intentar obtener favoritos"
        emptyMessage="No tenes favoritos guardados">
        {favoritesProducts.map(product =>
          <ProductCard
            productData={parseToProductData(product)}
            showComments={handleSelectProductId(product.id)}
            key={product.id}
          />
        )}
      </ItemsWrapper>
      <ProductComments open={open} handleClose={handleClose} id={selectedId} />
    </Container>
  )
}