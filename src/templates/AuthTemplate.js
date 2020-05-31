import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Heading from 'components/atoms/Heading/Heading';
import whale from 'assets/icons/whale.png';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.notes};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 200px;
  height: auto;
`;

const StyledAuthCard = styled.div`
  height: 400px;
  width: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10%;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
`;

const AuthTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledLogo src={whale} alt="WhaleNote logo" />
    <Heading>Your new favorite online notes experience</Heading>
    <StyledAuthCard>{children}</StyledAuthCard>
  </StyledWrapper>
);

AuthTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthTemplate;
