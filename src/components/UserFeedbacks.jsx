import React from "react";

const UserFeedbacks = ({ feedback }) => {
  const { reviewText, image, serviceName } = feedback;
  return (
    <div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
          <img
            alt="team"
            class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="https://dummyimage.com/80x80"
          />
          <div class="flex-grow">
            <h2 class="text-white title-font font-medium">{serviceName}</h2>
            <p class="text-gray-600">{reviewText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFeedbacks;
