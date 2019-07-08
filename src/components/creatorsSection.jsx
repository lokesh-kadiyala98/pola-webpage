import React, { Component } from 'react';

class creatorsSection extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="developers">
                <h2>Meet the creators</h2>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="developer-box js--wp-pulse developer-info">
                            <div className="developer-img">
                                <img src={require('../resources/img/Lokesh K.jpg')} alt="Developer" />
                                <h3>Lokesh K <span>(Lead)</span></h3>
                            </div>
                            <div>
                            <p>Will code from pizzas &amp; coke. Not sure how many he bartered on this project.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="developer-box developer-info">
                            <div className="developer-img">
                                <img src={require('../resources/img/Kiran C.jpg')} alt="Developer" />
                                <h3>Kiran C</h3>
                            </div>
                            <div>
                            <p>Have you heard of dudes who never attend lectures yet, ace the exams? This is one of 'em.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="developer-box developer-info">
                            <div className="developer-img">
                                <img src={require('../resources/img/Rudresh N.jpg')} alt="Developer" />
                                <h3>Rudresh N</h3>
                            </div>
                            <div>
                            <p>If he looks any geeky to you that's only because of his spects but nothing else.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default creatorsSection;