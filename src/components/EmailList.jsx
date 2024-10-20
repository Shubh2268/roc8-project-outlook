import React, { useContext } from 'react';
import { EmailContext } from '../context/EmailContext';
import EmailItem from './EmailItem';
import FilterBar from './FilterBar';

const EmailList = () => {
  const { emails, loading, error, filter, selectedEmail } = useContext(EmailContext);

  if (loading) {
    return <div className='w-full text-center'>Loading emails...</div>;
  }

  if (error) {
    return <div className='w-full text-center'>Error: {error}</div>;
  }

  // Apply filters
  const filteredEmails = emails.filter((email) => {
    if (filter === 'read') return email.isRead;
    if (filter === 'unread') return !email.isRead;
    if (filter === 'favorite') return email.isFavorite;
    return true; // 'all'
  });


  return (
    <div className={`p-5 ${selectedEmail ? 'hidden md:block md:w-2/5' : 'w-screen'}`}>
      <FilterBar />
      <div>
        {filteredEmails.length > 0 ? (
          filteredEmails.map((email) => <EmailItem key={email.id} email={email} />)
        ) : (
          <div className='flex text-sm md:text-base items-center justify-center m-10'>No emails found</div>
        )}
      </div>
    </div>
  );
};

export default EmailList;
