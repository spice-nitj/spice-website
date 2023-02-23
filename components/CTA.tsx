/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/



export default function CTA() {
  return (
<section className="overflow-hidden text-neutral-700">
<h2 className='text-3xl text-center  font-bold mb-5 tracking-tight text-gray-900 sm:text-4xl'>
              Gallery
            </h2>
  <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
    <div className="-m-1 flex flex-wrap md:-m-2">
      <div className="flex w-1/2 flex-wrap">
        <div className="w-1/2 p-1 md:p-2 ">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center shadow-md shadow-md"
            src="/images/events/01.jpg" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center shadow-md"
            src="/images/events/02.jpg" />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center shadow-md"
            src="/images/events/03.jpg" />
        </div>
      </div>
      <div className="flex w-1/2 flex-wrap">
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center shadow-md"
            src="/images/events/04.jpg" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center shadow-md"
            src="/images/events/05.jpg" />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center shadow-md"
            src="/images/events/06.jpg" />
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
