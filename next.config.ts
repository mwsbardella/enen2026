import type { NextConfig } from "next";

// `output: "standalone"` só é ativado ao gerar o pacote portátil offline
// (npm run build:portable define BUILD_PORTABLE=1). Assim `next dev`,
// `next build` e `next start` normais — a versão atual — seguem intactos.
const nextConfig: NextConfig = {
  output: process.env.BUILD_PORTABLE ? "standalone" : undefined,
};

export default nextConfig;
