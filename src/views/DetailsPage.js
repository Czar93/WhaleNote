import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import withContext from 'hoc/withContext';

const dummyArticle = {
  id: 1,
  title: 'Przykładowa notatka',
  content: 'Tutaj jeszcze dużo pracy mnie czeka',
  twitterName: 'https://pbs.twimg.com/profile_images/1010862750401253377/Rof4XuYC_400x400.jpg',
  articleUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  created: '1 day',
};

const DetailsPage = () => {
  return (
    <DetailsTemplate
      title={dummyArticle.title}
      content={dummyArticle.content}
      twitterName={dummyArticle.twitterName}
      created={dummyArticle.created}
    />
  );
};

export default withContext(DetailsPage);
