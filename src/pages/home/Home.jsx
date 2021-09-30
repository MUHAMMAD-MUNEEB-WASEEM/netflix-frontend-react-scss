import React from 'react'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import './Home.scss'

function Home() {
    return (
        <div className="home">
            <Navbar/>
            <Featured type="movie"/>
        </div>
    )
}

export default Home
