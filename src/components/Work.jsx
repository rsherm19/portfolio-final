import React from 'react'
import StackIcon from "tech-stack-icons";

const Work = () => {
    return (
        <>
            <h1>My Work:</h1>
            <div className='work-grid'>
                <div className='projects-flex-container'>
                    <div className='project' id='blogapp'>
                        <div className='project-links'>
                            <a href="https://dada-blog.netlify.app/" target='_blank'>Site</a>
                            <a href="https://github.com/RavshanSean/3d_port" target='_blank'>Repo</a>
                        </div>
                        <p>BlogApp</p>
                    </div>
                    <div className='project' id='more-than-music'>
                        <div className='project-links'>
                            <a href="https://more-than-music-7a11baa48e88.herokuapp.com/" target='_blank'>Site</a>
                            <a href="https://github.com/rsherm19/more-than-music" target='_blank'>Repo</a>
                        </div>
                        <p>More Than Music</p>
                    </div>
                    <div className='project' id='streemer'>
                        <div className='project-links'>
                            <a href="https://streemer-551873ec9fba.herokuapp.com/" target='_blank'>Site</a>
                            <a href="https://github.com/rsherm19/Streemer" target='_blank'>Repo</a>
                        </div>
                        <p>Streemer</p>
                    </div>
                    <div className='project' id='spaceman-baseball'>
                        <div className='project-links'>
                            <a href="https://rsherm19.github.io/spaceman-baseball/" target='_blank'>Site</a>
                            <a href="https://github.com/rsherm19/spaceman-baseball" target='_blank'>Repo</a>
                        </div>
                        <p>Spaceman Baseball</p>
                    </div>
                </div>
                <div className='skills-flex-container'>
                    <StackIcon name="python" className='icon' />
                    <StackIcon name="django" className='icon' />
                    <StackIcon name="postgresql" className='icon' />
                    <StackIcon name="mongodb" className='icon' />
                    <StackIcon name="js" className='icon' />
                    <StackIcon name="reactjs" className='icon' />
                    <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" baseProfile="basic"><path fill="#212121" d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847 c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287 C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z" /><path fill="#212121" d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142 c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913 c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478 C16.798,12.92,22,17.352,22,23v1H4V23.71z" /></svg>
                    <StackIcon name="nodejs" className='icon' />
                    <StackIcon name="html5" className='icon' />
                    <StackIcon name="css3" className='icon' />
                    <StackIcon name="bootstrap5" className='icon' />
                    <StackIcon name="tailwindcss" className='icon' />
                </div>
            </div>
        </>
    )
}

export default Work