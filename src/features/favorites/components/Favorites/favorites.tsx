import { isEmpty } from "lodash";
import { ItemsWrapper } from "../../../common/components/ItemsWrapper";
import { ProductCard } from "../../../common/components/ProductCard";
import { ProductData } from "../../../products/types"
import { Container } from "./favorites.styles";

interface FavoritesProps {
  favoritesProducts: ProductData[];
  loading: boolean;
  hasError: boolean;
}

export const Favorites = ({ favoritesProducts, loading, hasError }: FavoritesProps) => (
  <Container>
    <ItemsWrapper
      loading={loading}
      isEmpty={isEmpty(favoritesProducts) && !loading && !hasError}
      hasError={hasError}
      errorMessage="Error al intentar obtener favoritos"
      emptyMessage="No tenes favoritos guardados">
      {/* @ts-ignore */}
      {favoritesProducts.map(product => <ProductCard productData={{ ...product, tittle: product.name }} key={product.id} />)}
    </ItemsWrapper>
  </Container>
)