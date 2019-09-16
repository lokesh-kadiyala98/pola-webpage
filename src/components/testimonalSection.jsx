import React, { Component } from 'react';

class testimonalSection extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="section-testimonials" id="testimonials">
                <h2>Look what our customers have got to say</h2>
                <div className="row justify-content-md-center">
                    <div className="col-xs-12 col-sm-4">
                        <blockquote>
                            Pola's is just awesome! First time in Pola's me and my friends strolled by just to take a few pictures and have some fun. Now that I got used to it, it's become our hangout spot.
                            <cite><img src={require('../resources/img/customer-1.jpg')} alt="Customer 1" />Riyaz</cite>
                        </blockquote>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <blockquote>
                            Inexpensive, healthy and great-tasting food. We have lots of restaurants here at Infantry Road, Ballari. But, no one comes even close to Pola's. Me and my family are so in love!
                            <cite><img src={require('../resources/img/customer-2.jpg')} alt="Customer 2" />Arvind C</cite>
                        </blockquote>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <blockquote>
                            My friends and I love food at Pola's. We stay at Gandhi Nagar and Pola's is at another side of Ballari. So we end up ordering food. The way they pack the food is just so aesthetic.
                            <cite><img src={require('../resources/img/customer-3.jpg')} alt="Customer 3" />Gagana Bhari</cite>
                        </blockquote>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default testimonalSection;