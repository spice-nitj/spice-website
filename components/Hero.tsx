export default function Hero() {
  return (
    <div id='#main' className='relative bg-white'>
      <div className='mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8'>
        <div className='px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <img
              className='h-12 text-slate-900'
              src='/logo/spice-logo-dark.svg'
              alt='Your Company'
            />
            <div className='hidden sm:mt-32 sm:flex lg:mt-16'>
              <div className='relative rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                Explore our upcoming Techniti Events
                <a
                  href='#upcoming-events'
                  className='whitespace-nowrap font-semibold text-orange-500'>
                  <span className='absolute inset-0' aria-hidden='true' />
                  {'  '}Read more <span aria-hidden='true'>&rarr;</span>
                </a>
              </div>
            </div>
            <h1 className='mt-24 text-4xl font-bold leading-10 text-gray-900 sm:mt-10 sm:text-6xl'>
              Let&apos;s make tech more{' '}
              <span className='text-orange-500'>Spicy</span>
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              We are a vibrant community of technology and engineering
              professionals dedicated to advancing the field of instrumentation
              and control engineering.
            </p>
            <div className='mt-10 flex items-center gap-x-6'>
              {/* <a
                href='#'
                className='rounded-md bg-slate-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'>
                Learn More
              </a> */}
              <a
                href='#'
                className='text-base font-semibold leading-7 text-gray-900'>
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
        <div className='relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0'>
          <img
            className='aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:rounded-bl-3xl'
            src='https://wallpapershome.com/images/pages/pic_h/7749.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}
