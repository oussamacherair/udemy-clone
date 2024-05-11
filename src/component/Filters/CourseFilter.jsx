import React, { useState } from "react";
import DurationFilter from "./Duration";
import PriceFilter from "./Price";
import CategoryFilter from "./SubCategoriesFilter";
import LevelFilter from "./Level";
import LanguageFilter from "./languageFilter";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Button,
  Typography,
  IconButton
} from "@material-tailwind/react";
import { IoIosArrowUp } from "react-icons/io";
import { SubCatgoriesAPi } from "../../../Data/categoriesFrontendapi";

function CourseFilter({
  duration,
  price,
  subCategory,
  level,
  filterprops,
  language
}) {
  // subcategory api
  const {
    data: subCats,
    isLoading: LoadingCats,
    isError: ErrorCats,
    error: ErrorCatsMsg
  } = SubCatgoriesAPi();
  const updatedSubCategoriesList = subCats?.flatMap(({ sublist }) =>
    sublist.items.map(({ id, sd_tag }) => ({ id, title: sd_tag.title }))
  );

  const [open, setOpen] = useState(filterprops.id);
  const [Draweropen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const handleOpen = value => {
    setOpen(open === value ? 0 : value);
    filterprops.id = value;
  };

  return (
    <div className="p-4">
      <div className="relative hidden lg:block ">
        <Accordion
          open={open === 1}
          icon={
            <IoIosArrowUp
              className={open === 1 ? " rotate-180" : " rotate-0"}
              id={1}
              open={open === 1}
            />
          }
        >
          <AccordionHeader
            className="text-lg font-semibold mb-2"
            onClick={() => handleOpen(1)}
          >
            Duration
          </AccordionHeader>
          <AccordionBody>
            <DurationFilter filterData={filterprops} duration={duration} />
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 2}
          icon={
            <IoIosArrowUp
              className={open === 2 ? " rotate-180" : " rotate-0"}
              id={2}
              open={open === 2}
            />
          }
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="text-lg font-semibold mb-2"
          >
            Price
          </AccordionHeader>
          <AccordionBody>
            <PriceFilter price={price} />
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 3}
          icon={
            <IoIosArrowUp
              className={open === 3 ? " rotate-180" : " rotate-0"}
              id={3}
              open={open === 3}
            />
          }
        >
          <AccordionHeader onClick={() => handleOpen(3)}>
            SubCategories
          </AccordionHeader>
          <AccordionBody>
            <CategoryFilter
              subCategory={subCategory}
              categories={updatedSubCategoriesList}
            />
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 4}
          icon={
            <IoIosArrowUp
              className={open === 4 ? " rotate-180" : " rotate-0"}
              id={4}
              open={open === 4}
            />
          }
        >
          <AccordionHeader onClick={() => handleOpen(4)}>Level</AccordionHeader>
          <AccordionBody>
            <LevelFilter level={level} />
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 5}
          icon={
            <IoIosArrowUp
              className={open === 5 ? " rotate-180" : " rotate-0"}
              id={5}
              open={open === 5}
            />
          }
        >
          <AccordionHeader onClick={() => handleOpen(5)}>
            Language
          </AccordionHeader>
          <AccordionBody>
            <LanguageFilter language={language} />
          </AccordionBody>
        </Accordion>
      </div>

      <div className='block lg:hidden'>
        <div>
          <Button onClick={openDrawer} className='rounded-none bg-purple-600 -ml-4 text-white'>Filter Courses</Button>
          <Drawer open={Draweropen} onClose={closeDrawer} className="p-4">
          <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Filter
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
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
            <div className="mb-6  items-center justify-between">
            <Accordion
          open={open === 1}
          icon={
            <IoIosArrowUp
              className={open === 1 ? " rotate-180" : " rotate-0"}
              id={1}
              open={open === 1}
            />
          }
        >
          <AccordionHeader
            className="text-lg font-semibold mb-2"
            onClick={() => handleOpen(1)}
          >
            Duration
          </AccordionHeader>
          <AccordionBody>
            <DurationFilter filterData={filterprops} duration={duration} />
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 2}
          icon={
            <IoIosArrowUp
              className={open === 2 ? " rotate-180" : " rotate-0"}
              id={2}
              open={open === 2}
            />
          }
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="text-lg font-semibold mb-2"
          >
            Price
          </AccordionHeader>
          <AccordionBody>
            <PriceFilter price={price} />
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 3}
          icon={
            <IoIosArrowUp
              className={open === 3 ? " rotate-180" : " rotate-0"}
              id={3}
              open={open === 3}
            />
          }
        >
          <AccordionHeader onClick={() => handleOpen(3)}>
            SubCategories
          </AccordionHeader>
          <AccordionBody>
            <CategoryFilter
              subCategory={subCategory}
              categories={updatedSubCategoriesList}
            />
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 4}
          icon={
            <IoIosArrowUp
              className={open === 4 ? " rotate-180" : " rotate-0"}
              id={4}
              open={open === 4}
            />
          }
        >
          <AccordionHeader onClick={() => handleOpen(4)}>Level</AccordionHeader>
          <AccordionBody>
            <LevelFilter level={level} />
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 5}
          icon={
            <IoIosArrowUp
              className={open === 5 ? " rotate-180" : " rotate-0"}
              id={5}
              open={open === 5}
            />
          }
        >
          <AccordionHeader onClick={() => handleOpen(5)}>
            Language
          </AccordionHeader>
          <AccordionBody>
            <LanguageFilter language={language} />
          </AccordionBody>
        </Accordion>
      </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default CourseFilter;
