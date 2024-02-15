import React from 'react'
import { Select, Option } from "@material-tailwind/react";

function SortCourses() {
    const options = [
        { value: 'relevance', label: 'Relevance' },
        { value: 'most-reviewed', label: 'Most Reviewed' },
        { value: 'highest-rated', label: 'Highest Rated' },
        { value: 'newest', label: 'Newest' },
        { value: 'price-low-to-high', label: 'Price Low to High' },
        { value: 'price-high-to-low', label: 'Price High to Low' },
    ];
    return (
        <div className="w-72">
            <Select label="Sort By">
                {options.map(({ value, label }) => (
                    <Option value={value}>{label}</Option>
                ))}
            </Select>
        </div>
    )
}

export default SortCourses