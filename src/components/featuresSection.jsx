import React from 'react';

const featuresSection = () => {
    return (
        <section className="section-features js--section-features container" id="features">
            <h2>Ambient Lounge @ Bellary</h2>
            <p className="long-copy">
                Come with your family or friends &amp; we make sure you have the best time with us.
            </p>

            <div className="row js--wp-1">
                <div className="col-md-3 box">
                    <i className="fas fa-birthday-cake icon-big"></i>
                    <h3>Party</h3>
                    <p>
                        How about celebrating party with us? Yes, we host social &amp; birthday parties too.
                    </p>
                </div>
                <div className="col-md-3 box">
                    <i className="fas fa-users icon-big"></i>
                    <h3>Group Friendly</h3>
                    <p>
                        Reuniting with your friends after a long time? Private birthday party? Family dine out? We got you covered. 'Cause we have got a special room for you.
                    </p>
                </div>
                <div className="col-md-3 box">
                    <i className="fas fa-drumstick-bite icon-big"></i>
                    <h3>Non - Vegan</h3>
                    <p>
                        Yea! We are not pure veg anymore. Lately we opened a seperate A/C non-veg section too.
                    </p>
                </div>
                <div className="col-md-3 box">
                <i className="fas fa-cocktail icon-big"></i>
                    <h3>Relax &amp; Refresh</h3>
                    <p>
                        We belive that food &amp; music in combination is enough to rejoice. We have got the best of both.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default featuresSection;