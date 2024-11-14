import { ProductData } from "../../../products/types";
import { Container, InfoContainer, Picture, Price, PriceContainer, Title } from "./product.styles";

interface ProductProps {
  productData: ProductData;
}

export const Product = ({ productData: { imageLink, tittle, price } }: ProductProps) => (
  <Container>
    <Picture src={imageLink} loading="lazy" alt="itemPicture" />
    <InfoContainer>
      <PriceContainer>
        <Price>$ {price.toLocaleString("es")}</Price>
      </PriceContainer>
      <Title>{tittle}</Title>
    </InfoContainer>
  </Container>
);
