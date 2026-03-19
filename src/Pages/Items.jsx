import React from 'react'

const Items = () => {

    const item = [
        {
            img: './img1.jpg',
            name: 'Cloud Nine Print',
            Price: 'Rs. 4,900'
        },
        {
            img: './img7.jpg',
            name: 'Cloud Nine Print',
            Price: 'Rs. 4,900'
        },
        {
            img: './img3.jpg',
            name: 'Cloud Nine Print',
            Price: 'Rs. 4,900'
        },
        {
            img: './img4.jpg',
            name: 'Cloud Nine Print',
            Price: 'Rs. 4,900'
        },
        {
            img: './img2.jpg',
            name: 'Cloud Nine Print',
            Price: 'Rs. 4,900'
        },
        {
            img: './img5.jpg',
            name: 'Cloud Nine Print',
            Price: 'Rs. 4,900'
        },
        {
            img: './img6.jpg',
            name: 'Cloud Nine Print',
            Price: 'Rs. 4,900'
        }
    ]

    return (
        <div className='flex flex-col gap-10 md:flex-row flex-wrap justify-center'>
            {item.map((src, index) => (
                <div className='flex flex-col items-center'>
                    <img className='h-108 w-172 md:h-120 md:w-100' src={src.img} alt="" />
                    <h3 className='font-bold text-xl mt-3!'>{src.name}</h3>
                    <h3 className='-mt-0.5!'>{src.Price}</h3>
                </div>
            ))}
        </div>
    )
}

export default Items
