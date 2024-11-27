import { Button } from "@mui/material";
import { ProductData } from "../../../products/types";
import { ActionsContainer, Container, InfoContainer, Picture, Price, PriceContainer, Title } from "./product.styles";
import FavoriteIcon from '@mui/icons-material/Favorite';

interface ProductProps {
  productData: ProductData;
  handleAddToFavorite: () => void;
  favoritePostLoading: boolean;
}

export const Product = ({ productData: { imageLink, tittle, price }, favoritePostLoading, handleAddToFavorite }: ProductProps) => (
  <Container>
    <Picture src={imageLink} loading="lazy" alt="itemPicture" />
    <InfoContainer>
      <PriceContainer>
        <Price>$ {price.toLocaleString("es")}</Price>
        <ActionsContainer>
          <Button variant="outlined" endIcon={<FavoriteIcon />} disabled={favoritePostLoading} onClick={handleAddToFavorite}>
            Agregar
          </Button>
        </ActionsContainer>
      </PriceContainer>
      <Title>{tittle}</Title>
    </InfoContainer>
  </Container>
);
