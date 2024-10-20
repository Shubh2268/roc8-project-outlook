import React from 'react';
import { EmailProvider } from './context/EmailContext';
import EmailList from './components/EmailList';
import EmailBody from './components/EmailBody';

const App = () => {
  return (
    <>
      <nav className='text-center font-semibold text-2xl md:text-3xl w-full p-4 bg-pro-accent text-[#ffff]'>roc8 Moonshot Outlook</nav>

      <EmailProvider>
        <div className='flex p-5 bg-pro-background'>
          <EmailList />
          <EmailBody />
        </div>
      </EmailProvider>
    </>
  )
}

export default App;
