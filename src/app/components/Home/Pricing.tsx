const Pricing = () => {
  const cardPackage = [
    {
      name: "Intro",
      price: 29,
      feature: [
        { title: "Interface Design", isCrossed: false },
        { title: "Front-end Code", isCrossed: true },
        { title: "Back-end Development", isCrossed: true },
        { title: "Search Engine Optimization", isCrossed: false },
        { title: "Awesome Support", isCrossed: true },
        { title: "Responsive site", isCrossed: false },
        { title: "Easy in use", isCrossed: false },
        { title: "Useful site", isCrossed: false },
        { title: "Speedy web", isCrossed: false },
      ],
    },
    {
      name: "Base",
      price: 39,
      feature: [
        { title: "Interface Design", isCrossed: false },
        { title: "Front-end Code", isCrossed: false },
        { title: "Back-end Development", isCrossed: false },
        { title: "Search Engine Optimization", isCrossed: false },
        { title: "Awesome Support", isCrossed: true },
        { title: "Responsive site", isCrossed: false },
        { title: "Easy in use", isCrossed: true },
        { title: "Useful site", isCrossed: false },
        { title: "Speedy web", isCrossed: false },
      ],
    },
    {
      name: "Popular",
      price: 99,
      feature: [
        { title: "Interface Design", isCrossed: false },
        { title: "Front-end Code", isCrossed: false },
        { title: "Back-end Development", isCrossed: true },
        { title: "Search Engine Optimization", isCrossed: true },
        { title: "Awesome Support", isCrossed: false },
        { title: "Responsive site", isCrossed: false },
        { title: "Easy in use", isCrossed: true },
        { title: "Useful site", isCrossed: false },
        { title: "Speedy web", isCrossed: true },
      ],
    },
    {
      name: "Enterprise",
      price: 129,
      feature: [
        { title: "Interface Design", isCrossed: false },
        { title: "Front-end Code", isCrossed: false },
        { title: "Back-end Development", isCrossed: false },
        { title: "Search Engine Optimization", isCrossed: false },
        { title: "Awesome Support", isCrossed: false },
        { title: "Responsive site", isCrossed: false },
        { title: "Easy in use", isCrossed: false },
        { title: "Useful site", isCrossed: false },
        { title: "Speedy web", isCrossed: false },
      ],
    },
  ];

  return (
    <div className="mx-0 my-4 lg:m-4 grid lg:grid-cols-12 col-span-1 gap-4">
      <div className="lg:col-span-4"></div>

      <div className="lg:col-span-8 col-span-1">
        <div className="px-4 lg:pl-10">
          <h2 className="text-3xl text-white py-10 font-extrabold">Pricing</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 px-4 lg:px-11">
          {cardPackage.map((item, idx) => {
            return (
              <div key={idx} className="lg:col-span-6 bg-black w-full">
                <h2 className="text-2xl text-white  border-l-0 rounded-r-4xl w-[130px] p-2 mt-10 bg-[#4A2F0E]">
                  {item?.name}
                </h2>
                <div className="w-full mx-auto bg-black p-4 lg:p-8">
                  <h2 className="text-4xl font-bold text-white mb-8">
                    {item?.price}
                    <span className="text-lg font-normal text-white">
                      /month
                    </span>
                  </h2>
                  <ul className="grid gap-4 mb-10 bg-[#121414] text-white p-4 lg:p-7">
                    {item?.feature?.map((features, idx) => (
                      <li
                        key={idx}
                        className={`text-white ${
                          features.isCrossed == true
                            ? "line-through opacity-50"
                            : ""
                        }`}
                      >
                        {features?.title}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full lg:w-[150px] border border-[#F89222] py-4 px-6 hover:bg-gradient-to-r from-[#F5BD4D] to-[#F89222]  text-white rounded-lg font-semibold transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
