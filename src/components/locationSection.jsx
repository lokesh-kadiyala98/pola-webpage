import React from 'react';

const locationSection = () => {
    return (
        <section className="section-location" id="location">
            <h2>We're currently only in Ballari</h2>
            <div className="row js--wp-3 js--wp-2">
                <div className="col-xs-12 col-md-4 box">
                    <img src={require('../resources/img/ballari.jpg')} alt="Ballari" />
                </div>
                <div className="col-xs-12 col-md-8 box">
                    <h3>Ballari</h3>
                    <div className="city-feature">
                    <i className="fas fa-user icon-small"></i>
                        Karan
                    </div>
                    <div className="city-feature">
                    <i className="far fa-clock icon-small"></i>
                        Mon - Thurs: 12AM to 11PM
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
            {/* <div className="row">
                <div className="col-xs-12">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe width="899" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=pola's%20harbour&t=&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            <a href="https://www.vpnchief.com">vpnchief.com</a>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    );
}

export default locationSection;