import React from "react";

const Categories = ({ allCategories, filterFoods }) => {
  return (
    <div className="btn-container">
      {allCategories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            className="filter-btn"
            onClick={() => filterFoods(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
