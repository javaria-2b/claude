"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

export default function Hero() {
  const phrases = [
    "Do your best work",
    "Unleash your creativity",
    "Achieve your goals",
    "Innovate with AI",
  ];

  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setCurrentPhrase((prevPhrase) => {
          const currentIndex = phrases.indexOf(prevPhrase);
          return phrases[(currentIndex + 1) % phrases.length];
        });
        setFade(true); // Start fade-in after changing text
      }, 500); // Sync with the fade duration
    }, 2500); // Adjust this for the full cycle of animation

    return () => clearInterval(intervalId);
  }, []);

  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/bg.jpg", "/bg2.png", "/bg3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen mt-24 md:mt-0">
      {/* Left section (Text and Form) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <div className="flex justify-center mb-8 lg:mb-12">
              <svg
                className="w-6 h-6 lg:w-8 lg:h-8 text-[#FF6B00]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
              <span className="ml-2 text-xl lg:text-2xl font-semibold">COKARA</span>
            </div>

            {/* Apply fade class based on fade state */}
            <h1
              className={`text-3xl lg:text-4xl font-bold text-gray-800 min-h-[3rem] transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {currentPhrase}
            </h1>
          </div>

          <Card className="w-full bg-bg-[#FFFBF5] shadow-sm">
            <CardContent className="p-4 lg:p-6 space-y-4">
              <p className="text-center text-sm text-gray-600">
                Start using Claude for yourself or your team
              </p>

              <Button variant="outline" className="w-full justify-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                  <path fill="none" d="M1 1h22v22H1z" />
                </svg>
                Continue with Google
              </Button>

              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">OR</span>
              </div>

              <Input type="email" placeholder="name@yourcompany.com" />
              <Button className="w-full bg-[#C84C21] hover:bg-[#B33D15] text-white">
                Continue with email
              </Button>

              <p className="text-center text-xs text-gray-500">
                By continuing, you agree to Anthropic&apos;s{" "}
                <Link href="#" className="underline">
                  Consumer Terms
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline">
                  Usage Policy
                </Link>
                , and acknowledge their{" "}
                <Link href="#" className="underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button variant="link" className="text-gray-500">
              Learn more
              <svg
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Right section (Image Slideshow) */}
      <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
