import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import courses from '../data/CoursesData';

const CoursePage = () => {
  const { courseTitle } = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.title === courseTitle);

  if (!course) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center text-gray-600">
          <h1 className="text-2xl font-bold">Course not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Top Section */}
      <div className="relative bg-gradient-to-r from-cyan-600 to-rose-300 text-white text-center py-16">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{ background: 'url(/path-to-curvy-bg.svg) no-repeat center/cover' }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.topSection.mainHeading}</h1>
          <h2 className="text-2xl md:text-3xl font-medium">{course.topSection.subHeading}</h2>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="content flex flex-col md:flex-row justify-between items-center p-10">
        {/* Text Section */}
        <div className="text md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-3xl font-bold mb-4 text-indigo-800">{course.sections[0].heading}</h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">{course.sections[0].text}</p>
          <div className="buttons flex flex-wrap gap-4 mt-4">
            {course.sections[0].buttons.map((button, index) => (
              <button
                key={index}
                onClick={() => {
                  if (button.text === 'Join Our Mentorship Program') {
                    navigate('/Contact');
                  }
                }}
                className={`px-6 py-3 rounded-full shadow-md text-white ${button.class} bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all`}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
        {/* Image Section */}
        <div className="image md:w-1/2 flex justify-center">
          <img
            src={course.image}
            alt="Course Illustration"
            className="max-w-full h-auto rounded-lg"
            style={{ height: '50vh' }}
          />
        </div>
      </div>

      {/* Technologies Section */}
      <div className="technologies bg-gray-100 py-10">
        <h2 className="text-center text-3xl font-bold text-indigo-800 mb-8">Technologies Covered</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {course.technologies.map((tech, index) => (
            <div
              key={index}
              className="tech bg-red-400 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:scale-105 transform transition-all"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="video-section flex flex-col md:flex-row justify-between items-center p-10 bg-gray-50">
        <div className="video md:w-1/2 mb-8 md:mb-0">
          <iframe
            width="100%"
            height="315"
            src={course.video.url}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
        <div className="video-text md:w-1/2 md:pl-10">
          <h3 className="text-3xl font-bold mb-4 text-indigo-800">{course.sections[1].heading}</h3>
          <p className="text-lg text-gray-700 leading-relaxed">{course.sections[1].text}</p>
        </div>
      </div>
    </Layout>
  );
};

export default CoursePage;
