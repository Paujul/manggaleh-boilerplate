export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },

  app: {
    dashboard: {
      path: '/dashboard',
      getHref: () => '/dashboard',
    },
    productDetail: {
      path: '/product/:id',
      getHref: (id: string | number) => `/product/${id}`,
    },
  },
} as const
