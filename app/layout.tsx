import type { Metadata } from "next";
import { Cormorant_Garamond, Instrument_Serif } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Laura Roberton",
    template: "%s — Laura Roberton",
  },
  description:
    "Laura Roberton — art practitioner and Master of Architecture graduate exploring architecture, landscape and nature through botanical relief sculpture. A publicity portfolio, not a shop.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-serif">
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
