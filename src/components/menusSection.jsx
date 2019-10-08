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
        ],
    };

    componentWillMount() {
        this.updateImages()
    }

    updateImages() {
        this.setState( { images: 
            [
                {image: img1, description: 'Polas ceil view'}, 
                {image: img2, description: 'Polas top view'}, 
                {image: img3, description: 'Cycling man architecture'},
                {image: img4, description: 'Polas top road view dining'},
                {image: img5, description: 'Colourful cups'},
                {image: img6, description: 'Polas ship themed house'},
                {image: img7, description: 'Lemon tea'},
                {image: img8, description: 'Sizzling brownie'},
                {image: img9, description: 'Dhaba Cafe'},
                {image: img10, description: 'Nirvana'},
                {image: img11, description: 'Taste of Rajwada'},
                {image: img12, description: 'Thancos natural icecream'},
                {image: img13, description: 'U.S. Pizza'},
                {image: img14, description: 'Ship themed room inner view'},
                {image: img15, description: 'Pola view from roof'},
                {image: img16, description: 'U.S. Pizza'},
                {image: img17, description: 'Oreo icecreame'},
                {image: img18, description: 'U.S. Pizza'},
                {image: img19, description: 'Polas seating arrangement'},
                {image: img20, description: 'Product show at Polas'},
                {image: img21, description: 'Ship themed house'},
                {image: img22, description: 'Empty space for parties'},
            ]
         })
    }

    getRandomImage() {
        const arr = this.state.images;
        const randomIndex = Math.floor(Math.random() * arr.length);
        const randomImage = arr.splice(randomIndex, 1);
        return randomImage;
    }

    render() {
        const img1 = this.getRandomImage(), img2 = this.getRandomImage(), img3 = this.getRandomImage(), img4 = this.getRandomImage(), img5 = this.getRandomImage(), 
        img6 = this.getRandomImage(), img7 = this.getRandomImage(), img8 = this.getRandomImage();
        if(this.state.images.length < 8){
            this.updateImages();
        }
        return ( 
            <React.Fragment>
                <section className="section-menus" id="gallery">
                    <ul className="menus-showcase">
                        <li>
                            <figure className="menu-photo">
                                <img src={img1[0].image} alt={img1[0].description} />
                            </figure>
                        </li>
                        <li>
                            <figure className="menu-photo">
                                <img src={img2[0].image} alt={img2[0].description} />
                            </figure>
                        </li>
                        <li>
                            <figure className="menu-photo">
                                <img src={img3[0].image} alt={img3[0].description} />
                            </figure>
                        </li>
                        <li>
                            <figure className="menu-photo">
                                <img src={img4[0].image} alt={img4[0].description} />
                            </figure>
                        </li>
                    </ul>
                    <ul className="menus-showcase">
                        <li>
                            <figure className="menu-photo">
                                <img src={img5[0].image} alt={img5[0].description} />
                            </figure>
                        </li>
                        <li>
                            <figure className="menu-photo">
                                <img src={img6[0].image} alt={img6[0].description} />
                            </figure>
                        </li>
                        <li>
                            <figure className="menu-photo">
                                <img src={img7[0].image} alt={img7[0].description} />
                            </figure>
                        </li>
                        <li>
                            <figure className="menu-photo">
                                <img src={img8[0].image} alt={img8[0].description} />
                            </figure>
                        </li>
                    </ul>
                </section>
            </React.Fragment>
        );
    }
}
 
export default menusSection;