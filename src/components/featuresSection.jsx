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
                    <i className="fas fa-carrot icon-big"></i>
                    <h3>100% Vegan</h3>
                    <p>
                        We serve 100% pure vegan foods. All our vegetables are fresh, organic and local. Good for your health, and it also tastes better!
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