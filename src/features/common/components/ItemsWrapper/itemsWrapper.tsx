import { ReactNode } from "react";
import { Container } from "./itemsWrapper.styles";
import { CircularProgress } from "@mui/material";

interface ItemsWrapperProps {
  children: ReactNode;
  loading: boolean;
  hasError: boolean;
  isEmpty: boolean;
  emptyMessage: string;
  errorMessage: string;
}

export const ItemsWrapper = ({ children, loading, hasError, isEmpty, emptyMessage, errorMessage }: ItemsWrapperProps) => {
  return (
    <Container>
      {isEmpty && <p>{emptyMessage}</p>}
      {hasError && <p>{errorMessage}</p>}
      {loading && <CircularProgress />}
      {children}
    </Container>
  )
}