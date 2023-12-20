import React from "react";
import tiketx from "@/assets/img/tiketx.webp";
import tiketv from "@/assets/img/tiketv.webp";
import garden from "@/assets/img/destinasi/garden.webp";
import universal from "@/assets/img/destinasi/universal.webp";
import universal2 from "@/assets/img/destinasi/universal2.webp";
import disney from "@/assets/img/destinasi/disney.webp";
import dufan from "@/assets/img/destinasi/dufan.webp";
import lego from "@/assets/img/destinasi/lego.webp";
import aquarium from "@/assets/img/destinasi/aquarium.jpg";

const AdventureComponent = () => {
  return (
    <div>
      <h1 className="flex mx-48 pt-8 text-2xl font-semibold text-black">
        Ideas for overseas adventure
      </h1>
      <p className="flex mx-48 text-lg pb-5 text-black">
        Here are all kinds of cool activities in different countries that you
        must try!
      </p>
      <div className="flex mx-48">
        <a href="">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mr-2 rounded-lg text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            Singapore
          </span>
        </a>
        <a href="">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mr-2 rounded-lg text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            Japan
          </span>
        </a>
        <a href="">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mr-2 rounded-lg text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            Malaysia
          </span>
        </a>
        <a href="">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mr-2 rounded-lg text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            Hong Kong
          </span>
        </a>
        <a href="">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mr-2 rounded-lg text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            South Korea
          </span>
        </a>
        <a href="">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mr-2 rounded-lg text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            Thailand
          </span>
        </a>
        <a href="">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mr-2 rounded-lg text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            Australia
          </span>
        </a>
      </div>

      <div className="mx-48">
        <div className="relative flex items-center justify-center w-full dark:text-gray-50">
          <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
            <a href="#">
              <div className="inline-flex items-center py-5">
                <div className="overflow-hidden rounded-lg has-shadow w-80">
                  <img
                    src={garden}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Gardens by the Bay
                    </h3>
                    <div className="text-sm inline-flex">Singapore</div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <p className="">4.7/5 (692 Reviews)</p>
                      </div>
                    </div>
                    <br />
                    <br />
                    {/* <span className="badge light danger line-through">IDR 115,000</span> */}
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 115,328
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="#">
              <div className="inline-flex items-center py-5">
                <div className="overflow-hidden rounded-lg has-shadow w-80">
                  <img
                    src={universal}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Universal Studios Singapore
                    </h3>
                    <div className="text-sm inline-flex">Singapore</div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <p className="">4.5/5 (1,688 Reviews)</p>
                      </div>
                    </div>
                    <br />
                    <br />
                    {/* <span className="badge light danger line-through">IDR 115,000</span> */}
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 945,688
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="#">
              <div className="inline-flex items-center py-5">
                <div className="overflow-hidden rounded-lg has-shadow w-80">
                  <img
                    src={universal2}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Universal Studios Japan
                    </h3>
                    <div className="text-sm inline-flex">Osaka, Japan</div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <p className="">4.8/5 (13 Reviews)</p>
                      </div>
                    </div>
                    <br />
                    <br />
                    {/* <span className="badge light danger line-through">IDR 115,000</span> */}
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 890,848
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="#">
              <div className="inline-flex items-center py-5">
                <div className="overflow-hidden rounded-lg has-shadow w-80">
                  <img
                    src={disney}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Tokyo Disneyland
                    </h3>
                    <div className="text-sm inline-flex">Edogawa, Tokyo</div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <p className="">4.8/5 (26 Reviews)</p>
                      </div>
                    </div>
                    <br />
                    <br />
                    {/* <span className="badge light danger line-through">IDR 115,000</span> */}
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 939,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="#">
              <div className="inline-flex items-center py-5">
                <div className="overflow-hidden rounded-lg has-shadow w-80">
                  <img
                    src={dufan}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Tiket Dunia Fantasi (Dufan) Ancol
                    </h3>
                    <div className="text-sm inline-flex">
                      North Jakarta, Jakarta
                    </div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <p className="">4.4/5 (14,040 Reviews)</p>
                      </div>
                      <div className="relative flex mt-2">
                        <img src={tiketx} width={18} height={18} alt="" />
                        <p className="ml-1">tiketFLEXI</p>
                      </div>
                    </div>
                    <span className="badge light danger line-through">
                      IDR 225,000
                    </span>
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 210,600
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="#">
              <div className="inline-flex items-center py-5">
                <div className="overflow-hidden rounded-lg has-shadow w-80">
                  <img
                    src={lego}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      LEGOLAND Malaysia Resort
                    </h3>
                    <div className="text-sm inline-flex">
                      Johor Bahru, Johor
                    </div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <p className="">4.6/5 (49 Reviews)</p>
                      </div>
                    </div>
                    <br />
                    {/* <br /> */}
                    <span className="badge light danger line-through">
                      IDR 336,072
                    </span>
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 267,438
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a href="#">
              <div className="inline-flex items-center py-5">
                <div className="overflow-hidden rounded-lg has-shadow w-80">
                  <img
                    src={aquarium}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Jakarta Aquarium & Safari [Exclusive]
                    </h3>
                    <div className="text-sm inline-flex">
                      Grogol Petamburan, West Jakarta
                    </div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <p className="">4.1/5 (9,881 Reviews)</p>
                      </div>
                      <div className="relative flex mt-2">
                        <img src={tiketx} width={18} height={18} alt="" />
                        <p className="ml-1">tiketFLEXI</p>
                      </div>
                    </div>
                    <span className="badge light danger line-through">
                      IDR 115,000
                    </span>
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 111,550
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureComponent;
