import React, { Component } from 'react';
import { PadCard } from './PadCard';

export class PadList extends React.Component {
    constructor() {
        super();

        this.state = {
            pads: [1, 2, 3]
        }
    }

    renderPads = () => {
        debugger;
        return this.state.pads.map((pad) => {
            return <PadCard />
        });
    }

    render() {
        return (
            <section>
                <h2>Pads Around the World</h2>
                <div>
                    {this.renderPads()}
                </div>
            </section>
        )
    }
}