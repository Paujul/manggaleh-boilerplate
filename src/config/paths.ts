export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },

  app: {
    about: {
      path: '/about',
      getHref: () => '/about',
    },
    myServices: {
      path: '/services',
      getHref: () => '/services',
    },
    productDetail: {
      path: '/product/:id',
      getHref: (id: string | number) => `/product/${id}`,
    },
  },
} as const
