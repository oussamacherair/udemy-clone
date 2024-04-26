import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { CategoriesApi } from '../../Data/categoriesFrontendapi';

function NavbarCats({ style, size, getCategory }) {

  let { data: Cats, isError: CatError, isLoading: CatLoading, error: CatErrormsg } = CategoriesApi();
  if (CatLoading) return <h1>Loading...</h1>;
  if (CatError) return <h1>{`${CatErrormsg.message}`}</h1>;

  


  return (
    <div className='hidden md:block'>
      {size ? (
        <div className='flex justify-center flex-row flex-wrap flex-start'>
          {Cats?.slice(0, size).map((cat, i) => (
            <NavLink className={`${style}`} key={i} to={`Courses/Category/${encodeURIComponent(cat.title)}`}>
              <p onClick={(e) => getCategory(cat.title)}>{cat.title}</p>
            </NavLink>
          ))}
        </div>
      ) : (
        <div className='flex flex-row flex-wrap'>
          {Cats?.map((cat, i) => (
            <NavLink className={`${style}`} key={i} to={`Courses/Category/${encodeURIComponent(cat.title)}`}>
              <p>{cat.title}</p>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavbarCats;