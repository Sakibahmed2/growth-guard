import React from "react";

const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full  max-w-[800px] ">
      <p className="text-green-600 text-xl font-semibold">- {title}</p>{" "}
      <p className="text-2xl md:text-4xl font-semibold mt-2 md:mt-3">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
