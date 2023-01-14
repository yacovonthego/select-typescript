import styled from "styled-components";

export const StyledSearchBar = styled.div`
  position: relative;
  background: #f4f4f4;
  margin: 16px;
  padding: 10px 10px 10px 36px;
  border-radius: 10px;
  min-height: 40px;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
  }

  label {
    flex: 1;
    display: block;
    cursor: text;
  }

  input {
    background: transparent;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    border: none;
    width: 100%;
    max-height: 14px;

    &::placeholder {
      opacity: 1;
      color: #C1C1C1;
    }

    &:focus {
      border: none;
      outline: none;
    }
  }
`;
