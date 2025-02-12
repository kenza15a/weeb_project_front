import React from "react";
import Hero from "../../components/Home/Hero/Hero";
import desktopImage from "../../assets/images/Desktop.png";
import Testimonials from "../../components/Home/Testiminals/Testimonials";
import logo1 from "../../assets/images/testimonials/Logo-grey.png";
import logo2 from "../../assets/images/testimonials/Logo-grey (1).png";
import logo3 from "../../assets/images/testimonials/Logo-grey (2).png";
import logo4 from "../../assets/images/testimonials/Logo-grey (3).png";
import logo5 from "../../assets/images/testimonials/Logo-grey (4).png";
import InfosSection from "../../components/Home/CTAsection/InfosSection";
import RotatingSquares from "../../components/Home/CTAsection/RotatingSquares ";
import sectionTitles from "../../components/Home/CTAsection/SectionTitle";
const HomePage = () => {
  //CTA titles
  const FirstSectionTitle = sectionTitles.FirstSectionTitle;
  const SecondSectionTitle = sectionTitles.SecondSectionTitle;
  // Define title as an array of parts, grouping elements in separate lines
  const heroTitleParts = [
    [
      { text: "Explorez le", className: "text-white font-bold" },
      { text: "Web", className: "text-heading" },
      { text: "sous toutes", className: "text-white font-bold" },
    ],
    [{ text: "ses facettes", className: "text-white font-bold" }],
  ];
  const logos = [logo1, logo2, logo3, logo4, logo5];
  // Hero description with line breaks
  const heroDescription = `Le monde du web évolue constamment, et nous sommes là pour vous guider à travers ses tendances,\n technologies et meilleures pratiques. Que vous soyez développeur, designer ou passionné du digital,\n notre blog vous offre du contenu de qualité pour rester à la pointe.`;
  //CTA titles

  return (
    <main className="bg-main flex-grow w-full justify-center items-center py-6">
      <Hero
        title={
          <div className="flex flex-col items-center text-center gap-2">
            {heroTitleParts.map((line, lineIndex) => (
              <div key={lineIndex} className="flex gap-1">
                {line.map((part, index) => (
                  <span key={index} className={part.className}>
                    {part.text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        }
        description={heroDescription}
        image={desktopImage}
      />
      <Testimonials titleText="Ils nous font confiance" imagesArray={logos} />
      {/* First Section - Text on Left */}
      <InfosSection
        title={<FirstSectionTitle />}
        Subtitle="Des ressources pour tous les niveaux"
        titleClasses="text-heading uppercase"
        description="Que vous débutiez en développement web ou que vous soyez un expert cherchant à approfondir vos connaissances, nous vous proposons des tutoriels, guides et bonnes pratiques pour apprendre efficacement."
        buttonText="Explorer les ressources"
        illustrationComponent={
          <img src={desktopImage} alt="Illustration" className="w-full" />
        }
        reverse={false}
      />

      {/* Second Section - Text on Right */}
      <InfosSection
        title={<SecondSectionTitle />}
        Subtitle="Le web, un écosystème en constante évolution"
        titleClasses="text-heading uppercase"
        description="Chaque semaine, nous analysons les nouveautés du web : frameworks émergents, bonnes pratiques SEO, accessibilité, et bien plus encore. Ne manquez aucune actualité du digital !"
        buttonText="Lire les articles récents"
        illustrationComponent={<RotatingSquares />}
        reverse={true}
      />
    </main>
  );
};

export default HomePage;
/*Uses an array of arrays (heroTitleParts) to control which words are on the same line.
Maps over each "line" separately, ensuring ses facettes appears on a new line.
Maintains text alignment and spacing as in your design.
*/
