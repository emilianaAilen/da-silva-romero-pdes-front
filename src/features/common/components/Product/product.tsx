import { Button } from "@mui/material";
import { ProductData } from "../../../products/types";
import { ActionsContainer, Container, InfoContainer, Picture, Price, PriceContainer, Title } from "./product.styles";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import { AddProduct } from "../../../products/components/AddProduct";

interface ProductProps {
  productData: ProductData;
  handleAddToFavorite: () => void;
  favoritePostLoading: boolean;
}

export const Product = ({ productData, favoritePostLoading, handleAddToFavorite }: ProductProps) => {
  const [open, setOpen] = useState(false);
  const {imageLink, tittle, price} = productData;

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Picture src={imageLink} loading="lazy" alt="itemPicture" />
      <InfoContainer>
        <PriceContainer>
          <Price>$ {price.toLocaleString("es")}</Price>
          <ActionsContainer>
            <Button variant="outlined" endIcon={<FavoriteIcon />} disabled={favoritePostLoading} onClick={handleAddToFavorite}>
              Agregar
            </Button>
            <Button variant="outlined" endIcon={<ShoppingCartIcon />} disabled={favoritePostLoading} onClick={handleOpen}>
              Comprar
            </Button>
          </ActionsContainer>
        </PriceContainer>
        <Title>{tittle}</Title>
      </InfoContainer>
      <AddProduct open={open} productData={productData} handleClose={handleClose}/>
    </Container>
  )
};
