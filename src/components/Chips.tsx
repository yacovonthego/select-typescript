import React from "react";
import { ReactComponent as Cross } from "../assets/svg/Cross.svg";
import { StyledChip } from "./styled/Chip.styled";

const Chips: React.FC<{
  values?: string[];
  onClick: (value: string) => void;
  deleteEnabled: boolean;
}> = ({ values, onClick, deleteEnabled }) => {
  const handleCrossClicked = (value: string) => {
    onClick(value);
  };
  return (
    <>
      {values &&
        values.map((value) => (
          <StyledChip extraPadding={deleteEnabled} key={value}>
            {value}
            {deleteEnabled && (
              <Cross onClick={() => handleCrossClicked(value)} />
            )}
          </StyledChip>
        ))}
    </>
  );
};

export default Chips;
