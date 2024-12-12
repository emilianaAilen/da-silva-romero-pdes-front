import { Button } from "@mui/material";
import { ProductData } from "../../../products/types";
import { ActionsContainer, Container, InfoContainer, Picture, Price, PriceContainer, Title } from "./productCard.styles";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ReactNode } from "react";
import { AddProduct } from "../../../products/components/AddProduct";
import ReviewsIcon from '@mui/icons-material/Reviews';
import { useDialog } from "../../hooks/useDialog";

interface ProductCardProps {
  productData: ProductData;
  favoritePostLoading?: boolean;
  showActions?: boolean;
  summary?: ReactNode;
  showComments?: () => void;
  handleAddToFavorite?: () => void;
}

export const ProductCard = ({
  productData,
  favoritePostLoading,
  showActions = false,
  summary,
  handleAddToFavorite,
  showComments
}: ProductCardProps) => {
  const { open, handleClose, handleOpen } = useDialog();
  const { imageLink, tittle, price } = productData;

  return (
    <Container>
      <Picture src={imageLink} loading="lazy" alt="itemPicture" />
      <InfoContainer>
        <PriceContainer>
          <Price>$ {price.toLocaleString("es")}</Price>
          {showComments && <Button onClick={showComments} endIcon={<ReviewsIcon />} sx={{ width: 'fit-content' }} variant="outlined">Opiniones</Button>}
          {showActions && <ActionsContainer>
            <Button variant="outlined" endIcon={<FavoriteIcon />} disabled={favoritePostLoading} onClick={handleAddToFavorite}>
              Agregar
            </Button>
            <Button variant="outlined" endIcon={<ShoppingCartIcon />} disabled={favoritePostLoading} onClick={handleOpen}>
              Comprar
            </Button>
          </ActionsContainer>}
          {summary ? summary : null}
        </PriceContainer>
        <Title>{tittle}</Title>
      </InfoContainer>
      <AddProduct open={open} productData={productData} handleClose={handleClose} />
    </Container>
  );
};
