import { isEmpty } from "lodash";
import { ItemsWrapper } from "../../../common/components/ItemsWrapper";
import { ProductCard } from "../../../common/components/ProductCard";
import { Container } from "./favorites.styles";
import { Favorite } from "../../types";
import { ProductData } from "../../../products/types";

interface FavoritesProps {
  favoritesProducts: Favorite[];
  loading: boolean;
  hasError: boolean;
}

export const Favorites = ({ favoritesProducts, loading, hasError }: FavoritesProps) => {
  const parseToProductData = ({ id, name, price, url_image }: Favorite): ProductData => (
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
        {favoritesProducts.map(product => <ProductCard productData={parseToProductData(product)} key={product.id} />)}
      </ItemsWrapper>
    </Container>
  )
}