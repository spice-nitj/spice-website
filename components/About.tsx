import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export default function About() {
  return (
    <div className='relative bg-gray-50'>
      <div className='h-56 bg-orange-500 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2 lg:rounded-r-3xl lg:overflow-hidden'>
        <img
          className='h-full w-full object-cover'
          src='/images/team.jpg'
          alt='Support team'
        />
      </div>
      <div className='relative mx-auto max-w-7xl py-8 px-6 sm:py-12 lg:py-16'>
        <div className='mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10'>
          <div>
            <div className='flex h-12 w-12 items-center justify-center rounded-md bg-orange-500 text-white'>
              <WrenchScrewdriverIcon className='h-6 w-6' aria-hidden='true' />
            </div>
          </div>
          <h2 className='mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            About SPICE
          </h2>
          <p className='mt-6 text-lg text-gray-500'>
            At SPICE, we believe that technology has the power to transform our
            world, and we are dedicated to promoting the advancement of
            instrumentation and control engineering. Our society brings together
            professionals from a wide range of industries, including aerospace,
            automotive, defense, and energy, and provides them with the
            resources and support they need to succeed.
          </p>
          <div className='mt-8 overflow-hidden'>
            <dl className='-mx-8 -mt-8 flex flex-wrap'>
              <div className='flex flex-col px-8 pt-8'>
                <dt className='order-2 text-base font-medium text-gray-500'>
                  Delivery
                </dt>
                <dd className='order-1 text-2xl font-bold text-orange-500 sm:text-3xl sm:tracking-tight'>
                  24/7
                </dd>
              </div>
              <div className='flex flex-col px-8 pt-8'>
                <dt className='order-2 text-base font-medium text-gray-500'>
                  Pepperoni
                </dt>
                <dd className='order-1 text-2xl font-bold text-orange-500 sm:text-3xl sm:tracking-tight'>
                  99.9%
                </dd>
              </div>
              <div className='flex flex-col px-8 pt-8'>
                <dt className='order-2 text-base font-medium text-gray-500'>
                  Calories
                </dt>
                <dd className='order-1 text-2xl font-bold text-orange-500 sm:text-3xl sm:tracking-tight'>
                  100k+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
