import React from 'react'
import Items from '../Items'

const Recent = () => {
    return (
        <div className='w-screen p-5! lg:p-15! my-8! lg:my-16! overflow-hidden'>
            <h1 className='text-[5rem]! lg:text-[25rem]! leading-20! lg:leading-78!'>Recent<br />View</h1>
            <Items />
        </div>
    )
}

export default Recent
