import React from 'react'
import './index.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {

    const notify = () => toast("Email Copied!")
    const copyText = () => {
        navigator.clipboard.writeText('kiprop.thedev@gmail.com')
    }

    const clickFun = () => {
        notify()
        copyText()
    }
    
  return (
    <div className='contact'>
        <div className='contact__heading'>
            04. what's next?
        </div>

        <div className='contact__title'>
            <h1>Get In Touch</h1>
        </div>

        <div className='contact__desc'>
            Thank you for taking the time to learn a little bit about me. I am excited about the opportunity to contribute my skills and grow as a software developer, and I look forward to the challenges and opportunities that lie ahead feel free to contact me I'll do my best to get back to you!
        </div>

        <div className='contact__btn'>
            <button onClick={() => clickFun() } >Copy Email</button>
            <ToastContainer 
                position="top-center"
                autoClose={1500}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>

        <div className='contact__icons'>
            <a href='https://github.com/kipropTheDev' target="_blank" rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
            <a href='https://www.linkedin.com/in/mark-kiprop-293285217/' target="_blank" rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
            <a href='https://twitter.com/theDevKip' target="_blank" rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><title>Twitter</title><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
        </div>
    </div>
  )
}

export default Contact