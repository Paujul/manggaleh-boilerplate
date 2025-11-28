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
    productDetail: {
      path: '/product/:id',
      getHref: (id: string | number) => `/product/${id}`,
    },
  },
} as const
