const Pricing = () => {
  const crossedFeatures = {
    Intro: ["Interface Design", "Front-end Code", "Back-end Development"],
    Base: ["Search Engine Optimization", "Awesome Support"],
    Popular: ["Easy in use", "Useful site"],
  };

  const getLineThrough = (plan: string, feature: string) => {
    if (plan === "Enterprise") return false;
    const features = crossedFeatures[plan] || [];
    return features.includes(feature);
  };

  return (
    <div className="mx-0 my-4 lg:m-4 grid lg:grid-cols-12 col-span-1 gap-4">
      <div className="lg:col-span-4"></div>

      <div className="lg:col-span-8 col-span-1">
        <div className="px-4 lg:pl-10">
          <h2 className="text-3xl text-white py-10 font-extrabold">Pricing</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 px-4 lg:px-11">
          <div className="lg:col-span-6 bg-black w-full">
            <h2 className="text-2xl text-white  border-l-0 rounded-r-4xl w-[130px] p-2 mt-10 bg-[#4A2F0E]">
              Intro
            </h2>
            <div className="w-full mx-auto bg-black p-4 lg:p-8">
              <h2 className="text-4xl font-bold text-white mb-8">
                $29
                <span className="text-lg font-normal text-white">/month</span>
              </h2>
              <ul className="grid gap-4 mb-10 bg-[#121414] text-white p-4 lg:p-7">
                {[
                  "Interface Design",
                  "Front-end Code",
                  "Back-end Development",
                  "Search Engine Optimization",
                  "Awesome Support",
                  "Responsive site",
                  "Easy in use",
                  "Useful site",
                  "Speedy web",
                ].map((feature) => (
                  <li
                    key={feature}
                    className={`text-white ${
                      getLineThrough("Intro", feature)
                        ? "line-through opacity-50"
                        : ""
                    }`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full lg:w-[150px] border border-[#F89222] py-4 px-6 hover:bg-gradient-to-r from-[#F5BD4D] to-[#F89222]  text-white rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-black w-full">
            <h2 className="text-2xl text-white border-l-0 rounded-r-4xl w-[130px] p-2 mt-10 bg-[#4A2F0E]">
              Base
            </h2>
            <div className="w-full mx-auto bg-black p-4 lg:p-8">
              <h2 className="text-4xl font-bold text-white mb-8">
                $49
                <span className="text-lg font-normal text-white">/month</span>
              </h2>
              <ul className="grid gap-4 mb-10 bg-[#121414] text-white p-4 lg:p-7">
                {[
                  "Interface Design",
                  "Front-end Code",
                  "Back-end Development",
                  "Search Engine Optimization",
                  "Awesome Support",
                  "Responsive site",
                  "Easy in use",
                  "Useful site",
                  "Speedy web",
                ].map((feature) => (
                  <li
                    key={feature}
                    className={`text-white ${
                      getLineThrough("Base", feature)
                        ? "line-through opacity-50"
                        : ""
                    }`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full lg:w-[150px] border border-[#F89222] py-4 px-6 hover:bg-gradient-to-r from-[#F5BD4D] to-[#F89222]  text-white rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-black w-full">
            <h2 className="text-2xl text-white  border-l-0 rounded-r-4xl w-[130px] p-2 mt-10 bg-[#4A2F0E] ">
              Popular
            </h2>
            <div className="w-full mx-auto bg-black p-4 lg:p-8">
              <h2 className="text-4xl font-bold text-white mb-8">
                $99
                <span className="text-lg font-normal text-white">/month</span>
              </h2>
              <ul className="grid gap-4 mb-10 bg-[#121414] text-white p-4 lg:p-7">
                {[
                  "Interface Design",
                  "Front-end Code",
                  "Back-end Development",
                  "Search Engine Optimization",
                  "Awesome Support",
                  "Responsive site",
                  "Easy in use",
                  "Useful site",
                  "Speedy web",
                ].map((feature) => (
                  <li
                    key={feature}
                    className={`text-white ${
                      getLineThrough("Popular", feature)
                        ? "line-through opacity-50"
                        : ""
                    }`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full lg:w-[150px] border border-[#F89222] py-4 px-6 hover:bg-gradient-to-r from-[#F5BD4D] to-[#F89222]  text-white rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-black w-full">
            <h2 className="text-2xl text-white border-l-0 rounded-r-4xl w-[130px] p-2 mt-10 bg-[#4A2F0E]">
              Enterprise
            </h2>
            <div className="w-full mx-auto bg-black p-4 lg:p-8">
              <h2 className="text-4xl font-bold text-white mb-8">
                $129
                <span className="text-lg font-normal text-white">/month</span>
              </h2>
              <ul className="grid gap-4 mb-10 bg-[#121414] text-white p-4 lg:p-7">
                {[
                  "Interface Design",
                  "Front-end Code",
                  "Back-end Development",
                  "Search Engine Optimization",
                  "Awesome Support",
                  "Responsive site",
                  "Easy in use",
                  "Useful site",
                  "Speedy web",
                ].map((feature) => (
                  <li key={feature} className="text-white  ">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full lg:w-[150px] border border-[#F89222] py-4 px-6 hover:bg-gradient-to-r from-[#F5BD4D] to-[#F89222]  text-white rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
