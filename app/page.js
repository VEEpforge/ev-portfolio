import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Hello, world!</h1>
      </main>
      <div className="flex flex-col gap-[24px] items-center justify-center h-screen">
        <h2 className="text-2xl font-bold">Welcome to my portfolio</h2>
        <p className="text-lg text-center">
          This is a simple example of a Next.js application with a header and footer.
        </p>
        <p className="text-lg text-center">
          You can customize this template to fit your needs.
        </p>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}
