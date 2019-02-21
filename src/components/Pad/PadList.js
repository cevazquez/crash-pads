import React from 'react';
import { PadCard } from './PadCard';

export class PadList extends React.Component {
    constructor() {
        super();

        this.state = {
            pads: [1, 2, 3]
        }
    }

    renderPads = () => {
        return this.state.pads.map((pad, index) => {
            return <PadCard key={index} />
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