import React, { useState } from "react";
import {BsArrowRightCircle} from 'react-icons/bs'

export interface LikeButtonProps {
  className?: string;
  liked?: boolean;
  handleUserClick(img: string | undefined): void
}

const NextImageArrowRight: React.FC<LikeButtonProps> = ({
  className,
  handleUserClick,
  liked = false
}) => {
  const [isLiked, setIsLiked] = useState(liked);

  return (
    <button
      className={`bg-black/50 px-2.5 h-10 flex items-center justify-center rounded-full text-white ${className}`}
      onClick={() => {
        handleUserClick('')
      }}
    >
     <BsArrowRightCircle fontSize={26} opacity={0.5} className="hover:opacity-80" />
     
    </button>
  );
};

export default NextImageArrowRight;
