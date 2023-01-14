import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ReactComponent as ArrowIcon } from "../assets/svg/Arrow.svg";
import { DropDownItemType } from "../types/DropDownItem";
import Chips from "./Chips";
import DropDownItem, { DropDownItemCheckboxMemo } from "./DropDownItem";
import SearchBar from "./SearchBar";
import { StyledChipContainer } from "./styled/Chip.styled";
import {
  InputWrapper,
  ItemsWrapper,
  StyledDropDown,
} from "./styled/DropDown.styled";

interface DropDownProps {
  items: DropDownItemType[];
  label: string;
  showIcons?: boolean;
  multiselect?: boolean;
  search?: boolean;
}

const DropDown: React.FC<DropDownProps> = ({
  label,
  items,
  showIcons = false,
  multiselect = false,
  search = false,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [active, setActive] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const filteredItems = useMemo(
    () =>
      items.filter((item) =>
        item.value.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [searchValue]
  );

  const handleItemClicked = useCallback((value: string) => {
    setActive([value]);
  }, []);

  const handleItemChecked = useCallback((isChecked: boolean, value: string) => {
    if (isChecked) {
      setActive((prev) => [...prev, value]);
    } else {
      setActive((prev) => {
        const pos = prev.indexOf(value);
        const arrCopy = [...prev];
        arrCopy.splice(pos, 1);

        return arrCopy;
      });
    }
  }, []);

  const handleChipDeleted = useCallback((value: string) => {
    setActive((prev) => {
      const pos = prev.indexOf(value);
      const arrCopy = [...prev];
      arrCopy.splice(pos, 1);

      return arrCopy;
    });
  }, []);

  const handleSearchInput = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  return (
    <StyledDropDown ref={ref} aria-checked={isOpen}>
      <label htmlFor="dropdown">{label}</label>
      <InputWrapper>
        <StyledChipContainer>
          <Chips
            onClick={handleChipDeleted}
            values={active}
            deleteEnabled={multiselect}
          />
        </StyledChipContainer>
        <ArrowIcon className="arrow-icon" onClick={handleDropdownToggle} />
        <ItemsWrapper>
          {search && (
            <SearchBar value={searchValue} onInput={handleSearchInput} />
          )}

          <div
            style={{
              marginTop: multiselect && search ? "-16px" : "",
            }}
          >
            {filteredItems.length && multiselect
              ? filteredItems.map((item) => (
                  <DropDownItemCheckboxMemo
                    key={item.value}
                    icon={item.icon}
                    value={item.value}
                    active={active?.includes(item.value)}
                    onClick={handleItemChecked}
                    showIcon={showIcons}
                    multi={multiselect}
                  />
                ))
              : filteredItems.map((item) => (
                  <DropDownItem
                    key={item.value}
                    icon={item.icon}
                    value={item.value}
                    onClick={handleItemClicked}
                    showIcon={showIcons}
                  />
                ))}
          </div>
        </ItemsWrapper>
      </InputWrapper>
    </StyledDropDown>
  );
};
export default React.memo(DropDown);
