import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const Miscellaneous = () => {
    return (
    <div id='miscellaneous' className='w-full px-[12%] py-16  scroll-mt-20'>
        <h2 className='text-center text-6xl'>
            Miscellaneous
        </h2>
        <h4 className='text-center mb-2 text-lg py-4'>Books</h4>
        <InfiniteMovingCards
            items={items}
            direction="right"
            speed="fast"
            className='py-6'
        />
    </div>
    )
}

export default Miscellaneous

const items = [
    {
        title: 'The Fall - Albert',
        url:'https://goodreads.com',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1738704293i/11991.jpg'
    },
    {
        title: 'The Fall - Albert',
        url:'https://goodreads.com',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1738704293i/11991.jpg'
    },
    {
        title: 'The Fall - Albert',
        url:'https://goodreads.com',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1738704293i/11991.jpg'
    },
    {
        title: 'The Fall - Albert',
        url:'https://goodreads.com',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1738704293i/11991.jpg'
    },
]