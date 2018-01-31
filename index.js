import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Grab image in turn and render
class SlideImage extends React.Component
{
  render()
  {
    var images = Array(3);
    images[0] = "https://upload.wikimedia.org/wikipedia/commons/d/de/Bullfinch_male.jpg";
    images[1] = "https://upload.wikimedia.org/wikipedia/commons/a/a7/Pyrrhula_pyrrhula_female_2.jpg";
    images[2] = "https://fthmb.tqn.com/HCi13a3w_O2a6gsLijdXpanjQfk=/960x0/filters:no_upscale()/java-finch-145094868-resized-58ad91225f9b58a3c97a5bfa.jpg";

    const current = this.props.current;
    return (
      <div className="slideImage">
        <img src={images[current]} width="50%" height="50%" onClick={this.props.onClick}/>
      </div>
    );
  } // end of render()
} // end slideImage

class Slider extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      numImage: 3,
      next: 0,
    }; // end of state
  } // end of constructor

  handleClick()
  {
    const current = this.state.next;
    this.setState({next: (current + 1)%3 });
  } // end of handleClick()

  render()
  {
    const next = this.state.next;
    return <SlideImage current={next} onClick={() => this.handleClick()} />;
  } // end of render()
} // end of Slider

ReactDOM.render(<Slider />, document.getElementById('root'));

/*
  1. Hold the images in an array. Set state to the current image index.
  2. Pass the clickHandle function to the slideImage component, along with the image index info.
  3. slideImage component rendors current image.
*/
