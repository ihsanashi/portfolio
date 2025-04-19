import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL('https://cdn.sanity.io/images/d4bje89x/production/**')],
  },
};

export default withPayload(nextConfig);
