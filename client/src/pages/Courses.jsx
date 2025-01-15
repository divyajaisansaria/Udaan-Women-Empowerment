import React, { useState } from "react";
import Heading from "../components/Heading";
import FilterSidebar from "../components/FilterSidebar";
import CourseCard from "../components/CourseCard";
import "../components/courses.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Courses = () => {
    const [courses] = useState([
        { title: "Photography", description: "Learn the art of capturing stunning images and editing with tools like Lightroom and Photoshop.", category: "Photography" },
        { title: "Nursing", description: "Master essential nursing skills, patient care techniques, and healthcare best practices.", category: "Nursing" },
        { title: "Graphic Design", description: "Explore design principles and tools like Adobe Illustrator and Canva to create visual masterpieces.", category: "Graphic Design" },
        { title: "Programming", description: "Dive into coding with languages like Python, JavaScript, and C++, and build real-world projects.", category: "Programming" },
        { title: "Digital Marketing", description: "Understand SEO, content marketing, and social media strategies to grow businesses online.", category: "Digital Marketing" },
        { title: "Business Management", description: "Learn leadership skills, business planning, and operational strategies for success.", category: "Business Management" },
        { title: "Personal Development", description: "Enhance your communication, productivity, and time management skills.", category: "Personal Development" },
        { title: "Music Production", description: "Create and edit music using tools like FL Studio, GarageBand, and Ableton Live.", category: "Music Production" },
        { title: "Health and Fitness", description: "Master workout routines, nutrition planning, and wellness practices.", category: "Health and Fitness" },
        { title: "Languages", description: "Learn new languages like Spanish, French, or Japanese with interactive lessons.", category: "Languages" },
        { title: "Cooking and Baking", description: "Develop culinary skills and master recipes from global cuisines.", category: "Cooking and Baking" },
        { title: "Art and Crafts", description: "Explore painting, sketching, and DIY craft-making techniques.", category: "Art and Crafts" },
        { title: "Cybersecurity", description: "Understand data protection, ethical hacking, and cybersecurity tools.", category: "Cybersecurity" },
        { title: "Finance and Accounting", description: "Learn financial planning, investment strategies, and bookkeeping essentials.", category: "Finance and Accounting" },
        { title: "Entrepreneurship", description: "Gain insights into starting and scaling your own business.", category: "Entrepreneurship" },
        { title: "Data Science", description: "Master Python, R, and machine learning techniques.", category: "Data Science" },
        { title: "Web Development", description: "Build dynamic websites using HTML, CSS, JavaScript, and frameworks like React.", category: "Web Development" },
        { title: "Interior Design", description: "Discover the principles of space planning and home décor.", category: "Interior Design" },
        { title: "Event Management", description: "Learn event planning, budgeting, and management strategies.", category: "Event Management" },
    ]);

    const [filteredCourses, setFilteredCourses] = useState(courses);
    const [searchTerm, setSearchTerm] = useState("");

    const handleFilter = (selectedCategories) => {
        if (selectedCategories.length === 0) {
            setFilteredCourses(courses);
        } else {
            setFilteredCourses(
                courses.filter((course) => selectedCategories.includes(course.category))
            );
        }
    };

    const handleSearch = () => {
        const filtered = courses.filter((course) =>
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCourses(filtered);
    };

    return (
        <div>
            <NavBar />
            <div>
                <h1 className="page-heading">Explore Our Courses</h1>
                <Heading searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
                <div className="layout-container">
                    <FilterSidebar courses={courses} onFilter={handleFilter} />
                    <div className="course-container">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course, index) => (
                                <CourseCard key={index} course={course} />
                            ))
                        ) : (
                            <p>No courses found.</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Courses;
