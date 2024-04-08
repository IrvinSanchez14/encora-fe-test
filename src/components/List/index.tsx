import React from "react"
import Item from "../Item"

interface IList {
  data: any[] | undefined
}

const List = ({
  data
}: IList) => {
  return (
    <div className="pt-8">

      {data!.length > 0 ? (
        <>
          <div className="flex justify-between p-5  bg-neutral-200">
            <label className="w-[150px]">Title</label>
            <label>Content</label>
            <label>Image</label>
          </div>
          {data!.map((item, index) => (
            <Item item={item} key={index} />
          ))}
        </>

      ) : (
        <p className="text-center">No data...</p>
      )
      }
    </div >
  )
}

export default List