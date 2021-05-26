import React from 'react'
import './Cover.css'
import coverVid from '../../media/coverVid.mp4'

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVid} autoPlay loop muted></video>
            <h1>Luis Natera</h1>
            <p>Ingeniero de Sistemas | Desarrollador de Front-end</p>
        </div>
    )
}

export default Cover
