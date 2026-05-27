import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**",
    },  
  ],
}
  /* config options here */
};
export default withFlowbiteReact(nextConfig);