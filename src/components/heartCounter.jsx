import React from 'react';

const heartCounter = ({ number }) => {

    return(
        <div className="container mt-5 js--section-heartCounter">
            <div className="jumbotron text-center">
                <h1 className="text-dark">Thankyou, for all the <i className="fas fa-heart icon-small text-danger"></i></h1>
                <hr />
                <p><span className="counter mr-1"><b>{number}</b></span> hearts and counting.</p>
                <a className="nb-btn nb-btn-full" href="#opinionForm" role="button">Give us a heart.</a>
            </div>
        </div>
    )

}

export default heartCounter;