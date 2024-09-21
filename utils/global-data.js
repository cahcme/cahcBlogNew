export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Caнc';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Blog de ciberseguridad';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';
   const introduction = process.env.BLOG_INTRODUCTION ? decodeURI(process.env.BLOG_INTRODUCTION) : 'Soy Caнc, un profesional de ciberseguridad de España. Me especializo en realizar pruebas de penetración y evaluación de vulnerabilidades, utilizando herramientas como Metasploit, Nmap, Wireshark entre muchas otras. Actualmente, soy Tester de Penetración y Analista de Seguridad, donde colaboro con los equipos de desarrollo y operaciones para identificar brechas de seguridad y aplicar soluciones efectivas.';
    console.log('Introducción:', introduction);

  return {
    name,
    blogTitle,
    footerText,
    introduction,
  };
};
