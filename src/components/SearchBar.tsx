import React from "react";
import { ReactComponent as Search } from "../assets/svg/Search.svg";
import { StyledSearchBar } from "./styled/SearchBar.styled";

interface SearchBarProps {
  onInput: (value: string) => void;
  value: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onInput, value }) => {
  return (
    <StyledSearchBar>
      <label>
        <input
          placeholder="Поиск"
          type="text"
          value={value}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            onInput(e.target.value)
          }
        />
        <Search />
      </label>
    </StyledSearchBar>
  );
};
export default React.memo(SearchBar);
