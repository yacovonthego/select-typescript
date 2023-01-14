import styled from "styled-components";

export const StyledChip = styled.div<{ extraPadding?: boolean }>`
  position: relative;
  background: #f4f4f4;
  border-radius: 8px;
  padding: 6px ${({ extraPadding = false }) => (extraPadding ? "32px" : "16px")}
    6px 16px;
  flex-grow: 0;
  flex: none;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;

  svg {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const StyledChipContainer = styled.div`
  margin: 7px 40px 7px 10px;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  display: flex;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }

  ${StyledChip} + ${StyledChip} {
    margin-left: 4px;
  }
`;
