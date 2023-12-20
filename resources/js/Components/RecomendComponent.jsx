import React from "react";
import tiketx from "@/assets/img/tiketx.webp";
import tiketv from "@/assets/img/tiketv.webp";
import dufan from "@/assets/img/destinasi/dufan.webp";
import safari from "@/assets/img/destinasi/safari.webp";
import aquarium from "@/assets/img/destinasi/aquarium.jpg";
import water from "@/assets/img/destinasi/water.webp";
import taman from "@/assets/img/destinasi/taman.webp";
import hawai from "@/assets/img/destinasi/hawai.webp";
import trans from "@/assets/img/destinasi/trans.webp";

const RecomendComponent = () => {
  return (
    <div>
      <h1 className="flex mx-48 pt-8 text-2xl font-semibold text-black">
        Recommendation for a fun outing
      </h1>
      <p className="flex mx-48 text-lg pb-5 text-black">
        Explore iconic attraction around you! Great discounts await.
      </p>

      <div className="mx-48">
        <div className="relative flex items-center justify-center w-full dark:text-gray-50">
          <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
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
                    src={safari}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Taman Safari Indonesia Bogor
                    </h3>
                    <div className="text-sm inline-flex">Cisarua, Bogor</div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <p className="">4.3/5 (8,258 Reviews)</p>
                      </div>
                      <div className="relative flex mt-2">
                        <img src={tiketx} width={18} height={18} alt="" />
                        <p className="ml-1">tiketFLEXI</p>
                      </div>
                    </div>
                    <br />
                    {/* <span className="badge light danger line-through">IDR 225,000</span> */}
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 200,000
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

            <a href="#">
              <div className="inline-flex items-center py-5">
                <div className="overflow-hidden rounded-lg has-shadow w-80">
                  <img
                    src={water}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Waterbom Bali - Instant Pass
                    </h3>
                    <div className="text-sm inline-flex">Kuta, Badung</div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <p className="">4.7/5 (825 Reviews)</p>
                      </div>
                      <div className="relative flex mt-2">
                        <img src={tiketv} width={18} height={18} alt="" />
                        <p className="ml-1">tiketCLEAN</p>
                      </div>
                    </div>
                    <span className="badge light danger line-through">
                      IDR 300,000
                    </span>
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 255,000
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
                    src={taman}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      The Amazing Taman Safari Bali [Exclusive]
                    </h3>
                    <div className="text-sm inline-flex">
                      Blahbatuh, Gianyar
                    </div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <p className="">4.5/5 (1,050 Reviews)</p>
                      </div>
                      <div className="relative flex mt-2">
                        <img src={tiketx} width={18} height={18} alt="" />
                        <p className="ml-1 mr-1">tiketFLEXI</p>
                        <img src={tiketv} width={18} height={18} alt="" />
                        <p className="ml-1">tiketCLEAN</p>
                      </div>
                    </div>
                    <span className="badge light danger line-through">
                      IDR 175,000
                    </span>
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 135,000
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
                    src={trans}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Trans Studio Cibubur
                    </h3>
                    <div className="text-sm inline-flex">Cimanggis, Depok</div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <p className="">4.2/5 (2,245 Reviews)</p>
                      </div>
                      <div className="relative flex mt-2">
                        <img src={tiketx} width={18} height={18} alt="" />
                        <p className="ml-1">tiketFLEXI</p>
                      </div>
                    </div>
                    <br />
                    {/* <span className="badge light danger line-through">IDR 115,000</span> */}
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 250,000
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
                    src={hawai}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Hawai Waterpark [Exclusive]
                    </h3>
                    <div className="text-sm inline-flex">Singosari, Malang</div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <p className="">4.7/5 (246 Reviews)</p>
                      </div>
                      <div className="relative flex mt-2">
                        <img src={tiketv} width={18} height={18} alt="" />
                        <p className="ml-1">tiketCLEAN</p>
                      </div>
                    </div>
                    <br />
                    {/* <span className="badge light danger line-through">IDR 300,000</span> */}
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 85,000
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

export default RecomendComponent;
