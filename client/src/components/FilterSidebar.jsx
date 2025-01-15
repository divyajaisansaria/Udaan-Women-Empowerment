import React, { useState } from "react";


const FilterSidebar = ({ courses, onFilter }) => {
    const categories = Array.from(new Set(courses.map((course) => course.category)));
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCheckboxChange = (category) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter((cat) => cat !== category)
            : [...selectedCategories, category];
        setSelectedCategories(updatedCategories);
        onFilter(updatedCategories);
    };

    return (
        <aside className="filter-sidebar">
            <h3>Filter Courses</h3>
            <div className="filter-options">
                {categories.map((category, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            value={category}
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCheckboxChange(category)}
                        />
                        {category}
                    </label>
                ))}
            </div>
        </aside>
    );
};

export default FilterSidebar;
