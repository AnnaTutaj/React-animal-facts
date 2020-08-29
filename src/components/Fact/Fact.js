import React, { Component } from 'react'
import './fact.scss';

export default class Fact extends Component {
    toggleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        });
    };

    state = {
        showInfo: false
    }


    render() {
        const { id, name, img, scientific_name, likes, info } = this.props.fact;
        const { like } = this.props;

        return (
            <article className="fact">
                <div className="img-container">
                    <img src={img} alt="animal"/>
                </div>
                <div className="fact-info">
                    <p>
                        <strong>Common name: </strong><span>{name}</span>
                    </p>
                    <p>
                        <strong>Scientific name: </strong><span>{scientific_name}</span>
                    </p>
                    <hr />
                    <p>
                        <strong className="block cur_p mb10" onClick={this.toggleInfo}>
                            <i className={`fas w20 ${this.state.showInfo ? "fa-caret-down" : "fa-caret-right"}`} />
                            Info
                        </strong>

                        {this.state.showInfo && <div>{info}</div>}
                    </p>
                </div>
                <div className="factLikes">
                    <span className="heart-btn" onClick={() => like(id)}>
                        <i className="fas fa-heart" />
                    </span>
                    {likes}
                </div>
            </article>
        )
    }
}
