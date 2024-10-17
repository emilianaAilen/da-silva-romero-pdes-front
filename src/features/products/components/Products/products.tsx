import { CircularProgress } from "@mui/material";
import { Product } from "../../../common/components/Product";
import { SearchBoxWrapper } from "../../../common/components/SearchBoxWrapper";
import { Container, ProductsContainer } from "./products.styles";
import { ProductData } from "../../types";
import { isEmpty } from "lodash";

interface ProductsProps {
  products: ProductData[];
  loading: boolean;
  hasError: boolean;
  hasQuery: boolean;
}

export const Products = ({ products, loading, hasError, hasQuery }: ProductsProps) => (
  <Container>
    <SearchBoxWrapper>
      <ProductsContainer>
        {!loading && isEmpty(products) && hasQuery && !hasError && <p>No se encuentran productos con tu búsqueda.</p>}
        {isEmpty(products) && !hasQuery && <p>Buscar productos.</p>}
        {!loading && hasError && <p>Error al intentar buscar productos.</p>}
        {loading && <CircularProgress />}
        {products.map(product => (<Product key={product.id} productData={product} />))}
      </ProductsContainer>
    </SearchBoxWrapper>
  </Container>);
