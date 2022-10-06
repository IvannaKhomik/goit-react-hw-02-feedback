import styled from 'styled-components';

export const FeedbackItem = styled.button`
  &:not(:last-child) {
    margin-right: 24px;
  }
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: #34495e;
  color: #ffffff;
  transition: background-color 250ms ease-out, color 250ms ease-out,
    scale 250ms ease-out;
  &:hover {
    background-color: #f4d03f;
    color: #34495e;
    scale: 1.1;
  }
`;
