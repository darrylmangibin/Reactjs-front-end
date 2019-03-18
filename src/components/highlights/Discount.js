import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends React.Component {

  state = {
    discountStart: 0,
    discountEnd: 30
  }

  porcentage = () => {
    if(this.state.discountStart < this.state.discountEnd) {
      this.setState({ discountStart: this.state.discountStart + 1 })
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage()
    }, 30);
  }

  render() {
    return(
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
            onReveal={() => {
              this.porcentage()
            }}
          >
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>Off</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 30th of OCTOBER</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptas aut vel iure nam provident pariatur eos!Non, incidunt!Excepturi ea ipsum ad et, nulla impedit id numquam!Commodi, aliquid.Amet!</p>
              <div>
                button
              </div>
            </div>
          </Slide>
        </div>
      </div>
    )
  }
}

export default Discount;