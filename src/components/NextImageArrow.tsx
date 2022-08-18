import React, { useState } from "react";
import {BsArrowLeftCircle} from 'react-icons/bs'

export interface LikeButtonProps {
  className?: string;
  liked?: boolean;
  handleUserClick(img: string | undefined): void

}

const NextImageArrow: React.FC<LikeButtonProps> = ({
  className,
  liked = false,
  handleUserClick
}) => {
  const [isLiked, setIsLiked] = useState(liked);

  return (
    <button
      className={`bg-black/50 px-2.5 h-10 flex items-center justify-center rounded-full text-white ${className}`}
      onClick={() => {
        handleUserClick('')
      }}
    >
     <BsArrowLeftCircle fontSize={26} opacity={0.5} className="hover:opacity-80" />
     
    </button>
  );
};

export default NextImageArrow;
