import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

import styled from 'styled-components';
import AuthTemplate from 'templates/AuthTemplate';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 20vw;
`;

const StyledInput = styled(Input)`
  margin: 15px 0;
  width: 300px;
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.notes};
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const RegisterPage = () => (
  <AuthTemplate>
    <Formik initialValues={{ username: '', password: '' }} onSubmit={() => {}}>
      {({ handleChange, handleBlur, values }) => (
        <>
          <Heading>Sign up</Heading>
          <StyledForm>
            <StyledInput
              name="username"
              type="text"
              placeholder="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <StyledInput
              name="password"
              type="password"
              placeholder="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <StyledButton type="submit">Create account</StyledButton>
            <StyledLink to={routes.login}>LOG IN!</StyledLink>
          </StyledForm>
        </>
      )}
    </Formik>
  </AuthTemplate>
);

export default RegisterPage;
