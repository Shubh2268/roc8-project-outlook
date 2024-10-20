import React, { useContext, useEffect, useState } from 'react';
import { EmailContext } from '../context/EmailContext';
import FavoriteButton from './FavoriteButton';

const EmailBody = () => {
  const { selectedEmail } = useContext(EmailContext);

  const [emailBody, setEmailBody] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmailBody = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://flipkart-email-mock.vercel.app/?id=${selectedEmail.id}`);
        const data = await response.json();

        if (data && data.body) {
          setEmailBody(data.body);
        } else {
          throw new Error('Email body not found');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedEmail) {
      fetchEmailBody();
    }
  }, [selectedEmail]);

  if (!selectedEmail) {
    return null;
  }

  if (loading) {
    return <div>Loading email body...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={`m-5 p-4 md:p-6 border-2 border-pro-border text-pro-text rounded-lg bg-[#fff] ${selectedEmail ? 'w-full md:w-3/5' : 'w-0'}`}>
      <div className='flex flex-col md:flex-row md:justify-between items-center'>
        <div className='flex items-center'>
          <p className='flex justify-center items-center my-1 md:my-0 w-7 md:w-10 h-7 md:h-10 mr-3 p-2 bg-pro-accent text-[white] text-base md:text-xl rounded-full '>
            {selectedEmail.from.name.charAt(0).toUpperCase()}
          </p>
          <h2 className='text-lg md:text-xl font-semibold text-pro-text'>{selectedEmail.subject}</h2>
        </div>
        <FavoriteButton email={selectedEmail} />
      </div>

      <div className='flex px-10 py-2 gap-3 font-medium my-1'>
        <small>{new Date(selectedEmail.date).toLocaleDateString()}</small>
      </div>

      <div>
        {emailBody ?
          <div className='text-sm px-5 md:px-10 my-8'>{emailBody.replace(/<\/?[^>]+(>|$)/g, '')}</div>
          : <div>No email content available</div>}
      </div>
    </div>
  );
};

export default EmailBody;
