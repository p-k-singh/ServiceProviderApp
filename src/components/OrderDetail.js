import React from 'react'

const Home = (props) => {
    const { match } = props
    return (
        <div>
            <h1>New Order: {match.params.id} Coming Soon</h1> 
        </div>
    )
}

export default Home
