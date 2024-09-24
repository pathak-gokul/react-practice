import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="">
        <div className=" h-[300px] overflow-hidden">
          <img
            src={images[active]}
            alt="animal"
            className="h-full w-full object-fit hover:scale-110 transition-all duration-300"
          />
        </div>
        <div className="mt-4 grid grid-cols-4 gap-y-4">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className="h-24 w-24 hover:opacity-50 duration-300 cursor-pointer"
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
