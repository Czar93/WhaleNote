import React from 'react';
import UserPageTamplate from 'templates/UserPageTamplate';
import Card from 'components/molecules/Card/Card';

const Twitters = () => (
  <UserPageTamplate pageType="twitters">
    <Card cardType="twitters" />
    <Card cardType="twitters" />
    <Card cardType="twitters" />
    <Card cardType="twitters" />
    <Card cardType="twitters" />
    <Card cardType="twitters" />
  </UserPageTamplate>
);

export default Twitters;
