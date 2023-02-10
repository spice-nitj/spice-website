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
    <div className='bg-gray-50'>
      <div className='mx-auto max-w-7xl py-16 px-6 lg:px-8'>
        <div className='overflow-hidden rounded-lg bg-orange-500 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4'>
          <div className='px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20'>
            <div className='lg:self-center'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                <span className='block'>Ready to dive in?</span>
                <span className='block'>Start your free trial today.</span>
              </h2>
              <p className='mt-4 text-lg leading-6 text-orange-200'>
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla nec.
              </p>
              <a
                href='#'
                className='mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-orange-600 shadow hover:bg-orange-50'>
                Sign up for free
              </a>
            </div>
          </div>
          <div className='aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1'>
            <img
              className='opacity-70 translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20'
              src='/logo/spice-logo.svg'
              alt='App screenshot'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
