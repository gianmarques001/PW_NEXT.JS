import Card from "@/componentes/Card";
import Titulo from "@/componentes/Titulo";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <nav className="flex gap-4 justify-between items-end bg-blue-500 w-full p-3">
        <h1 className="flex items-center gap-2 text-5xl  font-bold uppercase">
          Senac
        </h1>
        <a href="/sobre">Sobre</a>
      </nav>

      <Titulo>Músicas em alta</Titulo>
      <section className="flex flex-wrap gap-4 p-4 ">
        <Card titulo="Transformers" nota={2.3} />
        <Card titulo="Dinheiro fácil" nota={3} />
      </section>
    </main>
  );
}
