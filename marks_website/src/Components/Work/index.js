import React from 'react'
import './index.scss'

import Trix from '../../Assets/trix_shop.PNG'
import EasyBank from '../../Assets/easybank_front.PNG'
import Dashboard from '../../Assets/dashboard.PNG'

function Work() {
  return (
    <div className='work'>
        <div className='work__heading'>
          <h1><span>02. </span>Things I've Built</h1>
          <div className='whiteline'></div>
        </div>

        <div className='work__projects'>
            <div className='proj-1'>

                <div className='img'>
                    <a href='https://trix-shop.vercel.app/'><img src={Trix} alt=""></img></a>
                </div>
                <div className='desc'>
                    <h3 className='title'>Featured Project</h3>
                    <h2>Trix E-commerce Shop</h2>
                    <p>Trix-Shop was built using <span>NEXT.js</span> and intergrated with <span>Sanity CMS</span>, these technologies enabled me to quickly and easily deploy this eccommerce web application.</p>
                    <ul>
                        <li>NEXT.js</li>
                        <li>Sanity CMS</li>
                        <li>SCSS</li>
                    </ul>
                    <div >
                        <div>
                            <a href='https://github.com/kipropTheDev/trix_shop' target='_blank'  rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                        </div>
                        <div>
                            <a href='https://trix-shop.vercel.app/' target='_blank'  rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className='proj-2'>
                <div className='img'>
                    <a href='https://github.com/kipropTheDev/easybank' target='_blank'  rel="noreferrer"><img src={EasyBank} alt='easybank'></img></a>
                </div>
                <div className='desc'>
                    <h2>EasyBank Landing Page</h2>
                    <p>This is a solution to the Easybank landing page challenge on <span><a href='https://www.frontendmentor.io/' target="_blank" rel='noreferrer'>Frontend Mentor</a></span>. Frontend Mentor challenges help you improve your coding skills by building realistic projects. <span><a href='https://90834e96.easybank-3qg.pages.dev/' target='_blank' rel='noreferrer'>Click here to see my solution</a></span>.</p>
                    <ul>
                        <li>React.js</li>
                        <li>SCSS</li>
                    </ul>
                    <div >
                        <div>
                            <a href='https://github.com/kipropTheDev/easybank' target='_blank'  rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                        </div>
                        <div>
                            <a href='https://90834e96.easybank-3qg.pages.dev/' target='_blank'  rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                        </div>

                    </div>
                </div>
            </div>

            <div className='proj-3'>
                <div className='img'>
                    <a href='https://github.com/kipropTheDev/Dashboard-Sidebar' target='_blank'  rel="noreferrer"><img src={Dashboard} alt='dashboard'></img></a>
                </div>
                <div className='desc'>
                    <h2>Analytics Dashboard Design</h2>
                    <p>I designed and developed this modern data analytics dashboard, it includes a clean sidebar menu design as well as an intergrated Light/Dark mode toggle.</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                    <div >
                        <div>
                            <a href='https://github.com/kipropTheDev/Dashboard-Sidebar' target='_blank'  rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                        </div>
                        <div>
                            <a href='https://github.com/kipropTheDev/Dashboard-Sidebar' target='_blank'  rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Work