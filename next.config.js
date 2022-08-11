/** @type {import('next').NextConfig} */

const env = {
  GRAPHQL_SERVER: "https://analytics-api.herokuapp.com/analytics",
}

const nextConfig = {
  reactStrictMode: true,
  env,
}

module.exports = nextConfig
