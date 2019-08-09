import React, { Component } from 'react';
import img1 from '../resources/img/1.jpg';
import img2 from '../resources/img/2.jpg';
import img3 from '../resources/img/3.jpg';
import img4 from '../resources/img/4.jpg';
import img5 from '../resources/img/5.jpg';
import img6 from '../resources/img/6.jpg';
import img7 from '../resources/img/7.jpg';
import img8 from '../resources/img/8.jpg';
import img9 from '../resources/img/9.jpg';
import img10 from '../resources/img/10.jpg';
import img11 from '../resources/img/11.jpg';
import img12 from '../resources/img/12.jpg';
import img13 from '../resources/img/13.jpg';
import img14 from '../resources/img/14.jpg';
import img15 from '../resources/img/15.jpg';
import img16 from '../resources/img/16.jpg';
import img17 from '../resources/img/17.jpg';
import img18 from '../resources/img/18.jpg';
import img19 from '../resources/img/19.jpg';
import img20 from '../resources/img/20.jpg';
import img21 from '../resources/img/21.jpg';
import img22 from '../resources/img/22.jpg';

class menusSection extends Component {
    state = {
        images: [
            img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22,
        ],
        //the code commented below is to display modals is no longer necessary
        // restaurants: {
        //     restaurant1: { showModal: false },
        //     restaurant2: { showModal: false },
        //     restaurant3: { showModal: false },
        //     restaurant4: { showModal: false },
        //     restaurant5: { showModal: false },
        //     restaurant6: { showModal: false },
        //     restaurant7: { showModal: false },
        //     restaurant8: { showModal: false },
        // },

    };

    // handleOpen = (restaurant) => {
    //     const restaurants = this.state.restaurants;
    //     restaurants[restaurant].showModal = true;
    //     this.setState({ restaurants });
    // };

    // handleClose = (restaurant) => {
    //     const restaurants = this.state.restaurants;
    //     restaurants[restaurant].showModal = false;
    //     this.setState({ restaurants });
    // };

    getRandomImage() {
        const arr = this.state.images;
        const ri = Math.floor(Math.random() * arr.length);
        const rs = arr.splice(ri, 1);
        return rs;
    }

    render() {
        const img1 = this.getRandomImage(), img2 = this.getRandomImage(), img3 = this.getRandomImage(), img4 = this.getRandomImage(), img5 = this.getRandomImage(), 
        img6 = this.getRandomImage(), img7 = this.getRandomImage(), img8 = this.getRandomImage();

        //<ModalComponent show={this.state.restaurants.restaurant8.showModal} onHide={() => this.handleClose('restaurant8')} name="restaurant8" />
        //onClick={() => this.handleOpen('restaurant8')} (in the image tag)
        //data-toggle="modal" data-target="#restaurantMenuModal" (in the li tag)

        return ( 
            <React.Fragment>
                <section className="section-menus" id="gallery">
                    <ul className="menus-showcase">
                        <li>
                            <figure className="menu-photo">
                                <img src={img1} alt="Pola seating arrangement" />
                            </figure>
                        </li>
                        <li>
                            <figure className="menu-photo">
                                <img src={img2} alt="pola seating arrangement 2" />
                            </figure>
                        </li>
                        <li>
                            <figure className="menu-photo">
                                <img src={img3} alt="Modern wall architecture in Pola" />
                            </figure>
                        </li>
                        <li>
                            <figure className="menu-photo">
                                <img src={img4} alt="Pola night view" />
                            </figure>
                        </li>
                    </ul>
                    <ul className="menus-showcase">
                        <li>
                            <figure className="menu-photo">
                                <img src={img5} alt="Colourful cups" />
                            </figure>
                        </li>
                        <li>
                            <figure className="menu-photo">
                                <img src={img6} alt="Ship model in Pola" />
                            </figure>
                        </li>
                        <li>
                            <figure className="menu-photo">
                                <img src={img7} alt="Lemon tea" />
                            </figure>
                        </li>
                        <li>
                            <figure className="menu-photo">
                                <img src={img8} alt="Granola with cherries and strawberries" />
                            </figure>
                        </li>
                    </ul>
                </section>
            </React.Fragment>
        );
    }
}
 
export default menusSection;