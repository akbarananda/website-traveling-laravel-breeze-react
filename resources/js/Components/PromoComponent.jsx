import React from "react";
import destinasi1 from "@/assets/img/destinasi/destinasi1.webp";
import destinasi2 from "@/assets/img/destinasi/destinasi2.webp";
import destinasi3 from "@/assets/img/destinasi/destinasi3.webp";
import destinasi4 from "@/assets/img/destinasi/destinasi4.webp";
import destinasi5 from "@/assets/img/destinasi/destinasi5.webp";
import destinasi6 from "@/assets/img/destinasi/destinasi6.webp";
import destinasi7 from "@/assets/img/destinasi/destinasi7.webp";
import citilink from "@/assets/img/maskapai/citilink.webp";
import garuda from "@/assets/img/maskapai/garuda.webp";
import malay from "@/assets/img/maskapai/malai.webp";
import sriwijaya from "@/assets/img/maskapai/sriwijaya.webp";
import airasia from "@/assets/img/maskapai/airasia.webp";
import japan from "@/assets/img/maskapai/japan.webp";

const PromoComponent = () => {
  return (
    <div>
      <h1 className="flex mx-48 pt-8 text-2xl font-semibold text-black">
        Travel more for less!
      </h1>
      <p className="flex mx-48 pb-5 text-lg text-black">
        Check the special prices for international and domestic destinations on
        Best Deals Hour!
      </p>
      <div className="flex mx-48">
        <a href="">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mr-2 rounded-lg text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            Domestic Deals
          </span>
        </a>
        <a href="">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mr-2 rounded-lg text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            International Deals
          </span>
        </a>
        <a href="">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mr-2 rounded-lg text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            Cathay Deals
          </span>
        </a>
        <a href="">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mr-2 rounded-lg text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            From Singapore
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
                    src={destinasi1}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Jakarta{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-right mx-2 mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                      Pangkalpinang
                    </h3>
                    <div className="text-sm inline-flex">12 Nov 2023</div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <div className="mt-1">
                          <img src={sriwijaya} width={20} height={20} alt="" />
                        </div>
                        <p className="ml-2">Sriwijaya Air</p>
                      </div>
                      <p className="flex mt-1">Economy</p>
                    </div>
                    <br />
                    <p className="flex ml-2">Start From</p>
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 718,130
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
                    src={destinasi2}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Jakarta{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-right mx-2 mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                      Banjarmasin
                    </h3>
                    <div className="text-sm inline-flex">15 Nov 2023</div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <div className="mt-1">
                          <img src={citilink} width={20} height={20} alt="" />
                        </div>
                        <p className="ml-2">Citilink</p>
                      </div>
                      <p className="flex mt-1">Economy</p>
                    </div>
                    <br />
                    <p className="flex ml-2">Start From</p>
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 1,125,058
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
                    src={destinasi3}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Jakarta{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-right mx-2 mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                      Praya
                    </h3>
                    <div className="text-sm inline-flex">06 Dec 2023</div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <div className="mt-1">
                          <img src={garuda} width={20} height={20} alt="" />
                        </div>
                        <p className="ml-2">Garuda Indonesia</p>
                      </div>
                      <p className="flex mt-1">Economy</p>
                    </div>
                    <br />
                    <p className="flex ml-2">Start From</p>
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 1,569,165
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
                    src={destinasi4}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Jakarta{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-left-right mx-2 mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                        />
                      </svg>
                      Kuala Lumpur
                    </h3>
                    <div className="text-sm inline-flex">
                      22 Feb 2024 - 24 Feb 2024
                    </div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <div className="mt-1">
                          <img src={malay} width={20} height={20} alt="" />
                        </div>
                        <p className="ml-2">Malaysia Airlines</p>
                      </div>
                      <p className="flex mt-1">Economy</p>
                    </div>
                    <br />
                    <p className="flex ml-2">Start From</p>
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 1,751,120
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
                    src={destinasi5}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Jakarta{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-left-right mx-2 mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                        />
                      </svg>
                      Singapore
                    </h3>
                    <div className="text-sm inline-flex">
                      17 Feb 2024 - 24 Feb 2024
                    </div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <div className="">
                          <img src={airasia} width={20} height={20} alt="" />
                        </div>
                        <p className="ml-2">AirAsia Indonesia</p>
                      </div>
                      <p className="flex mt-1">Economy</p>
                    </div>
                    <br />
                    <p className="flex ml-2">Start From</p>
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 1,367,318
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
                    src={destinasi6}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Jakarta{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-left-right mx-2 mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                        />
                      </svg>
                      Bangkok
                    </h3>
                    <div className="text-sm inline-flex">
                      03 Dec 2024 - 15 Dec 2024
                    </div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <div className="">
                          <img src={airasia} width={20} height={20} alt="" />
                        </div>
                        <p className="ml-2">AirAsia Indonesia</p>
                      </div>
                      <p className="flex mt-1">Economy</p>
                    </div>
                    <br />
                    <p className="flex ml-2">Start From</p>
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 1,987,749
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
                    src={destinasi7}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Jakarta{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-left-right mx-2 mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                        />
                      </svg>
                      Tokyo
                    </h3>
                    <div className="text-sm inline-flex">
                      21 Jan 2024 - 12 Feb 2024
                    </div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <div className="">
                          <img src={japan} width={20} height={20} alt="" />
                        </div>
                        <p className="ml-2">Japan Airlines</p>
                      </div>
                      <p className="flex mt-1">Economy</p>
                    </div>
                    <br />
                    <p className="flex ml-2">Start From</p>
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 8,772,832
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

export default PromoComponent;
