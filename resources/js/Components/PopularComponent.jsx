import React from "react";
import ancol from "@/assets/img/destinasi/ancol.webp";
import aquarium from "@/assets/img/destinasi/aquarium.jpg";
import dufan from "@/assets/img/destinasi/dufan.webp";
import hotel1 from "@/assets/img/destinasi/hotel1.webp";
import hotel2 from "@/assets/img/destinasi/hotel2.webp";
import hotel3 from "@/assets/img/destinasi/hotel3.webp";
import hotel4 from "@/assets/img/destinasi/hotel4.webp";

const PopularComponent = () => {
  return (
    <div>
      <h1 className="flex mx-48 pt-8 text-2xl font-semibold text-black">
        Check what’s popular in TravelingYUK! 🏆🤩
      </h1>
      <p className="pb-5 text-black"></p>
      <div className="flex mx-48">
        <a href="">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mr-2 rounded-lg text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            Attraction
          </span>
        </a>
        <a href="">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mr-2 rounded-lg text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            Hotels
          </span>
        </a>
        <a href="">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mr-2 rounded-lg text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            Viila & Apart.
          </span>
        </a>
        <a href="">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mr-2 rounded-lg text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            Events
          </span>
        </a>
        <a href="">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mr-2 rounded-lg text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            Playgrounds
          </span>
        </a>
        <a href="">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mr-2 rounded-lg text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            Tours
          </span>
        </a>
        <a href="">
          <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mr-2 rounded-lg text-base font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
            Beauty & Wellness
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
                    src={ancol}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Ancol Entrance Gate
                    </h3>
                    <div className="text-sm inline-flex">
                      North Jakarta, Jakarta
                    </div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <p className="">4.2/5 (32,731 Reviews)</p>
                      </div>
                    </div>
                    <br />
                    <span className="badge light danger line-through">
                      IDR 21,000
                    </span>
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 18,720
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
                    </div>
                    <br />
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
                    </div>
                    <br />
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
                    src={hotel1}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Diamond Hotel Kuta Bali
                    </h3>
                    <div className="text-sm inline-flex">
                      {/* Rating */}
                      <div className="flex items-center mr-1">
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-yellow-400 dark:text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-yellow-400 dark:text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-yellow-400 dark:text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-gray-300 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-gray-300 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                      {/* End Rating */}
                      Kuta, Badung
                    </div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <p className="">4.3/5 (2,956 Reviews)</p>
                      </div>
                    </div>
                    <br />
                    <span className="badge light danger line-through">
                      IDR 532,752
                    </span>
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 479,952
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
                    src={hotel2}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      eL Hotel Bandung
                    </h3>
                    <div className="text-sm inline-flex">
                      {/* Rating */}
                      <div className="flex items-center mr-1">
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-yellow-400 dark:text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-yellow-400 dark:text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-yellow-400 dark:text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-yellow-400 dark:text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-gray-300 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                      {/* End Rating */}
                      Sumur Bandung, Bandung
                    </div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <p className="">4.4/5 (5,517 Reviews)</p>
                      </div>
                    </div>
                    <br />
                    <br />
                    {/* <span className="badge light danger line-through">IDR 532,752</span> */}
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 806,000
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
                    src={hotel3}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Senyum World Hotel
                    </h3>
                    <div className="text-sm inline-flex">
                      {/* Rating */}
                      <div className="flex items-center mr-1">
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-yellow-400 dark:text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-yellow-400 dark:text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-yellow-400 dark:text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-yellow-400 dark:text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-yellow-400 dark:text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                      {/* End Rating */}
                      Batu, Malang
                    </div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <p className="">4.2/5 (4,898 Reviews)</p>
                      </div>
                    </div>
                    <br />
                    <span className="badge light danger line-through">
                      IDR 954,167
                    </span>
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 644,643
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
                    src={hotel4}
                    className="aspect-video rounded-b-none"
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h3 className="text-sm font-bold inline-flex">
                      Hotel Osaka PIK2
                    </h3>
                    <div className="text-sm inline-flex">
                      {/* Rating */}
                      <div className="flex items-center mr-1">
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-yellow-400 dark:text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-yellow-400 dark:text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-yellow-400 dark:text-yellow-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-gray-300 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg
                          className="flex-shrink-0 w-4 h-4 text-gray-300 dark:text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </div>
                      {/* End Rating */}
                      Kosambi, Tangerang
                    </div>
                    <div className="text-sm">
                      <div className="relative flex">
                        <p className="">4.5/5 (1,298 Reviews)</p>
                      </div>
                    </div>
                    <br />
                    <span className="badge light danger line-through">
                      IDR 384,712
                    </span>
                    <div className="flex gap-2">
                      {/* <span className="badge light info">Start From</span> */}
                      <span className="badge light success text-xl">
                        IDR 359,654
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

export default PopularComponent;
