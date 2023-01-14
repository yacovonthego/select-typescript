import styled from "styled-components";

export const StyledDropDownCheckbox = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;

  & > div {
    position: absolute;
    border: 2px solid #c1c1c1;
    border-radius: 6px;
    width: 24px;
    height: 24px;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    &:checked {
      & + div {
        background: #005ffd;
        border: 2px solid #0049d9;
      }
    }
  }
`;

export const StyledDropDownItem = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  /* margin: 0 -16px; */
  min-height: 50px;
  padding: 0 16px;

  & > svg {
    margin-right: 10px;
  }

  &:hover {
    background: #faf9f9;
  }
`;

export const ItemsWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 32px rgba(51, 51, 51, 0.15);
  visibility: hidden;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  transition-duration: 0.5s;
  transition-property: opacity, transform;
  transform: scale(0.99) translateY(-0.7em);
  transform-origin: top;
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  /* padding: 16px 16px 0 16px; */
  border-radius: 12px;
  width: 100%;
  opacity: 0;

  ${StyledDropDownItem} + ${StyledDropDownItem} {
    border-top: 1px solid #f4f4f4;
  }
`;
export const InputWrapper = styled.div`
  position: relative;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #c1c1c1;
  border-radius: 10px;
  min-height: 40px;
  display: flex;
`;

export const StyledDropDown = styled.div`
  width: 400px;

  & > label {
    display: block;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 4px;
  }

  ${InputWrapper} {
    position: relative;
  }

  .arrow-icon {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%) rotate(180deg);
  }

  &[aria-checked="true"] {
    ${ItemsWrapper} {
      opacity: 1;
      visibility: visible;
      transform: scale(1) translateY(0);
    }

    .arrow-icon {
      transform: translateY(-50%) rotate(0deg);
    }
  }
`;
