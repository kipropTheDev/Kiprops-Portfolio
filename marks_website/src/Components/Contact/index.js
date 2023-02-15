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
            I'm currently searching for opportunities so feel free to contact me about any opportunities or collaborations. Whether you have a question or just want to say hi, I'll do my best to get back to you!
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
    </div>
  )
}

export default Contact