import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class modalComponent extends Component {

    state = {
        restaurants: {
            restaurant1: { name: 'Mom\'s Tawa Magic', items: {'Idli': 30, 'Idli Burji': 60, 'Plain Dosa': 40, 'Masala Dosa': 50, 'Set Dosa': 50, 'Utthapam': 60, 'Onion Dosa': 60}},
            restaurant2: { name: 'US Pizza', items: {'Pasta': 150, 'Pizza': 200, 'Coke': 40}},
            restaurant3: { name: 'Dhaba Cafe', items: {'Special Bhel': 50, 'Nachos Overload': 150, 'Corn Samosa': 45, 'Italian Pav Bhaji': 120, 'Potato Twister': 50}},
            restaurant4: { name: 'Niravaan', items: {'Pasta': 150, 'Pizza': 200, 'Coke': 40}},
            restaurant5: { name: 'Thanco\'s Naturals', items: {'Pasta': 150, 'Pizza': 200, 'Coke': 40}},
            restaurant6: { name: 'Cake Walk', items: {'Pasta': 150, 'Pizza': 200, 'Coke': 40}},
            restaurant7: { name: 'Dhaba Cafe', items: {'Pasta': 150, 'Pizza': 200, 'Coke': 40}},
            restaurant8: { name: 'Dhaba Cafe', items: {'Pasta': 150, 'Pizza': 200, 'Coke': 40}},
        },
    };

    render() {
        const name  = this.state.restaurants[this.props.name].name;
        //const restaurantMenuData = this.state.restaurants[this.props.name].items; 
        return (
            <Modal {...this.props} animation={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter"><h2>{name}</h2></Modal.Title>
                    <div className="tag-items"></div>
                </Modal.Header>
                <Modal.Body>
                    {/* <Table hover>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </Table> */}
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default modalComponent;