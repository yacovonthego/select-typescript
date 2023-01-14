import React from "react";
import { DropDownItemType } from "../types/DropDownItem";
import {
  StyledDropDownCheckbox,
  StyledDropDownItem,
} from "./styled/DropDown.styled";
import { ReactComponent as Check } from "../assets/svg/Check.svg";

interface ItemProps {
  active?: boolean;
  onClick: (value: string) => void;
  showIcon: boolean;
  multi?: boolean;
}

const DropDownItem: React.FC<DropDownItemType & ItemProps> = ({
  icon,
  value,
  showIcon,
  onClick,
}) => {
  const handleClick = (value: string) => {
    onClick(value);
  };

  return (
    <StyledDropDownItem onClick={() => handleClick(value)}>
      {showIcon && icon} <span>{value}</span>
    </StyledDropDownItem>
  );
};

const DropDownItemCheckbox: React.FC<
  DropDownItemType &
    Omit<ItemProps, "onClick"> & {
      onClick: (isChecked: boolean, value: string) => void;
    }
> = ({ icon, value, active = false, showIcon, multi = false, onClick }) => {
  const handleClick = (isChecked: boolean) => {
    onClick(isChecked, value);
  };

  return (
    <StyledDropDownItem>
      {showIcon && icon} <span>{value}</span>
      {multi && (
        <StyledDropDownCheckbox>
          <input
            type="checkbox"
            hidden
            name="dropdown-multi"
            checked={active}
            onChange={(e) => handleClick(e.target.checked)}
          />
          <div>
            <Check />
          </div>
        </StyledDropDownCheckbox>
      )}
    </StyledDropDownItem>
  );
};
const DropDownItemCheckboxMemo = React.memo(DropDownItemCheckbox);
export { DropDownItemCheckboxMemo };
export default React.memo(DropDownItem);
