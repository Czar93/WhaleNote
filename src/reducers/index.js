import { ADD_ITEM, REMOVE_ITEM } from 'actions';

const initialState = {
  twitters: [
    {
      id: 1,
      title: 'Lebron James',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
      twitterName: 'https://pbs.twimg.com/profile_images/1010862750401253377/Rof4XuYC_400x400.jpg',
    },
    {
      id: 2,
      title: 'Leo Messi',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
      twitterName: 'https://pbs.twimg.com/profile_images/1251473945456513026/BPx72GjX_400x400.jpg',
    },
    {
      id: 3,
      title: 'Robert Lewandowski',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '5 days',
      twitterName: 'https://pbs.twimg.com/profile_images/1188864980478779392/MI9nfJYG_400x400.jpg',
    },
    {
      id: 4,
      title: 'Cristiano Ronaldo',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '10 days',
      twitterName: 'https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg',
    },
  ],
  articles: [
    {
      id: 1,
      title: 'Film na studia',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      created: '1 day',
    },
    {
      id: 2,
      title: 'Kazbek 2018 - szczyt',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      created: '1 day',
    },
    {
      id: 3,
      title: 'Czy cukier osładza życie?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      created: '5 days',
    },
    {
      id: 4,
      title: 'Zakazane piosenki',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      created: '10 days',
    },
  ],
  notes: [
    {
      id: 1,
      title: 'Notatka pierwsza',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
    },
    {
      id: 2,
      title: 'Notatka o notatkach',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '1 day',
    },
    {
      id: 3,
      title: 'Notatka w notatce',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '5 days',
    },
    {
      id: 4,
      title: 'React super jest',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      created: '10 days',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    default:
      return state;
  }
};

export default rootReducer;
