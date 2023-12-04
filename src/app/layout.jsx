import { Poppins } from "next/font/google";
import { Providers } from "@/config/redux/providers";
import ThemesLayout from "@/components/themes-layout/themes-layout";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Mi Gusto",
  description: "App Mi Gusto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <ThemesLayout>{children}</ThemesLayout>
        </Providers>
      </body>
    </html>
  );
}
