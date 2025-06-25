import React, { Component } from 'react';

class Info extends Component {
    render() {
        const p = this.props;
        const { stations, refMode } = p;

        return (
            <div className='Info'>
                <h1>SatTrack</h1>
                {stations && stations.length > 0 && (<p>Total Objects: {stations.length}</p>)}
                {refMode == 1 ? <p>ECF Mode</p> : <p>ECI Mode</p>}
            </div>
        )
    }
}

export default Info;
