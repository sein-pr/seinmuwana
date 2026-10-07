/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/projects/automation-bots', destination: '/projects/rpa-automation-suite', permanent: true },
      { source: '/projects/user-access-app', destination: '/projects/user-access-management', permanent: true },
    ]
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
