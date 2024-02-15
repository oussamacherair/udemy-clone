import React from 'react'
import {
    Breadcrumbs, Menu,
    MenuHandler,
    Button,
    MenuList,
    MenuItem,
} from "@material-tailwind/react"
import { SubCatgoriesAPi } from '../../api/CategoriesApi'
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { TextBoxLoading } from './CoursesLoaders';

function categoriesNavbar({ mainTitle, }) {
    let Sublist
    const { data: SubCategories, isLoading, isError, error } = SubCatgoriesAPi()
    if (isLoading) {
        return <div className=' flex justify-between items-center'>
            <TextBoxLoading />
            <TextBoxLoading />
            <TextBoxLoading />
            <TextBoxLoading />
            <TextBoxLoading />
            <TextBoxLoading />
        </div>
    }
    if (isError) return <h1>{JSON.stringify(error.message)}</h1>

    SubCategories.map(({ sd_tag, sublist }) => {
        if (mainTitle === sd_tag.title) return Sublist = sublist.items
    })
    return (
        <div className='flex justify-between px-4'>
            <Breadcrumbs className='bg-white text-2xl' separator="">
                <Link className='text-sm md:text-lg' to={`/Courses/Category/${mainTitle}`}>{mainTitle}</Link>
                {
                    Sublist?.slice(0, 5)?.map(({ id, sd_tag }) =>
                    (
                        <Link className='text-sm md:text-lg' key={id} to={`/Courses/Category/${mainTitle}/${sd_tag?.title}`}>{sd_tag?.title}</Link>
                    ))

                }
            </Breadcrumbs>
            <Menu>
                <MenuHandler>
                    <Button className='text-xl text-black shadow-none bg-white transition-none hover:shadow-none'><BsThreeDotsVertical /></Button>
                </MenuHandler>
                <MenuList className="max-h-92 text-black">
                    {
                        Sublist?.slice(5, Sublist.length)?.map(({ id, sd_tag }) =>
                        (
                            <MenuItem>
                                <Link className='text-sm md:text-lg' key={id} to={`/Courses/Category/${mainTitle}/${sd_tag?.title}`}>{sd_tag?.title}</Link>
                            </MenuItem>
                        ))
                    }
                </MenuList>
            </Menu>

        </div>


    )
}

export default categoriesNavbar