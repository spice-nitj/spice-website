const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export default function OldEvents() {
  return (
    <div className='bg-gray-50'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold mb-5 tracking-tight text-gray-900 sm:text-4xl'>
              Recents Events
            </h2>
            <p className='mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4'>
              Some of our recent sessions that we have conducted. We have
              conducted many more events so far. Please visit our{' '}
              {/* Change instagram link here */}
              <a
                href='https://www.instagram.com/spice-nitj/'
                className='font-semibold text-orange-500 hover:text-orange-600'>
                Instagram Page
              </a>{' '}
              to see more.
            </p>
          </div>

          <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
            {callouts.map((callout) => (
              <div key={callout.name} className='group relative'>
                <div className='relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className='h-full w-full object-cover object-center'
                  />
                </div>
                <h3 className='mt-6 text-sm text-gray-500'>
                  <a href={callout.href}>
                    <span className='absolute inset-0' />
                    {callout.name}
                  </a>
                </h3>
                <p className='text-base font-semibold text-gray-900'>
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
