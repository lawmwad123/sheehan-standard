import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sheehan Standard Primary School | Excellence in Education",
  description: "Sheehan Standard Primary School in Lubaga, Kampala offers quality primary education with both day and boarding facilities. Join us in nurturing young minds through academic excellence and character building.",
  keywords: ["primary school kampala", "boarding school uganda", "best primary school lubaga", "sheehan standard", "primary education kampala"],
  openGraph: {
    title: "Sheehan Standard Primary School",
    description: "Excellence in Education - Day & Boarding School in Kampala",
    images: [
      {
        url: "/images/students.jpg",
        width: 1200,
        height: 630,
        alt: "Sheehan Standard Primary School",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
