import React from 'react';

const footerComponent = () => {

    return(
        <footer>
            <div className="row">
                <div className="col-xs-12 col-md-6 offset-sm-6">
                    <ul className="social-links">
                        <li><i className="fab fa-react"></i></li>
                        <li><i className="fab fa-js"></i></li>
                        <li><i className="fab fa-bootstrap"></i></li>
                        <li><i className="fab fa-node-js"></i></li>
                        <li><i className="fab fa-github"></i></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <p className="col-xs-12">
                    This webpage was handcrafted by CSE students, RYMEC &copy; 2019. All rights reserved.
                </p>
            </div>
        </footer>
    )

}

export default footerComponent;