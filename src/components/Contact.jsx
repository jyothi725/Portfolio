import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )
        .then(
            () => {
                alert("Email Sent successfully");
                formRef.current.reset();
                setIsSending(false);
            },
            (error) => {
                alert("Failed to send email");
                console.error(error);
                setIsSending(false);
            }
        )
        
    }


  return (
    <div 
        id='contact' 
        className='bgimg bg-background text-text w-full flex flex-col items-center justify-center p-3 md:p-8 lg:p-10'
    >
        {/* Header */}
        <div 
            className='flex flex-col items-center justify-center gap-3 lg:gap-5 pt-5 lg:pt-10'
        >
            <h1 className='text-3xl md:text-4xl lg:text-5xl text-primary font-bold'>Get In Touch</h1>
            <div className='w-20 h-0.5 md:h-1 lg:h-1.5 rounded-full bg-text'/>
        </div>
        {/* Contact Info */}
        <div className='px-2 lg:px-4 pt-8 w-full md:w-2xl'>
            <form 
                action="submit"
                className='space-y-2 md:space-y-4'
                ref={formRef}
                onSubmit={sendEmail}
            >
                <div>
                    <input 
                        name='from_name'
                        type='text'
                        placeholder='Your Name'
                        required
                        className='w-full text-sm md:text-md px-2 md:px-4 py-3 border-2 border-text/80 placeholder:text-text/80 font-medium rounded-xl transition-all duration-300 focus:outline-none focus:border-blue-400'
                    />
                </div>
                <div>
                    <input 
                        name='from_email'
                        type='email'
                        placeholder='Email'
                        required
                        className='w-full text-sm md:text-md px-2 md:px-4 py-3 border-2 border-text/80 placeholder:text-text/80 font-medium rounded-xl transition-all duration-300 focus:outline-none focus:border-blue-400'
                    />
                </div>
                <div>
                    <input 
                        name='subject'
                        type='text'
                        placeholder='Subject'
                        required
                        className='w-full text-sm md:text-md px-2 md:px-4 py-3 border-2 border-text/80 placeholder:text-text/80 font-medium rounded-xl transition-all duration-300 focus:outline-none focus:border-blue-400'
                    />
                </div>
                <div>
                    <textarea 
                        name='message'
                        type='text'
                        placeholder='Message'
                        rows={5}
                        required
                        className='w-full text-sm md:text-md px-2 md:px-4 py-3 border-2 border-text/80 placeholder:text-text/80 font-medium rounded-xl transition-all duration-300 focus:outline-none focus:border-blue-400'
                    />
                </div>
                <button 
                    type="submit" disabled={isSending}
                    className='w-full text-sm md:text-md px-2 md:px-4 py-3 bg-primary/50 text-text font-bold rounded-xl transition-all duration-300'
                >{isSending ? "Sending..." : "Send Message"}</button>
            </form>
        </div>  
    </div>
  )
}

export default Contact
