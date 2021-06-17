import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'd4bje89x',
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
});
