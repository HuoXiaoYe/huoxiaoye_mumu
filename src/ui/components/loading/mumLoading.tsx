import React from 'react'

const MumLoading: React.FC<{color?:string}> = props => {
    return (
        <div className="mum-loading">
            <div className="mu-petals petal-one"></div>
            <div className="mu-petals petal-two"></div>
            <div className="mu-petals petal-three"></div>
            <div className="mu-petals petal-four"></div>
            <div className="mu-petals petal-five"></div>
            {/* <div className="mu-petals petal-six"></div> */}
        </div>
    )
}

export default MumLoading