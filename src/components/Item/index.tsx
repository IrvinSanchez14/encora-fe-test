import React from "react";
import { IData } from "../../view/home";
import { useNavigate } from "react-router-dom";

interface ItemProps {
  item: IData
}

const Item = ({
  item
}: ItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${item.id}`)
  }

  return (
    <div onClick={handleClick} className="flex justify-between p-5 border-t-[2px] border-l-[2px] border-r-[2px] hover:bg-slate-50 h-[80px]">
      <span className="w-[150px]">{item.title}</span>
      <span>{item.content}</span>
      <img src={item.image} className="w-[35px]" alt={item.title} />
    </div>
  )
}

export default Item