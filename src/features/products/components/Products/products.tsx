import { Product } from "../Product";
import { SearchBoxWrapper } from "../../../common/components/SearchBoxWrapper";
import { Container } from "./products.styles";
import { ProductData } from "../../types";
import { isEmpty } from "lodash";
import { ItemsWrapper } from "../../../common/components/ItemsWrapper";

interface ProductsProps {
  products: ProductData[];
  loading: boolean;
  hasError: boolean;
  hasQuery: boolean;
}

export const Products = ({ products, loading, hasError, hasQuery }: ProductsProps) => (
  <Container>
    <SearchBoxWrapper>
      <ItemsWrapper
        loading={loading}
        isEmpty={!loading && isEmpty(products) && hasQuery && !hasError}
        hasError={!loading && hasError}
        emptyMessage="No se encuentran productos con tu búsqueda."
        errorMessage="Error al intentar buscar productos"
      >
        <>
          {isEmpty(products) && !hasQuery && <p>Buscar productos.</p>}
          {products.map(product => (<Product key={product.id} productData={product} />))}
        </>
      </ItemsWrapper>
    </SearchBoxWrapper>
  </Container>);
