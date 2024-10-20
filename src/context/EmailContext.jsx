import React, { createContext, useEffect, useState } from 'react';

// Create Context
export const EmailContext = createContext();

// Provider Component
export const EmailProvider = ({ children }) => {

  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedEmail, setSelectedEmail] = useState(null);
  const [filter, setFilter] = useState('all');


  useEffect(() => {
    const fetchEmails = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://flipkart-email-mock.vercel.app/?page=1');
        const data = await response.json();

        if (data && data.list) {
          setEmails(data.list);
        } else {
          throw new Error('API response does not contain "list"');
        }
      } catch (error) {
        console.error('Error fetching emails:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);


  // Toggle favorite status
  const toggleFavorite = (id) => {
    setEmails((prevEmails) =>
      prevEmails.map((email) =>
        email.id === id ? { ...email, isFavorite: !email.isFavorite } : email
      )
    );
  };

  // Mark email as read
  const markAsRead = (id) => {
    setEmails((prevEmails) =>
      prevEmails.map((email) =>
        email.id === id ? { ...email, isRead: true } : email
      )
    );
  };

  return (
    <EmailContext.Provider
      value={{
        emails,
        loading,
        error,
        setEmails,
        selectedEmail,
        setSelectedEmail,
        toggleFavorite,
        markAsRead,
        filter,
        setFilter,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};
