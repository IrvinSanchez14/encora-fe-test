import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './view/home'
import CreateBlog from './view/create-blog'
import Blog from './view/blog'

const AppRoute = () => {
  const element = useRoutes([
    {
      path: '/', element: <Home />,
    },
    {
      path: '/create-blog', element: <CreateBlog />,
    },
    {
      path: '/blog/:blogId', element: <Blog />,
    },
  ])

  return element
}

export default AppRoute