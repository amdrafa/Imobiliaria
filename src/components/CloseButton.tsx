import React, { useState } from "react";
import {GrClose} from 'react-icons/gr'
import {BsArrowLeftCircle} from 'react-icons/bs'

export interface LikeButtonProps {
  className?: string;
  liked?: boolean;
}

const LikeButton: React.FC<LikeButtonProps> = ({
  className,
  liked = false
}) => {
  const [isLiked, setIsLiked] = useState(liked);

  return (
    <button
      className={`bg-black/50 px-3.5 h-10 flex items-center justify-center rounded-full ${className}`}
    >
        <div className="text-white">
        <BsArrowLeftCircle className="text-blue-50"/>
        </div>
      
     
    </button>
  );
};

export default LikeButton;
