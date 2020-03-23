import React, { Component } from 'react'
import './MovieBundle.css'
import InfoBox from '../InfoBox/InfoBox'

class MovieBundle extends Component {

    state = {
        isHovering: false,
    }

    handleMouseHover = () => {
        this.setState(this.toggleHoverState);
      }
    
    toggleHoverState = () => {
        return {
          isHovering: !this.state.isHovering,
        };
    }

    getStyle = () => {
        var background = this.props.thumbnail;
        return {
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden',
        }
    }

    render() {
        return (
            <div className="movie-bundle" style={this.getStyle()}
            onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
            {
                this.state.isHovering &&
                <InfoBox director={this.props.director}
                         title={this.props.title}
                         category={this.props.category}
                         movieID={this.props.movieID}
                         year={this.props.year}
                         />
            }
            </div>
        )
    }
}


export default MovieBundle;
