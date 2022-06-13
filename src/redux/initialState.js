const initialState = {
    columns: [
      {
        id: 1,
        title: 'Books',
        icon: 'book',
      },
      {
        id: 2,
        title: 'Movies',
        icon: 'film',
      },
      {
        id: 3,
        title: 'Games',
        icon: 'gamepad',
      }
    ],
  
    cards: [
      { id: 1, columnId: 1, title: 'Parable of the Sower' },
      { id: 2, columnId: 1, title: 'Call Me by Your Name' },
      { id: 3, columnId: 2, title: 'The Power of the Dog' },
      { id: 4, columnId: 2, title: 'Licorice Pizza' },
      { id: 5, columnId: 3, title: 'Red Dead Redemption II' },
      { id: 6, columnId: 3, title: 'Ghost of Tsushima' }
    ]
  
  };
  
  export default initialState;