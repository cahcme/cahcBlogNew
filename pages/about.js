import Layout, { GradientBackground } from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function AboutPage({ globalData }) {
  return (
    <Layout>
      <SEO title={`Sobre mí - ${globalData.name}`} />
      <Header name={globalData.name} introduction={globalData.introduction} />  {/* Header con la introducción */}
      
      <section className="px-6 py-8 md:px-0">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 dark:text-white">
          Sobre mí
        </h1>
        <p className="text-lg text-center mb-4 dark:text-gray-400">
          {globalData.introduction} {/* Introducción desde el archivo de datos global */}
        </p>
        <div className="text-lg text-center dark:text-gray-400">
          <p>
            Soy {globalData.name}, un apasionado de la ciberseguridad con
            experiencia en pruebas de penetración y análisis de vulnerabilidades.
          </p>
          <p>
            A lo largo de mi carrera, he trabajado con herramientas avanzadas de seguridad
            como Metasploit, Nmap, y Wireshark, entre otras. Mi objetivo es ayudar a las
            organizaciones a identificar y solucionar brechas de seguridad.
          </p>
          <p>
            ¡Gracias por visitar mi blog! Si tienes alguna pregunta o comentario, no dudes
            en ponerte en contacto.
          </p>
        </div>
      </section>
      
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground variant="large" className="absolute -top-32 opacity-30 dark:opacity-50" />
      <GradientBackground variant="small" className="absolute bottom-0 opacity-20 dark:opacity-10" />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const globalData = getGlobalData();

  return {
    props: {
      globalData,
    },
  };
};
