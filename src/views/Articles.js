import React from 'react';
import UserPageTamplate from 'templates/UserPageTamplate';
import Card from 'components/molecules/Card/Card';

const Articles = () => (
  <UserPageTamplate pageType="articles">
    <Card cardType="articles" />
    <Card cardType="articles" />
    <Card cardType="articles" />
    <Card cardType="articles" />
    <Card cardType="articles" />
    <Card cardType="articles" />
  </UserPageTamplate>
);

export default Articles;
