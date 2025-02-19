import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-20 mt-20 mb-20">
        <h2 className="text-7xl font-bold text-black">Why Choose Us</h2>
        <p className="text-gray-600 max-w-xl">
          At LIMOS we pride ourselves in delivering extensive services to <br />
          fulfill all of your needs with first rate customer care
        </p>
      </div>

      <div className="grid grid-cols-4 gap-8 px-12 justify-items-center">
        <div className="flex flex-col items-start w-[200px]">
          <div className="relative w-[200px] h-[200px] mb-4 rounded-[20px] overflow-hidden">
            <Image
              src="/images/bookmark1.jpg"
              alt="Professional Drivers"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Easy online booking</h3>
          <p className="text-gray-600">
            Our drivers are experienced professionals who prioritize your safety
            and comfort
          </p>
        </div>

        <div className="flex flex-col items-start w-[200px]">
          <div className="relative w-[200px] h-[200px] mb-4 rounded-[20px] overflow-hidden">
            <Image
              src="/images/driver.jpg"
              alt="Luxury Vehicles"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Profesional Drivers</h3>
          <p className="text-gray-600">
            Premium fleet of vehicles maintained to the highest standards
          </p>
        </div>

        <div className="flex flex-col items-start w-[200px]">
          <div className="relative w-[200px] h-[200px] mb-4 rounded-[20px] overflow-hidden">
            <Image
              src="/images/brandcar.jpg"
              alt="24/7 Service"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Variety of Cars Brands</h3>
          <p className="text-gray-600">
            Available around the clock to meet your transportation needs
          </p>
        </div>

        <div className="flex flex-col items-start w-[200px]">
          <div className="relative w-[200px] h-[200px] mb-4 rounded-[20px] overflow-hidden">
            <Image
              src="/images/payment1.jpg"
              alt="Global Coverage"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Online Payment</h3>
          <p className="text-gray-600">
            Extensive network covering major cities worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
