import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        name:['React','React','Github'],
        items:['Expensify','Social Media for developers','Github Repository'],
        desc:[
            'CRUD Application for your expenses. You can list down all your expenses. Back end - Firebase',

            'CRUD Application like facebook. You can register, login and delete your account. Also you can create comments or delete them and can view profiles registered user. Back end - MongoDB Node(express)',

            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        ],
        linkto: [
          'https://fierce-thicket-60455.herokuapp.com/',
          'https://vivixx-dev.herokuapp.com/profile/darryl',
          'https://github.com/darrylmangibin'
        ],
        delay:[500,0,500]

    }

    showBoxes = () => (
        this.state.name.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>{this.state.name[i]}</span>
                            <span>{this.state.items[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Visit URL"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
       
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Portfolio</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Pricing;