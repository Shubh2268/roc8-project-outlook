import React, { useContext } from 'react';
import { EmailContext } from '../context/EmailContext';

const FilterBar = () => {
  const { filter, setFilter } = useContext(EmailContext);

  return (
    <div className='flex flex-wrap text-sm space-x-1 md:space-x-2 text-slate-200'>
      <h4 className='px-2 py-1 font-medium'>Filter By : </h4>
      <button className={`px-3 py-1 rounded-full ${filter === 'all' ? 'bg-pro-filter-btn border border-pro-border' : ''}`} onClick={() => setFilter('all')}>All</button>

      <button className={`px-3 py-1 rounded-full ${filter === 'read' ? 'bg-pro-filter-btn border border-pro-border' : ''}`} onClick={() => setFilter('read')}>Read</button>

      <button className={`px-3 py-1 rounded-full ${filter === 'unread' ? 'bg-pro-filter-btn border border-pro-border' : ''}`} onClick={() => setFilter('unread')}>Unread</button>

      <button className={`px-3 py-1 rounded-full ${filter === 'favorite' ? 'bg-pro-filter-btn border border-pro-border' : ''}`} onClick={() => setFilter('favorite')}>Favorite </button>
    </div>
  );
};

export default FilterBar;
