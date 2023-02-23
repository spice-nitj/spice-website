const posts = [
  {
    title: 'Tricky Circuits',
    href: 'https://forms.gle/xtwquAbAgBkwD64s7',
    category: { name: 'Video', href: '#' },
    description:
      "Tricky Circuits is a competition where participants will be given circuits consisting of resistors, gates, and other electronic devices, and they must determine the output. The difficulty of the circuits increases as the event progresses.",
    date: 'Mar 10, 2020',
    datetime: '2023-02-25',
    imageUrl:
      '/images/events/robohunt.jpg',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: 'https://forms.gle/xtwquAbAgBkwD64s7',
      imageUrl:
        '/images/events/robohunt.jpg',
    },
  },
  {
    title: 'Robo Hunt',
    href: 'https://forms.gle/xtwquAbAgBkwD64s7',
    category: { name: 'Case Study', href: '#' },
    description:
      "Robo Hunt is a competition where teams will write the code of controller of small robots, known as bots, that are less than 6 kg in weight and no larger than 20x20x20 cm in size. The goal of the competition is for the teams' bots to successfully navigate a path and reach endpoints where balls are placed. The concept of the competition closely resembles that of a line-following robot",
    date: 'Feb 12, 2020',
    datetime: '2023-02-26',
    imageUrl:
      '/images/events/trickycircuit.jpg',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: 'https://forms.gle/xtwquAbAgBkwD64s7',
      imageUrl:
        '/images/events/trickycircuit.jpg',
    },
  },
]

export default function UpcomingEvents() {
  return (
    <>
    
<a href="#" className=" flex flex-col items-center mx-auto bg-white mt-20 rounded-xl mb-10 shadow md:flex-row w-[80%] shadow-xl ">
    <img className="object-cover w-full rounded-t-lg h-96  md:w-[40%] md:rounded-none md:rounded-l-lg" src="https://spice-nitj.web.app/images/afzal_sir2.png" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Our Faculty Advisor</h5>
        <p className="mb-3 font-normal text-gray-600 ">
        We have come a long way since last few years, but there is a long way to go, heights to reach and responsibilities to carry. This institute has germinated various seeds in the field of Instrumentation and Control.
         With the launch of events under such a dedicated club, we aim to grow at an exponential pace. But as it quoted "Facts not at all matter, Perception is Everything ".
        </p>
        <p className='text-sm font-medium text-orange-600'>
                    <span>D.r Afzal Sikander</span>
                  </p>
    </div>
</a>

    <div
      id='upcoming-events'
      className='relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28'>
      <div className='absolute inset-0'>
        
       

        <div className='h-1/3 bg-white sm:h-2/3' />
      </div>
      <div className='relative mx-auto max-w-7xl'>
        <div className='text-center'>
          <div className='text-sm relative rounded-full py-0.5 px-3 leading-6 bg-orange-500 text-white w-fit mx-auto'>
            <a className='whitespace-nowrap font-semibold'>
              Techniti Special Events
            </a>
          </div>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Upcoming Events
          </h2>
          <p className='mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4'>
            Join Us for Our Upcoming Events and Workshops
          </p>
        </div>
        <div className='mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none justify-around md:grid-flow-col'>
          {posts.map((post) => (
            <div
              key={post.title}
              className='flex flex-col md:w-[30vw] overflow-hidden rounded-xl shadow-lg'>
              <div className='flex-shrink-0'>
                <img
                  className='h-48 w-full object-cover'
                  src={post.imageUrl}
                  alt=''
                />
              </div>
              <div className='flex flex-1 flex-col justify-between bg-white p-6'>
                <div className='flex-1'>
                  <p className='text-sm font-medium text-orange-600'>
                    <span>{post.date}</span>
                  </p>
                  <a href={post.href} className='mt-2 block'>
                    <p className='text-xl font-semibold text-gray-900'>
                      {post.title}
                    </p>
                    <p className='mt-3 text-base text-gray-500 line-clamp-4'>
                      {post.description}
                    </p>
                  </a>
                </div>
                {/* <div className='mt-6 flex items-center'> 
                  <div className='flex-shrink-0'>
                    <a href={post.author.href}>
                      <span className='sr-only'>{post.author.name}</span>
                      <img
                        className='h-10 w-10 rounded-full'
                        src={post.author.imageUrl}
                        alt=''
                      />
                    </a>
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-900'>
                      <a href={post.author.href} className='hover:underline'>
                        {post.author.name}
                      </a>
                    </p>
                    <div className='flex space-x-1 text-sm text-gray-500'>
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden='true'>&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div> */}
                <a href={post.href}><button type="button" className="mt-5 text-white bg-orange-500 hover:bg-orange-700  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2  w-[40%] shadow-md">Register</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
