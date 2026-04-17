import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { TimelineProvider } from "@/context/TimelineContext";
// নিশ্চিত করুন যে components/Navbar.jsx ফাইলটি তৈরি করেছেন

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper - Friendship Tracker",
  description: "Track your friendships and stay connected.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <TimelineProvider>
        {/* ন্যাভবারটি এখানে থাকবে যাতে সব পেজে এটি দেখা যায় */}
        <Header></Header>

        {/* main ট্যাগে flex-grow দেওয়া হয়েছে যাতে কন্টেন্ট কম থাকলেও ফুটার নিচে থাকে */}
        <main className="flex-grow">
          {children}
        </main>

        <Footer></Footer>
        </TimelineProvider>

        {/* যখন ফুটার বানাবেন, তখন এখানে ফুটার কম্পোনেন্টটি বসাবেন */}
      </body>
    </html>
  );
}