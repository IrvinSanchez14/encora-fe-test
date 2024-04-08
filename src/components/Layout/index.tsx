import React, { ReactNode } from "react"

interface ILayout {
  children: ReactNode;
}

const Layout = ({
  children
}: ILayout) => {
  return (
    <div className="p-[50px] items-center">
      <div className="max-w-screen-xl m-auto">
        {children}
      </div>

    </div>
  )
}

export default Layout