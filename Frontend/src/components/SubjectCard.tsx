import React from 'react';
import { Link } from 'react-router-dom';

const SubjectCard = ({ title, route }) => {
  return (
    <Link to={route}>
      <div className="bg-white text-black p-6 w-40 h-40 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
        <h2 className="text-2xl font-bold text-center text-orange-500">{title}</h2>
      </div>
    </Link>
  );
};

export default SubjectCard;
