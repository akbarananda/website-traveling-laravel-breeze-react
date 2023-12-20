import React from "react";
import profile from "@/assets/img/profile.jpg";
import tiket from "@/assets/img/tiketlogo.png";
import tiket2 from "@/assets/img/tiketlogo2.png";
import tiket3 from "@/assets/img/tiketlogo3.png";
import { Link, Head } from '@inertiajs/react';
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import Footer2Component from "./Footer2Component";

const AboutComponent = () => {
  return (
    <div>
      <NavbarComponent />
      {/* CTA Section: Simple With Illustration */}
      <div className="bg-white dark:text-gray-100 dark:bg-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 container xl:max-w-7xl mx-auto px-4 py-10 lg:px-8 lg:py-32">
          <div className="flex items-center lg:justify-start text-blue-500">
            {/* <svg viewBox="0 0 753 480.951" xmlns="http://www.w3.org/2000/svg" className="w-full"><path d="M149.18 480.567l-2-.039a463.833 463.833 0 017.1-66.287c8.648-46.88 23.029-77.67 42.743-91.512l1.148 1.637C152.12 356.7 149.203 479.332 149.18 480.567zM174.18 480.089l-2-.04c.043-2.214 1.293-54.413 21.843-68.841l1.148 1.637c-19.72 13.845-20.981 66.711-20.991 67.244z" fill="#374151" /><circle cx="209.549" cy="314.548" r={10} fill="currentColor" /><circle cx="204.597" cy="400.548" r={10} fill="currentColor" /><path d="M169.519 330.542c1.879 12.004-3.02 22.74-3.02 22.74s-7.945-8.725-9.824-20.729 3.019-22.74 3.019-22.74 7.945 8.725 9.825 20.73zM202.206 359.696c-11.493 3.942-22.919.99-22.919.99s7.208-9.344 18.7-13.287 22.92-.99 22.92-.99-7.208 9.345-18.701 13.287zM202.575 435.857a31.135 31.135 0 01-16.064.694 28.374 28.374 0 0129.172-10.006 31.134 31.134 0 01-13.108 9.312z" fill="#374151" /><path fill="#9e616a" d="M606.671 467.453h-13.14l-6.251-50.685 19.394.001-.003 50.684z" /><path d="M610.023 480.19h-42.37v-.537a16.493 16.493 0 0116.491-16.491h.001l25.878.001z" fill="#374151" /><path fill="#9e616a" d="M525.57 467.453h-13.141l-6.251-50.685 19.394.001-.002 50.684z" /><path d="M528.921 480.19h-42.37v-.537a16.493 16.493 0 0116.491-16.491h.002l25.878.001z" fill="#374151" /><path d="M492.789 183.616l-18.2-2.812-5.88 9.464-63.272 16.129.172.872a11.904 11.904 0 102.587 12.31l76.625-15.982zM674.554 172.347a11.855 11.855 0 00-4.375.841l.363-.633-80.444-41.58-10.967 17.73 83.635 37.125a11.9 11.9 0 1011.788-13.483z" fill="#9e616a" /><circle cx="736.071" cy="267.733" r="35.538" transform="rotate(-80.783 501.187 294.317)" fill="#374151" /><circle cx="512.264" cy="70.77" r="22.671" fill="#a0616a" /><ellipse cx="512.571" cy="48.405" rx="24.509" ry="14.705" fill="#374151" /><circle cx="515.021" cy="22.671" r="14.705" fill="#374151" /><path d="M495.414 14.705A14.707 14.707 0 01508.588.08a14.87 14.87 0 00-1.532-.08 14.705 14.705 0 000 29.41 14.87 14.87 0 001.532-.079 14.707 14.707 0 01-13.174-14.626zM500.478 127.051l1.828-17.576s24.806-16.347 33.236-6.686l50.388 86.213s31.323 11.136 30.216 53.658l-1.498 205.54-35.517 3.894-21.568-160.25-19.487 166.026-41.35-1.295 3.72-109.376 19.717-106.027-.188-35.182-8.684-14.199s-15.908-6.39-16.352-24.45l-.349-25.386z" fill="#374151" /><path d="M526.488 107.615l.49-8.24s75.031 19.773 69.079 33.91-17.113 18.6-17.113 18.6l-43.155-17.112zM506.88 128.117l-5.645-6.02s-45.032 63.188-31.414 70.248 25.052 3.354 25.052 3.354l22.228-40.757z" fill="#374151" /><path d="M416.745 333.873l282.56-56.404-23.613-118.297-282.561 56.404z" fill="#fff" /><path d="M701.618 279.011l-286.416 57.174-24.384-122.152 286.417-57.173zm-283.33 52.55l278.705-55.635-22.844-114.441-278.706 55.634z" fill="#9CA3AF" /><path fill="#9CA3AF" d="M427.715 242.718l228.672-45.647 1.19 5.962-228.672 45.647zM432.349 265.933l228.672-45.647 1.19 5.962-228.672 45.647zM437.01 289.282l228.672-45.647 1.19 5.962L438.2 295.244z" /><path d="M547.129 234.12l-7.998 1.597a2.25 2.25 0 01-2.643-1.764l-3.781-18.942a2.25 2.25 0 011.763-2.643l7.998-1.597a2.25 2.25 0 012.643 1.764l3.781 18.942a2.25 2.25 0 01-1.763 2.643zM638.227 240.075l-7.998 1.597a2.25 2.25 0 01-2.643-1.764l-3.78-18.942a2.25 2.25 0 011.763-2.643l7.997-1.597a2.25 2.25 0 012.643 1.764l3.781 18.942a2.25 2.25 0 01-1.763 2.643zM588.893 274.202l-7.997 1.597a2.25 2.25 0 01-2.643-1.763l-3.782-18.943a2.25 2.25 0 011.764-2.643l7.998-1.597a2.25 2.25 0 012.643 1.764l3.78 18.942a2.25 2.25 0 01-1.763 2.643z" fill="currentColor" /><path d="M752 480.951H1a1 1 0 010-2h751a1 1 0 010 2z" fill="#374151" /></svg> */}
            <img width={450} height={450} src={tiket} alt="" />
          </div>
          <div className="flex items-center text-center lg:text-left">
            <div className="space-y-8">
              {/* Heading */}
              <div>
                <h2 className="text-2xl font-black text-black mb-4 dark:text-white">
                  Book Tickets and Plan Your Holiday with Ease
                </h2>
                <h3 className="text-xl mt-10 leading-relaxed font-bold text-gray-700 dark:text-gray-300">
                  Easy to Buy Tickets and Hotels.
                </h3>
                <p className="text-lg leading-relaxed font-nnormal text-gray-700 dark:text-gray-300">
                  Buy flight tickets, hotels, trains, car rental, also tickets
                  for event and attraction immediately on TravelingYUK.com app
                  and website.{" "}
                  <Link
                    to="/"
                    className="ml-0.5 text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Click here
                  </Link>
                </p>
                <h3 className="text-xl mt-5 leading-relaxed font-bold text-gray-700 dark:text-gray-300">
                  Various Top Products.
                </h3>
                <p className="text-lg leading-relaxed font-nnormal text-gray-700 dark:text-gray-300">
                  Get various airlines with complete routes around the world and
                  find many hotels in Asia. You also can get train tickets, book
                  car rental, and entertaiment tickets.
                </p>
                <h3 className="text-xl mt-5 leading-relaxed font-bold text-gray-700 dark:text-gray-300">
                  Multiple Payment Methods.
                </h3>
                <p className="text-lg leading-relaxed font-nnormal text-gray-700 dark:text-gray-300">
                  Choose your preferred payment methods, including via bank
                  transfer, ATM transfer, Virtual Account (VA), debit card
                  online, and credit card. You can also buy your tickets or
                  hotels by installment. The process is easy and simple!
                </p>
              </div>
              {/* END Heading */}
            </div>
          </div>
        </div>
      </div>
      {/* END CTA Section: Simple With Illustration */}

      {/* CTA Section: Simple With Illustration */}
      <div className="bg-white dark:text-gray-100 dark:bg-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-10">
          <div className="flex items-center text-center lg:text-left">
            <div className="space-y-8">
              {/* Heading */}
              <div>
                <h2 className="text-2xl font-black text-black mb-4 dark:text-white">
                  Plenty of Promo and Benefits, Save Even More!
                </h2>
                <h3 className="text-xl mt-10 leading-relaxed font-bold text-gray-700 dark:text-gray-300">
                  Get Special Promo & Discount!
                </h3>
                <p className="text-lg leading-relaxed font-nnormal text-gray-700 dark:text-gray-300">
                  Find discounts for your favorite flights and hotels to save
                  more for your upcoming vacation! Make your dream vacation come
                  true with a special promo provided by TravelingYUK.com. There
                  is no reason to delay your vacation!
                </p>
                <h3 className="text-xl mt-5 leading-relaxed font-bold text-gray-700 dark:text-gray-300">
                  Blibli Tiket Rewards Benefits.
                </h3>
                <p className="text-lg leading-relaxed font-nnormal text-gray-700 dark:text-gray-300">
                  Enjoy the Blibli Tiket Rewards benefits in Blibli Tiket Points
                  that you can redeem with discounts. Also, get other exclusive
                  benefits from your purchases!
                </p>
                <h3 className="text-xl mt-5 leading-relaxed font-bold text-gray-700 dark:text-gray-300">
                  24/7 Customer Care.
                </h3>
                <p className="text-lg leading-relaxed font-nnormal text-gray-700 dark:text-gray-300">
                  Our 24/7 Customer Care is always ready to help you. We’re here
                  to ensure you to get the best services from TravelingYUK.com.
                </p>
              </div>
              {/* END Heading */}
            </div>
          </div>
          <div className="flex items-center lg:justify-start ml-20 text-blue-500">
            {/* <svg viewBox="0 0 753 480.951" xmlns="http://www.w3.org/2000/svg" className="w-full"><path d="M149.18 480.567l-2-.039a463.833 463.833 0 017.1-66.287c8.648-46.88 23.029-77.67 42.743-91.512l1.148 1.637C152.12 356.7 149.203 479.332 149.18 480.567zM174.18 480.089l-2-.04c.043-2.214 1.293-54.413 21.843-68.841l1.148 1.637c-19.72 13.845-20.981 66.711-20.991 67.244z" fill="#374151" /><circle cx="209.549" cy="314.548" r={10} fill="currentColor" /><circle cx="204.597" cy="400.548" r={10} fill="currentColor" /><path d="M169.519 330.542c1.879 12.004-3.02 22.74-3.02 22.74s-7.945-8.725-9.824-20.729 3.019-22.74 3.019-22.74 7.945 8.725 9.825 20.73zM202.206 359.696c-11.493 3.942-22.919.99-22.919.99s7.208-9.344 18.7-13.287 22.92-.99 22.92-.99-7.208 9.345-18.701 13.287zM202.575 435.857a31.135 31.135 0 01-16.064.694 28.374 28.374 0 0129.172-10.006 31.134 31.134 0 01-13.108 9.312z" fill="#374151" /><path fill="#9e616a" d="M606.671 467.453h-13.14l-6.251-50.685 19.394.001-.003 50.684z" /><path d="M610.023 480.19h-42.37v-.537a16.493 16.493 0 0116.491-16.491h.001l25.878.001z" fill="#374151" /><path fill="#9e616a" d="M525.57 467.453h-13.141l-6.251-50.685 19.394.001-.002 50.684z" /><path d="M528.921 480.19h-42.37v-.537a16.493 16.493 0 0116.491-16.491h.002l25.878.001z" fill="#374151" /><path d="M492.789 183.616l-18.2-2.812-5.88 9.464-63.272 16.129.172.872a11.904 11.904 0 102.587 12.31l76.625-15.982zM674.554 172.347a11.855 11.855 0 00-4.375.841l.363-.633-80.444-41.58-10.967 17.73 83.635 37.125a11.9 11.9 0 1011.788-13.483z" fill="#9e616a" /><circle cx="736.071" cy="267.733" r="35.538" transform="rotate(-80.783 501.187 294.317)" fill="#374151" /><circle cx="512.264" cy="70.77" r="22.671" fill="#a0616a" /><ellipse cx="512.571" cy="48.405" rx="24.509" ry="14.705" fill="#374151" /><circle cx="515.021" cy="22.671" r="14.705" fill="#374151" /><path d="M495.414 14.705A14.707 14.707 0 01508.588.08a14.87 14.87 0 00-1.532-.08 14.705 14.705 0 000 29.41 14.87 14.87 0 001.532-.079 14.707 14.707 0 01-13.174-14.626zM500.478 127.051l1.828-17.576s24.806-16.347 33.236-6.686l50.388 86.213s31.323 11.136 30.216 53.658l-1.498 205.54-35.517 3.894-21.568-160.25-19.487 166.026-41.35-1.295 3.72-109.376 19.717-106.027-.188-35.182-8.684-14.199s-15.908-6.39-16.352-24.45l-.349-25.386z" fill="#374151" /><path d="M526.488 107.615l.49-8.24s75.031 19.773 69.079 33.91-17.113 18.6-17.113 18.6l-43.155-17.112zM506.88 128.117l-5.645-6.02s-45.032 63.188-31.414 70.248 25.052 3.354 25.052 3.354l22.228-40.757z" fill="#374151" /><path d="M416.745 333.873l282.56-56.404-23.613-118.297-282.561 56.404z" fill="#fff" /><path d="M701.618 279.011l-286.416 57.174-24.384-122.152 286.417-57.173zm-283.33 52.55l278.705-55.635-22.844-114.441-278.706 55.634z" fill="#9CA3AF" /><path fill="#9CA3AF" d="M427.715 242.718l228.672-45.647 1.19 5.962-228.672 45.647zM432.349 265.933l228.672-45.647 1.19 5.962-228.672 45.647zM437.01 289.282l228.672-45.647 1.19 5.962L438.2 295.244z" /><path d="M547.129 234.12l-7.998 1.597a2.25 2.25 0 01-2.643-1.764l-3.781-18.942a2.25 2.25 0 011.763-2.643l7.998-1.597a2.25 2.25 0 012.643 1.764l3.781 18.942a2.25 2.25 0 01-1.763 2.643zM638.227 240.075l-7.998 1.597a2.25 2.25 0 01-2.643-1.764l-3.78-18.942a2.25 2.25 0 011.763-2.643l7.997-1.597a2.25 2.25 0 012.643 1.764l3.781 18.942a2.25 2.25 0 01-1.763 2.643zM588.893 274.202l-7.997 1.597a2.25 2.25 0 01-2.643-1.763l-3.782-18.943a2.25 2.25 0 011.764-2.643l7.998-1.597a2.25 2.25 0 012.643 1.764l3.78 18.942a2.25 2.25 0 01-1.763 2.643z" fill="currentColor" /><path d="M752 480.951H1a1 1 0 010-2h751a1 1 0 010 2z" fill="#374151" /></svg> */}
            <img width={450} height={450} src={tiket2} alt="" />
          </div>
        </div>
      </div>
      {/* END CTA Section: Simple With Illustration */}

      {/* CTA Section: Simple With Illustration */}
      <div className="bg-white dark:text-gray-100 dark:bg-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 container xl:max-w-7xl mx-auto px-4 py-10 lg:px-10  lg:py-32">
          <div className="flex items-center lg:justify-start text-blue-500">
            {/* <svg viewBox="0 0 753 480.951" xmlns="http://www.w3.org/2000/svg" className="w-full"><path d="M149.18 480.567l-2-.039a463.833 463.833 0 017.1-66.287c8.648-46.88 23.029-77.67 42.743-91.512l1.148 1.637C152.12 356.7 149.203 479.332 149.18 480.567zM174.18 480.089l-2-.04c.043-2.214 1.293-54.413 21.843-68.841l1.148 1.637c-19.72 13.845-20.981 66.711-20.991 67.244z" fill="#374151" /><circle cx="209.549" cy="314.548" r={10} fill="currentColor" /><circle cx="204.597" cy="400.548" r={10} fill="currentColor" /><path d="M169.519 330.542c1.879 12.004-3.02 22.74-3.02 22.74s-7.945-8.725-9.824-20.729 3.019-22.74 3.019-22.74 7.945 8.725 9.825 20.73zM202.206 359.696c-11.493 3.942-22.919.99-22.919.99s7.208-9.344 18.7-13.287 22.92-.99 22.92-.99-7.208 9.345-18.701 13.287zM202.575 435.857a31.135 31.135 0 01-16.064.694 28.374 28.374 0 0129.172-10.006 31.134 31.134 0 01-13.108 9.312z" fill="#374151" /><path fill="#9e616a" d="M606.671 467.453h-13.14l-6.251-50.685 19.394.001-.003 50.684z" /><path d="M610.023 480.19h-42.37v-.537a16.493 16.493 0 0116.491-16.491h.001l25.878.001z" fill="#374151" /><path fill="#9e616a" d="M525.57 467.453h-13.141l-6.251-50.685 19.394.001-.002 50.684z" /><path d="M528.921 480.19h-42.37v-.537a16.493 16.493 0 0116.491-16.491h.002l25.878.001z" fill="#374151" /><path d="M492.789 183.616l-18.2-2.812-5.88 9.464-63.272 16.129.172.872a11.904 11.904 0 102.587 12.31l76.625-15.982zM674.554 172.347a11.855 11.855 0 00-4.375.841l.363-.633-80.444-41.58-10.967 17.73 83.635 37.125a11.9 11.9 0 1011.788-13.483z" fill="#9e616a" /><circle cx="736.071" cy="267.733" r="35.538" transform="rotate(-80.783 501.187 294.317)" fill="#374151" /><circle cx="512.264" cy="70.77" r="22.671" fill="#a0616a" /><ellipse cx="512.571" cy="48.405" rx="24.509" ry="14.705" fill="#374151" /><circle cx="515.021" cy="22.671" r="14.705" fill="#374151" /><path d="M495.414 14.705A14.707 14.707 0 01508.588.08a14.87 14.87 0 00-1.532-.08 14.705 14.705 0 000 29.41 14.87 14.87 0 001.532-.079 14.707 14.707 0 01-13.174-14.626zM500.478 127.051l1.828-17.576s24.806-16.347 33.236-6.686l50.388 86.213s31.323 11.136 30.216 53.658l-1.498 205.54-35.517 3.894-21.568-160.25-19.487 166.026-41.35-1.295 3.72-109.376 19.717-106.027-.188-35.182-8.684-14.199s-15.908-6.39-16.352-24.45l-.349-25.386z" fill="#374151" /><path d="M526.488 107.615l.49-8.24s75.031 19.773 69.079 33.91-17.113 18.6-17.113 18.6l-43.155-17.112zM506.88 128.117l-5.645-6.02s-45.032 63.188-31.414 70.248 25.052 3.354 25.052 3.354l22.228-40.757z" fill="#374151" /><path d="M416.745 333.873l282.56-56.404-23.613-118.297-282.561 56.404z" fill="#fff" /><path d="M701.618 279.011l-286.416 57.174-24.384-122.152 286.417-57.173zm-283.33 52.55l278.705-55.635-22.844-114.441-278.706 55.634z" fill="#9CA3AF" /><path fill="#9CA3AF" d="M427.715 242.718l228.672-45.647 1.19 5.962-228.672 45.647zM432.349 265.933l228.672-45.647 1.19 5.962-228.672 45.647zM437.01 289.282l228.672-45.647 1.19 5.962L438.2 295.244z" /><path d="M547.129 234.12l-7.998 1.597a2.25 2.25 0 01-2.643-1.764l-3.781-18.942a2.25 2.25 0 011.763-2.643l7.998-1.597a2.25 2.25 0 012.643 1.764l3.781 18.942a2.25 2.25 0 01-1.763 2.643zM638.227 240.075l-7.998 1.597a2.25 2.25 0 01-2.643-1.764l-3.78-18.942a2.25 2.25 0 011.763-2.643l7.997-1.597a2.25 2.25 0 012.643 1.764l3.781 18.942a2.25 2.25 0 01-1.763 2.643zM588.893 274.202l-7.997 1.597a2.25 2.25 0 01-2.643-1.763l-3.782-18.943a2.25 2.25 0 011.764-2.643l7.998-1.597a2.25 2.25 0 012.643 1.764l3.78 18.942a2.25 2.25 0 01-1.763 2.643z" fill="currentColor" /><path d="M752 480.951H1a1 1 0 010-2h751a1 1 0 010 2z" fill="#374151" /></svg> */}
            <img width={450} height={450} src={tiket3} alt="" />
          </div>
          <div className="flex items-center text-center lg:text-left">
            <div className="space-y-8">
              {/* Heading */}
              <div>
                <h2 className="text-2xl font-black text-black mb-4 dark:text-white">
                  Book the Cheap Flight Tickets to Your Favorite Destinations
                </h2>
                <p className="text-lg leading-relaxed font-nnormal text-gray-700 dark:text-gray-300">
                  Do you want to find a cheap flight ticket? Now you can book
                  the cheap flight ticket to your favorite destination right on
                  your fingertips. TravelingYUK.com is the pioneer of the online
                  travel agent (OTA) in Indonesia which always gives the best
                  innovation to make you easier to book flight ticket via
                  online. Search the cheap flight ticket to thousands of routes
                  for both domestic and international destinations over the
                  world. You could also compare the flight ticket prices at
                  TravelingYUK.com. Besides that, buy online flight ticket
                  through TravelingYUK.com will give you more advantages. If you
                  have done a transaction at TravelingYUK.com, you can get a
                  special reward named tiket Points. The point you earn can be
                  redeemed with the exclusive gift or special discount from
                  TravelingYUK.com
                </p>
              </div>
              {/* END Heading */}
            </div>
          </div>
        </div>
      </div>
      {/* END CTA Section: Simple With Illustration */}

      {/* CTA Section: Simple With Illustration */}
      <div className="bg-white dark:text-gray-100 dark:bg-gray-800">
        <div className="container xl:max-w-7xl mx-auto px-4 py-10 lg:px-10  lg:py-10">
          <div className="flex items-center text-center lg:text-left">
            <div className="space-y-8">
              {/* Heading */}
              <div>
                <h2 className="text-2xl font-black text-black mb-4 dark:text-white">
                  Book the Cheap Flight Tickets to Your Favorite Destinations
                </h2>
                <p className="text-lg leading-relaxed font-nnormal text-gray-700 dark:text-gray-300">
                  Book your tickets and hotel now, then pay the installment in
                  just one click. Yup, easy-peasy as that! You can use this
                  installment program to buy flight tickets, hotels,
                  entertainment tickets, and rent a car. 3, 6, or 12 months
                  installment? You choose! This installment program is valid for
                  bank card holders partnered with TravelingYUK.com.
                </p>
              </div>
              <div>
                <Link
                  to="/"
                  className="ml-0.5 text-xl font-bold text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  MORE
                </Link>
              </div>
              {/* END Heading */}
            </div>
          </div>
        </div>
      </div>
      {/* END CTA Section: Simple With Illustration */}

      {/* CTA Section: Simple With Illustration */}
      <div className="bg-white dark:text-gray-100 dark:bg-gray-800">
        <div className="container xl:max-w-7xl mx-auto px-4 py-10 lg:px-10  lg:py-10">
          <div className="flex items-center text-center lg:text-left">
            <div className="space-y-8">
              {/* Heading */}
              <div>
                <h2 className="text-2xl font-black text-black mb-4 dark:text-white">
                  Partners of TravelingYUK.com
                </h2>
                <p className="text-lg leading-relaxed font-nnormal text-gray-700 dark:text-gray-300">
                  You are our priority! Therefore, TravelingYUK.com has been
                  collaborated with various transportation service providers,
                  hotel chains, car rentals, and entertainment ticket providers
                  to ensure your holiday is always comfortable and enjoyable
                </p>
              </div>
              <div>
                <Link
                  to="/"
                  className="ml-0.5 text-xl font-bold text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  MORE
                </Link>
              </div>
              {/* END Heading */}
            </div>
          </div>
        </div>
      </div>
      {/* END CTA Section: Simple With Illustration */}

      {/* Divider: With Heading */}
      <h3 className="flex items-center mx-48 mt-10">
        <span
          aria-hidden="true"
          className="grow bg-gray-200 rounded h-0.5 dark:bg-gray-700/75"
        />
        <span className="text-lg font-medium mx-3">
          <h2 className="text-3xl font-black text-black mb-4 dark:text-white">
            Meet our talented team
          </h2>
        </span>
        <span
          aria-hidden="true"
          className="grow bg-gray-200 rounded h-0.5 dark:bg-gray-700/75"
        />
      </h3>
      {/* END Divider: With Heading */}

      {/* Team Section: Circle Photos with Title */}
      <div className="bg-white dark:text-gray-100 dark:bg-gray-900">
        <div className="space-y-16 container xl:max-w-7xl mx-auto mb-16 px-4 py-16 lg:px-8 lg:py-8">
          {/* Heading */}
          <div className="text-center">
            <h3 className="text-xl leading-relaxed font-medium text-gray-700 lg:w-2/3 mx-auto dark:text-gray-300">
              They are working nonstop behind the scenes to help you build
              better products, web services and websites.
            </h3>
          </div>
          {/* END Heading */}

          {/* Team */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 text-center">
            <div>
              <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5 dark:bg-gray-700/75 dark:shadow-gray-950">
                {/* <img
                  src="https://cdn.tailkit.com/media/placeholders/avatar-iFgRcqHznqg-320x320.jpg"
                  alt="User Avatar"
                  className="inline-block w-28 h-28 rounded-full"
                /> */}
              </span>
              <h4 className="text-xl font-bold mb-0.5"> </h4>
              <p className="font-medium text-gray-600 dark:text-gray-400">
                {/* Product Design */}
              </p>
            </div>
            <div>
              <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5 dark:bg-gray-700/75 dark:shadow-gray-950">
                <img
                  src={profile}
                  alt="User Avatar"
                  className="inline-block w-28 h-28 rounded-full"
                />
              </span>
              <h4 className="text-xl font-bold mb-0.5">Akbar Ananda A.</h4>
              <p className="font-medium text-gray-600 dark:text-gray-400">
                Frontend Developer
              </p>
            </div>
            <div>
              <span className="inline-block rounded-full bg-white shadow-lg p-2 mb-5 dark:bg-gray-700/75 dark:shadow-gray-950">
                {/* <img
                  src="https://cdn.tailkit.com/media/placeholders/avatar-mEZ3PoFGs_k-320x320.jpg"
                  alt="User Avatar"
                  className="inline-block w-28 h-28 rounded-full"
                /> */}
              </span>
              <h4 className="text-xl font-bold mb-0.5"> </h4>
              <p className="font-medium text-gray-600 dark:text-gray-400">
                {/* Web Developer */}
              </p>
            </div>
          </div>
          {/* END Team */}
        </div>
      </div>
      {/* END Team Section: Circle Photos with Title */}

      <FooterComponent />
      <Footer2Component />
    </div>
  );
};

export default AboutComponent;
