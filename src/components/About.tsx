'use client'

import Image from 'next/image'
import { useState } from 'react'
import { PenTool, FileText, Users } from "lucide-react";

interface FAQItem {
  title: string
  content: string
  icon: React.ReactNode
}

export default function Component() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems: FAQItem[] = [
    {
      title: "Create with Claude",
      content:
        "Draft and iterate on websites, graphics, documents, and code alongside your chat with Artifacts.",
      icon: <PenTool className="w-5 h-5" />, // Replacing the first SVG with the PenTool icon
    },
    {
      title: "Bring your knowledge",
      content:
        "Upload documents to give Claude context about your business, projects, and workflows.",
      icon: <FileText className="w-5 h-5" />, // Replacing the second SVG with the FileText icon
    },
    {
      title: "Share and collaborate with your team",
      content:
        "Invite your colleagues to chat with Claude and share knowledge.",
      icon: <Users className="w-5 h-5" />, // Replacing the third SVG with the Users icon
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="py-24 md:py-48 p-6 lg:p-12 mt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl text-center mb-4">Meet Claude</h1>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Claude is a next generation AI assistant built for work and
          trained to be safe, accurate, and secure.
        </p>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-2/3 h-[400px] relative rounded-lg overflow-hidden">
            <Image
              src="/demo.gif"
              alt="Conversation with Claude showing a scatter plot"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          
          <div className="w-full md:w-1/2 space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="flex items-center justify-between w-full text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                  </div>
                </button>
                <div
                  id={`faq-content-${index}`}
                  className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-700 pl-9">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}