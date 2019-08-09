import React from 'react';

const locationSection = () => {
    return (
        <section className="section-location" id="location">
            <h2>We're currently only in Ballari</h2>
            <div className="row js--wp-3 js--wp-2">
                <div className="col-xs-12 col-md-4 box">
                    <img src={require('../resources/img/ballari.jpg')} alt="Ballari Fort" />
                </div>
                <div className="col-xs-12 col-md-8 box">
                    <h3>Ballari</h3>
                    <div className="city-feature">
                    <i className="fas fa-user icon-small"></i>
                        Karan
                    </div>
                    <div className="city-feature">
                    <i className="far fa-clock icon-small"></i>
                        Mon - Sun 12AM to 11PM
                    </div>
                    <div className="city-feature">
                    <i className="fas fa-phone icon-small"></i>
                        8867544444
                    </div>
                    <div className="city-feature" style={{overflow: 'hidden'}}>
                        <div style={{float: 'left'}}><i className="fas fa-map-marker-alt icon-small"></i></div>
                        Sudha Cross Circle, Infantry Road, Opp Police Station, Ballari, Karnataka 583104
                    </div>
                </div>
            </div>
        </section>
    );
}

export default locationSection;