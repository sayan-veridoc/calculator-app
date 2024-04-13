import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.scss";

export const metadata = {
  title: "Calculator App",
  description: "Calculator App created using NextJS framework",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
