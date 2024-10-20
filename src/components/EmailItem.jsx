import React, { useContext } from 'react';
import { EmailContext } from '../context/EmailContext';

const EmailItem = ({ email }) => {
    const { setSelectedEmail, markAsRead } = useContext(EmailContext);

    const handleClick = () => {
        setSelectedEmail(email);
        if (!email.isRead) {
            markAsRead(email.id);
        }
    };

    return (
        <div className={`py-3 px-5 my-5 rounded-lg border-2 border-pro-border cursor-pointer ${email.isRead ? 'bg-[#fff]' : 'bg-pro-read-background'} hover:border-pro-accent`} onClick={handleClick}>

            <div className='flex'>
                <div>
                    <p className='flex justify-center items-center w-7 md:w-10 h-7 md:h-10 mr-3 p-2 bg-pro-accent text-[white] text-base md:text-xl rounded-full '>{email.from.name.charAt(0).toUpperCase()}</p>
                </div>
                <div className='flex flex-col text-pro-text'>
                    <p className='text-sm md:text-base'>From: <span className='font-medium'>{email.from.name}  &lt;{email.from.email}&gt;</span></p>
                    <p className='py-1 text-sm md:text-base'>Subject <span className='font-medium'>{email.subject}</span></p>
                    <p className='text-sm py-1'>{email.short_description}</p>
                    <div className='flex gap-3 font-medium py-1'>
                        <small>{new Date(email.date).toLocaleDateString()}</small>
                        {email.isFavorite && <small className='text-pro-accent font-semibold ml-20 '>Favorite</small>}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EmailItem;
