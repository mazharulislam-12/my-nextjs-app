import React from "react";

const DynamicPage = ({ params, searchParams }) => {
  console.log(params);
  console.log(searchParams);
  return (
    <div>
      <h1>Thi is Dynamic Page: {params.id} </h1>
      <h2>Search by: {searchParams.category} </h2>
    </div>
  );
};

export default DynamicPage;
