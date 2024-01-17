import React from 'react'
import { CategoriesApi } from '../../api/CategoriesApi';
import { NavLink} from 'react-router-dom';

function NavbarCats({ style, size }) {
    let { data: Cats, isError, isLoading, error } = CategoriesApi()
    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>{error}</h1>

    return (
        <div className={size?'flex flex-row flex-wrap justify-center':'flex flex-row flex-wrap'}>
            {Cats.slice(0, size).map(cat =>
            (
                <NavLink to={cat.url} >
                    <p className={style}>{cat.title}</p>
                </NavLink>

            )

            )}
        </div>
    )
}

export default NavbarCats