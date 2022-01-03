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
        name: 'Menu',
        icon: 'product',
        child: [
          {
            name: 'Product',
            key: 102,
            url: '/product/list'
          },
          {
            name: 'Create Product',
            key: 102,
            subkey: 102,
            url: '/product/create',
            hidden: true,
          },
          {
            name: 'Edit Product',
            key: 102,
            subkey: 102,
            url: '/product/edit',
            hidden: true,
          },
        ]
      },
    ]
  }
