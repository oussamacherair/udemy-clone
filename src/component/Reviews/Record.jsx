import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { MdOutlineOndemandVideo } from "react-icons/md";

function AccordionDisabled({ data }) {
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    
    return (
        <div className="p-5 my-4">
            <div className="bg-[#f7f9fa] border-none ">
                {
                    data?.sort((a, b) => (b.lesson?.sort_order - a?.sort_order))?.map((lesson) => (
                        <Accordion className=""  key={lesson?.lesson?.id} open={open === lesson?.lesson?.id}>
                            <AccordionHeader className="border-t border-[#dfdfdf] text-lg md:text-lg pl-4 md:pl-8 pr-2 font-thin md:font-black" onClick={() => handleOpen(lesson?.lesson?.id)}>{lesson?.lesson?.title}</AccordionHeader>
                            {lesson.lesson_lecture?.map(lecture => (
                                <AccordionBody key={lecture?.id} className='bg-white px-4'>
                                    <div className="flex items-center justify-start text-sm">
                                        <div>
                                            <MdOutlineOndemandVideo className="mr-4" />
                                        </div>

                                        <p className="line-clamp-2 text-[#5624d0] underline"><span className="">{lecture?.title}</span></p>
                                    </div>
                                    <div className='InnerHTMLClasses' dangerouslySetInnerHTML={{ __html: lecture?.description }}></div>
                                </AccordionBody>
                            ))}
                        </Accordion>
                    ))
                }
            </div>



        </div>
    );
}
export default AccordionDisabled