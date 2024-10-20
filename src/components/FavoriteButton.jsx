import React, { useContext } from 'react';
import { EmailContext } from '../context/EmailContext';

const FavoriteButton = ({ email }) => {
  const { toggleFavorite } = useContext(EmailContext);

  return (
    <button className='px-1 md:px-3 py-0.5 md:py-1 bg-pro-accent text-[#fff] rounded-full text-[8px] md:text-xs font-medium' onClick={() => toggleFavorite(email.id)}>
      {email.isFavorite ? 'Unfavorite' : 'Mark as Favorite'}
    </button>
  );
};

export default FavoriteButton;
