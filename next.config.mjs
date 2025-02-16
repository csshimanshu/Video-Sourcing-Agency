/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_APP_PASSWORD: process.env.EMAIL_APP_PASSWORD,
  },
}

export default nextConfig
