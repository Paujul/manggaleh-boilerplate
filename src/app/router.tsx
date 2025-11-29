import { createBrowserRouter } from 'react-router'

import AppLayout from '@/components/layout/AppLayout'
import { FallbackSpinner } from '@/components/layout/FallbackSpinner'
import { paths } from '@/config/paths'
import NotFound from '@/pages/error/NotFound'

export const appRouter = createBrowserRouter([
  {
    path: paths.home.path,
    element: <AppLayout />,
    HydrateFallback: FallbackSpinner,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('@/pages/home')).default,
        }),
      },
      {
        path: paths.app.myServices.path,
        lazy: async () => ({
          Component: (await import('@/pages/my-services')).default,
        }),
      },
      // {
      //   path: paths.app.productDetail.path,
      //   lazy: async () => ({
      //     Component: (await import('@/pages/product/detail/ProductDetail'))
      //       .default,
      //   }),
      // },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
])
