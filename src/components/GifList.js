import React from 'react'

const GifList=({ gifs })=> (
    <div style={{ background: 'maroon', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {gifs.map(gif => (
            <div key={gif.id} style={{ margin: '10px', width: '250px' }}>
                <img src={gif.url} alt={gif.title} style={{ width: '100%', height: 'auto' }} />
            </div>
        ))}
    </div>
)

export default GifList