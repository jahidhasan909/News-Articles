import  { useState } from 'react';

const CategoryMenu = () => {
  
  const categories = [
    "All Gallery & Media",
    "Blood Donation",
    "Tree Plantation",
    "Education & Student Support",
    "Women Empowerment",
    "Disability Support",
    "Community Development",
    "Anti-Drug Awareness",
    "Travel & Tour Management",
    "Disaster",
    "Blanket Distribution During Winter",
    "Iftar Distribution",
    "Winter Clothing Distribution",
    "Safe Drinking Water",
    "Qurbani for Everyone",
    "Food Distribution",
    "Skills Development Training"
  ];

  
  const [activeCategory, setActiveCategory] = useState("All Gallery & Media");

  return (
    <div className="flex justify-center items-center min-h-screen  p-4">
     
      <div className="card w-80 sm:w-96 bg-base-100 shadow-xl border border-gray-100 py-2 rounded-2xl">
        <div className="card-body p-0">
          <ul className="menu w-full p-0">
            {categories.map((category, index) => {
              const isActive = activeCategory === category;
              return (
                <li key={index} className="border-b border-gray-100 last:border-none">
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`relative w-full text-left py-3.5 px-6 rounded-none text-sm font-medium transition-colors hover:bg-gray-50 focus:bg-gray-50 ${
                      isActive ? 'text-gray-900 font-semibold' : 'text-gray-700'
                    }`}
                  >
                 
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-sky-500 rounded-r-md"></span>
                    )}
                    {category}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;