import React, { useState } from 'react'
import {
    Drawer,
    Typography,
    IconButton,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { CategoriesApi, SubCatgoriesAPi } from '../../../Data/categoriesFrontendapi';
import { NavLink } from 'react-router-dom';


function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}


function DrawerBody({ drawerOpen, close }) {
    let { data: Cats, isError: CatError, isLoading: CatLoading, error: CatErrormsg } = CategoriesApi();
    let { data: SubCat, isError: SubCatError, isLoading: SubCatLoading, error: SubCatErrormsg } = SubCatgoriesAPi();
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    if (CatLoading && SubCatLoading) return <h1>Loading...</h1>;
    if (CatError && SubCatError) return <h1>{`${CatErrormsg.message}/ ${SubCatErrormsg.message}`}</h1>;
    const AllCategories = SubCat.map(({ id, sd_tag, sublist }) => {
        return {
            id,
            title: sd_tag.title,
            sublist: sublist.items.map(el => [el.id, el.sd_tag.title])
        }
    })
    return (

        <div>
            <Drawer open={drawerOpen} onClose={close} className="p-4 ">
                <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                        Categories
                  </Typography>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={close}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>



                </div>
                <div className='flex flex-col'>
                    {AllCategories.map(({ id, sublist,title},i) => (
                        <Accordion key={id} open={open === i} icon={<Icon id={i} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(i)}>{title}</AccordionHeader>
                            {sublist.map(sub => (
                                <AccordionBody key={sub[0]} className='hover:bg-gray-300 cursor-pointer'>
                                <NavLink to={`Courses/Category/${title}/${sub[1]}`}>
                                    {sub[1]}
                                </NavLink>
                                   
                                </AccordionBody>
                             ) )}
                        </Accordion>

                    ))}
                    

                </div>
            </Drawer>
        </div>
    )
}

export default DrawerBody
