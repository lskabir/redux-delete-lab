import React from 'react'
import Band from './Band'

const Bands = props => {
    const bands = props.bands.map(band => {
        return <Band key={band.id} {...band} deleteBand={props.deleteBand} />
    })

    return (
        <ul>
            {bands}
        </ul>
    )
}

export default Bands