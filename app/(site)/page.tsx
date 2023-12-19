import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Navbar from "../ui/Navbar";
import { inter } from "../ui/fonts";
import Framer from "../ui/framer/Framer";


export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Header />

      {/** framer */}
      <section className="bg-white dark:bg-bondi-950">
        <div className="max-w-screen-xl mx-auto lg:py-32 lg:px-6 py-8 px-4 flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl text-bondi-950 dark:text-bondi-100 font-bold">Testando o Framer</h1>
            <p className="dark:text-bondi-100" >O Framer é uma ferramenta para fazer animações</p>
            <a href="framer" className="dark:text-bondi-100 font-semibold " >Crie animações agora</a>
          </div>
          <div className="justify-center md:justify-end self-center py-12">
            <Framer />
          </div>
        </div>

      </section>

      <Footer />

    </main>




  )
}
