import Header from "@components/header";

export const metadata: Metadata = {
  title: "Angel Manzano - Software Developer Portfolio",
  description: "Angel Manzano's Portfolio, a Full-Stack Developer with a focus on React and Node.js.",
  keywords: "Full-Stack Developer, React Developer, Node.js, Portfolio, Web Development, UI/UX Designer, Software Engineer, Front-End Developer, Software Developer, Web Developer, Angel Manzano, Angel Gabriel Manzano Contreras, Angel Manzano Portfolio",
  openGraph: {
    title: "Angel Manzano - Software Developer Portfolio",
    description: "Angel Manzano's Portfolio, a Full-Stack Developer with a focus on React and Node.js.",
    url: "https://angel-manzano-portfolio.netlify.app/",
  },
  icons: {
    icon: "/favicon-am.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
