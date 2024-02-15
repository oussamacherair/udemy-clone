import React from 'react'
import Categorie from './Categorie'
import Business from '../assets/business.jpg'
import Design from '../assets/design.jpg'
import Development from '../assets/development.jpg'
import IT from '../assets/it-and-software.jpg'
import Marketing from '../assets/marketing.jpg'
import Music from '../assets/music.jpg'
import Personal from '../assets/personal-development.jpg'
import Photography from '../assets/photography.jpg'
import { NavLink } from 'react-router-dom'
let Cats = ['Business', 'Design', 'Development', 'IT and Software', 'Marketing', 'Music', 'Personal Development', 'Photography']
let CatImages = [Business, Design, Development, IT, Marketing, Music, Personal, Photography]

function Categories() {
    return (
        <div className='my-10 flex flex-col justify-center items-center'>
            <h1 className='text-3xl py-6'>Top categories</h1>
            <div className='grid gap-4 grid-flow-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {Cats.map((cat, i) =>
                (
                    <NavLink to={`courses/category/${cat}`} key={i}>
                        <Categorie key={i} Title={cat} Url={CatImages[i]} />

                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Categories