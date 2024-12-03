import { isEmpty } from "lodash"
import { ItemsWrapper } from "../../../common/components/ItemsWrapper"
import { Container } from "./productsReport.styles"
import { ProductSummary } from "../../../common/types";
import { ProductCard } from "../../../common/components/ProductCard";
import { parseToProductData } from '../../../common/utils';

interface ProductsReportProps {
  topProducts: ProductSummary[];
  loading: boolean;
  hasError: boolean;
}

export const ProductsReport = ({ topProducts, loading, hasError }: ProductsReportProps) => (
  <Container>
    <ItemsWrapper
      loading={loading}
      isEmpty={isEmpty(topProducts) && !loading && !hasError}
      hasError={hasError}
      errorMessage="Error al intentar obtener reporte"
      emptyMessage="No Data">
      {topProducts.map(product =>
      (<ProductCard
        productData={parseToProductData(product)}
        key={product.id}
      />))}
    </ItemsWrapper>
  </Container>
);