import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Poppins } from "next/font/google";



export const metadata: Metadata = {
  title: 'Sobreira Odontologia | Cuidado Humano e Excelência Dental',
  description: 'Descubra a Sobreira Odontologia, um espaço seguro e acolhedor para pacientes ansiosos. Dra. Daniella Montenegro oferece cuidado humanizado e tratamentos de alta qualidade em um ambiente de luxo.',
  keywords: ["odontologia, dentista, clínica dental, cuidado humanizado, pacientes ansiosos, trauma dental, estética dental, clareamento, lentes de contato, Dr Daniella Montenegro, premium, luxo, São Paulo"],
  openGraph: {
    "title": "Sobreira Odontologia | Cuidado Humano e Excelência Dental",
    "description": "Descubra a Sobreira Odontologia, um espaço seguro e acolhedor para pacientes ansiosos. Dra. Daniella Montenegro oferece cuidado humanizado e tratamentos de alta qualidade em um ambiente de luxo.",
    "url": "https://www.sobreiraodontologia.com.br",
    "siteName": "Sobreira Odontologia",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/beautiful-girl-dentist_1157-18591.jpg",
        "alt": "Dra. Daniella Montenegro com paciente"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Sobreira Odontologia | Cuidado Humano e Excelência Dental",
    "description": "Descubra a Sobreira Odontologia, um espaço seguro e acolhedor para pacientes ansiosos. Dra. Daniella Montenegro oferece cuidado humanizado e tratamentos de alta qualidade em um ambiente de luxo.",
    "images": [
      "http://img.b2bpic.net/free-photo/beautiful-girl-dentist_1157-18591.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${poppins.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
