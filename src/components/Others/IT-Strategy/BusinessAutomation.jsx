import './Business.css';

const BusinessAutomation = () => {
    return (
        <div className="business">
            <div className="container mx-auto pt-28 pb-28">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:pr-10 mt-20">
       
          <h5 className="mb-4 text-5xl font-bold  text-transparent  bg-gradient-to-r from-custom-blue-start to-custom-blue-end">
          Business Automation
          </h5>
          <p className="mb-6 text-white">
          Dedicated to igniting growth and innovation in businesses worldwide. With a passionate team of experts, we offer strategic business development solutions tailored to unlock .
          </p>
        </div>
        
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://i.postimg.cc/1tr2t8WH/14-Converted-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
        </div>
    );
};

export default BusinessAutomation;