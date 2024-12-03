import useSWR from "swr";
import { fetcher } from "../../../common/utils";
import { API } from "../../../../api";
import { ProductsReport as ProductsReportUI } from './productsReport'

interface ProductsReportProps {
  isTopPurchases?: boolean;
}

export const ProductsReport = ({ isTopPurchases }: ProductsReportProps) => {
  const { data, error, isLoading } = useSWR(isTopPurchases ? API.admin.getTopPurchases : API.admin.getTopFavorites, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  });

  return <ProductsReportUI topProducts={data || []} hasError={error!} loading={isLoading} />;
}