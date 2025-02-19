import React from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Briefcase, Users } from "lucide-react";

const OurFleet = () => {
  return (
    <div className="max-w-[90%] mx-auto py-12">
      <div className="flex items-center justify-center gap-20 mt-20 mb-20">
        <h2 className="text-7xl font-bold text-black">Our Fleet</h2>
        <p className="text-gray-600 max-w-md">
          We offer an extensive fleet of vehicles including <br />
          sedans, limousines and crossovers
        </p>
      </div>

      <div className="flex justify-end flex-col items-center gap-10">
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList className="flex justify-between w-full bg-transparent">
            <TabsTrigger
              value="all"
              className="bg-transparent data-[state=active]:bg-lime-400 data-[state=active]:text-black"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="luxury"
              className="bg-transparent data-[state=active]:bg-lime-400 data-[state=active]:text-black"
            >
              Luxury
            </TabsTrigger>
            <TabsTrigger
              value="business"
              className="bg-transparent data-[state=active]:bg-lime-400 data-[state=active]:text-black"
            >
              Business
            </TabsTrigger>
            <TabsTrigger
              value="crossover"
              className="bg-transparent data-[state=active]:bg-lime-400 data-[state=active]:text-black"
            >
              Crossover
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="w-[1250px]">
          <Carousel>
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <div className="relative h-[250px]">
                  <Image
                    src="/images/car3.jpg"
                    alt="Car Category 1"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2">Mercedes S Class</h3>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <Users size={20} />
                      <span>2</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={20} />
                      <span>4</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <div className="relative h-[250px]">
                  <Image
                    src="/images/car1.jpg"
                    alt="Car Category 2"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2">BMW 7 Series</h3>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <Users size={20} />
                      <span>10</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={20} />
                      <span>5</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <div className="relative h-[250px]">
                  <Image
                    src="/images/car2.jpg"
                    alt="Car Category 3"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2">Audi A8</h3>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <Users size={20} />
                      <span>7</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={20} />
                      <span>0</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <div className="relative h-[250px]">
                  <Image
                    src="/images/car.jpg"
                    alt="Car Category 4"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2">Rolls Royce Ghost</h3>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <Users size={20} />
                      <span>11</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={20} />
                      <span>3</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/3">
                <div className="relative h-[250px]">
                  <Image
                    src="/images/car-category.jpg"
                    alt="Car Category 5"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2">
                    Bentley Flying Spur
                  </h3>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <Users size={20} />
                      <span>9</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={20} />
                      <span>6</span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default OurFleet;
