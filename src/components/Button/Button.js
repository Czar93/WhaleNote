import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  background-color: #ffd82b;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      width: 105px;
      height: 30px;
      background-color: #e6e6e6;
      font-size: 10px;
    `}
`;

export default Button;
