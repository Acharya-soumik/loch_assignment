const Testimonials = ({ title, desc, role }) => {
  return (
    <div className="p-6 bg-white rounded-md m-2 flex-shrink-0 w-[90%]">
      <div className="flex mb-2">
        <h2 className="font-bold text-black">{title}</h2>
        <p className="text-md text-gray-400 ml-2">{role}</p>
      </div>
      <span className="opacity-70 text-black ">{desc}</span>
    </div>
  );
};

export default Testimonials;
