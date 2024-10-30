import { ChangeEvent, KeyboardEvent, ReactNode, useEffect, useState } from "react";
import searchIcon from "../../../../assets/ic_Search.png";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
import { Box, InputAdornment, TextField } from "@mui/material";

interface SearchBoxWrapperProps {
  children: ReactNode
}
export const SearchBoxWrapper = ({ children }: SearchBoxWrapperProps) => {
  const { query: queryParam } = useSearch();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  console.log(query);

  useEffect(() => {
    if (queryParam && queryParam !== query) {
      setQuery(queryParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParam]);

  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/home?search=${encodeURIComponent(query)}`);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <Box sx={{ width: 800, maxWidth: '100%' }}>
        <TextField
          fullWidth
          value={query}
          onKeyDown={handleKeyPress}
          onChange={handleChangeQuery}
          placeholder="Nunca dejes de buscar"
          slotProps={{
            input: {
              endAdornment: <InputAdornment position="end"><img src={searchIcon} alt="search" /></InputAdornment>,
            },
          }}
        />
      </Box>
      {children}
    </>
  );
};
