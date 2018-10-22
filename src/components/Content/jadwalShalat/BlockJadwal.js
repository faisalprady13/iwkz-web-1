import React, {Component} from "react";

class BlockJadwal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHover: false
    };
  }

  toggleHover = () => {
    this.setState({
      isHover: !this.state.isHover
    });
  };

  render() {
    let hoverStyle = {transform: (this.state.isHover) ? "scale(1.05)" : "scale(1)"};

    return (
      <div
        className="block-jadwal"
        style={hoverStyle}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <div className="column jadwal">
          <div className="level is-mobile">
            <div className="level-left">
              <p className="is-uppercase">{this.props.prayName}</p>
            </div>
            <div className="level-right">
              <p className="has-text-weight-bold is-size-4 is-size-5-mobile">
                {this.props.prayTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlockJadwal;