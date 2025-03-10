const Pricing = () => {
  return (
    <div className="m-4 grid lg:grid-cols-12 col-span-1  gap-4">
      <div className="lg:col-span-4 "></div>

      <div className="lg:col-span-8 col-span-1">
        <div className="pl-10">
          <h2 className="text-3xl text-white py-10 font-extrabold">Prising</h2>
        </div>
        <div className="grid grid-cols-12 gap-4 px-11">
          <div className="lg:col-span-6 bg-black ">
            <h2 className="text-2xl text-white border border-l-0 rounded-r-4xl w-[130px] p-2 mt-10 bg-gray-600">
              Intro
            </h2>
            <div className="max-w-md mx-auto bg-black p-8">
              <h2 className="text-4xl font-bold  text-white mb-8">
                $29
                <span className="text-lg font-normal text-white">/month</span>
              </h2>

              <ul className="grid gap-4 mb-10 bg-gray-600 text-white p-7">
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
                  <li key={feature} className="text-white">
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-[150px] py-4 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-black ">
            <h2 className="text-2xl text-white border border-l-0 rounded-r-4xl w-[130px] p-2 mt-10 bg-gray-600">
              Base
            </h2>
            <div className="max-w-md mx-auto bg-black p-8">
              <h2 className="text-4xl font-bold  text-white mb-8">
                $49
                <span className="text-lg font-normal text-white">/month</span>
              </h2>

              <ul className="grid gap-4 mb-10 bg-gray-600 text-white p-7">
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
                  <li key={feature} className="text-white">
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-[150px] py-4 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>
          </div>
          <div className="lg:col-span-6 bg-black ">
            <h2 className="text-2xl text-white border border-l-0 rounded-r-4xl w-[130px] p-2 mt-10 bg-gray-600">
              Popular
            </h2>
            <div className="max-w-md mx-auto bg-black p-8">
              <h2 className="text-4xl font-bold  text-white mb-8">
                $99
                <span className="text-lg font-normal text-white">/month</span>
              </h2>

              <ul className="grid gap-4 mb-10 bg-gray-600 text-white p-7">
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
                  <li key={feature} className="text-white">
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-[150px] py-4 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>
          </div>
          <div className="lg:col-span-6 bg-black ">
            <h2 className="text-2xl text-white border border-l-0 rounded-r-4xl w-[130px] p-2 mt-10 bg-gray-600">
              Enterprise
            </h2>
            <div className="max-w-md mx-auto bg-black p-8">
              <h2 className="text-4xl font-bold  text-white mb-8">
                $129
                <span className="text-lg font-normal text-white">/month</span>
              </h2>

              <ul className="grid gap-4 mb-10 bg-gray-600 text-white p-7">
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
                  <li key={feature} className="text-white">
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-[150px] py-4 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors">
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
