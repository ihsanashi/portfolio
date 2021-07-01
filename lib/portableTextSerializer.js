export const portableTextSerializer = {
  ul: (props) => <ul className='list-disc list-inside' {...props} />,
  ol: (props) => <ol className='list-decimal list-inside' {...props} />,
  li: (props) => (
    <li
      className='text-sm leading-relaxed text-gray-700 md:text-base'
      {...props}
    />
  ),
  h1: (props) => (
    <h1
      className='mb-5 text-5xl font-bold leading-relaxed text-gray-900 md:text-6xl'
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className='mb-5 text-4xl font-bold leading-relaxed text-gray-800 md:text-5xl'
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className='mb-5 text-3xl font-medium leading-relaxed text-gray-800 md:text-4xl'
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className='mb-4 text-2xl font-semibold leading-relaxed text-gray-700 md:text-3xl'
      {...props}
    />
  ),
  h5: (props) => (
    <h5
      className='mb-4 text-xl font-medium leading-relaxed text-gray-700 md:text-2xl'
      {...props}
    />
  ),
  h6: (props) => (
    <h6
      className='mb-4 text-lg font-semibold leading-relaxed text-gray-700 md:text-xl'
      {...props}
    />
  ),
  normal: (props) => (
    <p
      className='font-sans text-sm font-normal leading-normal text-gray-700 md:text-base'
      {...props}
    />
  ),
};
