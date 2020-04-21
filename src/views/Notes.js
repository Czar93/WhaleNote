import React from 'react';
import UserPageTamplate from 'templates/UserPageTamplate';
import Card from 'components/molecules/Card/Card';

const Notes = () => (
  <UserPageTamplate pageType="notes">
    <Card cardType="notes" />
    <Card cardType="notes" />
    <Card cardType="notes" />
    <Card cardType="notes" />
    <Card cardType="notes" />
    <Card cardType="notes" />
  </UserPageTamplate>
);

export default Notes;
