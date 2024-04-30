import React, { useState } from "react";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function DefaultPagination({ updatePage }) {
    const [active, setActive] = useState(1);

    const getItemProps = (index) => ({
        variant: active === index ? "filled" : "text",
        color: "gray",
        onClick: () => (setActive(index), updatePage(index)),
    });

    const next = () => {
        if (active === 10) return;
        setActive(active + 1);
        updatePage(active + 1)
    };

    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
        updatePage(active - 1)
    };

    return (
        <div className="lg:col-span-4">

            <div className=" hidden items-center  py-8 justify-center col-span-4 md:flex">
                <Button
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={prev}
                    disabled={active === 1}
                >
                    <BsArrowLeft size={20} className="h-4 w-4" /> Previous
                </Button>
                <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                        <IconButton key={index} {...getItemProps(index)}>
                            {index}
                        </IconButton>
                    ))}
                </div>
                <Button
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={next}
                    disabled={active === 10}
                >
                    Next <BsArrowRight size={20} className="h-4 w-4" />
                </Button>
            </div>

            <div className="flex gap-8 lg:hidden justify-center items-center py-10">
                <IconButton
                    size="sm"
                    variant="outlined"
                    onClick={prev}
                    disabled={active === 1}
                >
                    <IoIosArrowBack className="h-4 w-4" />
                </IconButton>
                <Typography color="gray" className="font-normal">
                    Page <strong className="text-gray-900">{active}</strong> of{" "}
                    <strong className="text-gray-900">10</strong>
                </Typography>
                <IconButton
                    size="sm"
                    variant="outlined"
                    onClick={next}
                    disabled={active === 10}
                >
                    <IoIosArrowForward className="h-4 w-4" />
                </IconButton>
            </div>


        </div>

    );
}
export default DefaultPagination