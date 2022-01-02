module.exports = {
    menus: [
      {
        key: 5,
        name: 'Home',
        icon: 'home',
        url: '/home'
      },
      {
        key: 1,
        name: 'Pages',
        icon: 'user',
        child: [
          {
            name: 'Form',
            key: 102,
            url: '/form'
          },
          {
            name: 'Table',
            key: 103,
            url: '/table'
          },
          {
            name: 'Calendar',
            key: 104,
            url: '/calendar'
          },
          {
            name: 'Timeline',
            key: 105,
            url: '/timeline'
          },
          {
            name: 'Steps',
            key: 106,
            url: '/steps'
          }
        ]
      },
    ]
  }
