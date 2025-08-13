import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const Miscellaneous = () => {
    return (
    <div id='miscellaneous' className='w-full px-[12%] py-16  scroll-mt-20'>
        <h2 className='text-center text-6xl'>
            Miscellaneous
        </h2>
        <h4 className='text-center mb-2 text-lg py-4'>Some of the books I&apos;ve read recently :)</h4>
        <InfiniteMovingCards
            items={items}
            direction="right"
            speed="slow"
            className='py-6'
        />
    </div>
    )
}

export default Miscellaneous

const items = [
    {
        title: 'The Fall - Albert Camus',
        url:'https://www.goodreads.com/book/show/11991.The_Fall',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1738704293i/11991.jpg'
    },
    {
        title: 'The Gambler - Fyodor Dostoevsky',
        url:'https://www.goodreads.com/book/show/12857.The_Gambler?ref=nav_sb_ss_3_8',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1751435148i/12857.jpg'
    },
    {
        title: "A Country Doctor's Notebook - Mikhail Bulgakov",
        url:'https://www.goodreads.com/book/show/897363.A_Country_Doctor_s_Notebook',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1331655799i/897363.jpg'
    },
    {
        title: 'Poor Folk - Fyodor Dostoevsky',
        url:'https://www.goodreads.com/book/show/67326.Poor_Folk',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348171372i/67326.jpg'
    },
    {
        title: 'The Idiot - Fyodor Dostoevsky',
        url:'https://www.goodreads.com/book/show/12505.The_Idiot',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657539107i/12505.jpg'
    },
    {
        title: 'Crime and Punishment - Fyodor Dostoevsky',
        url:'https://www.goodreads.com/book/show/7144.Crime_and_Punishment',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1382846449i/7144.jpg'
    },
    {
        title: 'The Picture of Dorian Gray - Oscar Wilde',
        url:'https://www.goodreads.com/book/show/5297.The_Picture_of_Dorian_Gray',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546103428i/5297.jpg'
    },
    {
        title: 'White Nights - Fyodor Dostoevsky',
        url:'https://www.goodreads.com/book/show/1772910.White_Nights',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1450699039i/1772910.jpg'
    },
    {
        title: 'Notes from Underground - Fyodor Dostoevsky',
        url:'https://www.goodreads.com/book/show/49455.Notes_from_Underground',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657562670i/49455.jpg'
    },
    {
        title: 'How We Survived Communism and Even Laughed - Slavenka Drakulić',
        url:'https://www.goodreads.com/book/show/278227.How_We_Survived_Communism_and_Even_Laughed',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638268458i/278227.jpg'
    },
    {
        title: 'The Sense of an Ending - Julian Barnes',
        url:'https://www.goodreads.com/book/show/10746542-the-sense-of-an-ending',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1311704453i/10746542.jpg'
    },
    {
        title: 'The Brothers Karamazov - Fyodor Dostoevsky',
        url:'https://www.goodreads.com/book/show/4934.The_Brothers_Karamazov',
        src: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1427728126i/4934.jpg'
    },
]