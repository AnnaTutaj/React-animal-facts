import React, { Component } from 'react'
import './factList.scss';
import Fact from '../Fact'
import { factData } from '../../factData';

export default class FactList extends Component {
    state = {
        facts: factData
    }

    like = id => {
        const index = this.state.facts.findIndex(fact => fact.id === id );
        let factsCopy = [...this.state.facts];
        factsCopy[index] = {...factsCopy[index], likes: factsCopy[index].likes + 1};
        this.setState({
            facts: factsCopy
        } );
    };

    render() {
        const { facts } = this.state;

        return (
            <section className="factList">
                {
                    facts.map(fact => (<Fact key={fact.id} fact={fact} like={this.like} />))
                }

            </section>
        )
    }
}
