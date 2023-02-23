const people = [
  {
    name: 'Arpit Jha',
    role: 'Head',
    year: '3rd Year',
    imageUrl: '/team/arpit.jpg',
  },
  {
    name: 'Bhaskar Raj',
    role: 'Co-Head',
    year: '3rd Year',
    imageUrl: '/team/bhaskar.jpg',
  },
  {
    name: 'Rohit Yadav',
    role: 'Web dev head',
    year: '3rd Year',
    imageUrl: '/team/rohit.jpg',
  },
  {
    name: 'Gautam Singla',
    role: 'Web dev Co-head',
    year: '3rd Year',
    imageUrl: '/team/gautam.jpg',
  },
  {
    name: 'Aaryan Bhardwaj',
    role: 'Mentorship head',
    year: '3rd Year',
    imageUrl: '/team/nayraa.jpg',
  },
  {
    name: 'Manish Gupta',
    role: 'Graphics head',
    year: '3rd Year',
    imageUrl: '/team/mg.jpg',
  },
  {
    name: 'Yash Rastogi',
    role: 'Management Head',
    year: '3rd Year',
    imageUrl: '/team/yash.jpg',
  },
  {
    name: 'Ankit Kumar',
    role: 'mentorship',
    year: '3rd Year',
    imageUrl: '/team/ankit.jpg',
  },
  {
    name: 'S.Gargee',
    role: 'Content head',
    year: '3rd Year',
    imageUrl: '/team/gargee.jpg',
  },
  {
    name: 'Divyanshi',
    role: 'Social Media head',
    year: '3rd Year',
    imageUrl: '/team/divyanshi.jpg',
  },
  // More people...
]

export default function Team() {
  return (
    <div className='bg-gray-50 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-5xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Our team
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Join us today and become a part of the SPICE community. We welcome
            individuals from all backgrounds and experience levels, and we are
            dedicated to promoting diversity and inclusiveness in the field of
            instrumentation and control engineering.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-y-16 gap-x-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6'>
          {people.map((person, index) => (
            <li key={index}>
              <img
                className='mx-auto h-32 w-32 rounded-full drop-shadow-lg'
                src={person.imageUrl}
                alt=''
              />
              <h3 className='mt-6 text-base font-semibold leading-7 drop-shadow-2xl tracking-tight text-gray-900'>
                {person.name}
              </h3>
              <p className='text-sm leading-6 text-gray-600 '>
                {person.role} / {person.year}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
