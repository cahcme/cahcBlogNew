import Link from 'next/link';

export default function Header({ name, introduction }) {
  return (
    <header className="pt-20 pb-12">
      <div className="block w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-conic from-gradient-3 to-gradient-4" />
      <p className="text-2xl text-center dark:text-white">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
      <p className="text-lg text-center dark:text-gray-400 mt-2">
        {introduction}
      </p>
      {/* Añadimos el enlace a la página de "Sobre mí" */}
      <nav className="text-center mt-4">
        <Link href="/about">
          <a className="text-lg dark:text-gray-400 hover:underline">Sobre mí</a>
        </Link>
      </nav>
    </header>
  );
}
