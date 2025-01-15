import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg mb-4">
      <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
      <p className="mb-4">{course.description}</p>
      <Link to={`/course/${course.title}`} className="text-blue-500 hover:underline">
        View Course
      </Link>
    </div>
  );
};

export default CourseCard;
