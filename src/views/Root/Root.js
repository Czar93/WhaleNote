import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

// import styled from 'styled-components';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Hello Adam</h1>
    <Button>Close / Save</Button>
    <Button secondary>Remove</Button>
  </div>
);
export default Root;
