import React from "react";
import clsx from "clsx";

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
import mobileSquaresImg from "../../assets/images/animated-sqares.png";
const HomePage = () => {
  //CTA titles
  const FirstSectionTitle = sectionTitles.FirstSectionTitle;
  const SecondSectionTitle = sectionTitles.SecondSectionTitle;
  // Define title as an array of parts, grouping elements in separate lines
  const heroTitleParts = [
    [
      { text: "Explorez le", className: "text-white font-bold" },
      { text: "Web", className: "text-heading font-thin" },
      { text: "sous toutes", className: "text-white font-bold" },
    ],
    [
      {
        text: "ses ",
        className: "text-white font-bold ",
      },
      {
        text: " facettes",
        className:
          "text-white font-bold border-b border-headings border-b-[7px]",
      },
    ],
  ];
  const logos = [logo1, logo2, logo3, logo4, logo5];
  // Hero description with line breaks
  const heroDescription = `Le monde du web évolue constamment, et nous sommes là pour vous guider à travers ses tendances,\n technologies et meilleures pratiques. Que vous soyez développeur, designer ou passionné du digital,\n notre blog vous offre du contenu de qualité pour rester à la pointe.`;
  //CTA titles

  return (
    <main className="bg-main flex-grow w-full justify-center items-center py-6">
      <Hero
        title={
          <>
            <div className="hidden md:flex md:flex-col md:items-center md:text-center md:gap-x-4 ">
              {heroTitleParts.map((line, lineIndex) => (
                <div
                  key={lineIndex}
                  className="flex md:flex-row flex-col gap-2 "
                >
                  {line.map((part, index) => (
                    <span key={index} className={part.className}>
                      {part.text}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            {/* Mobile Display */}
            <div className="md:hidden flex">
              <div className="grid grid-cols-2">
                <span
                  className={clsx(
                    heroTitleParts[0][0].className,
                    "col-span-1 row-span-1"
                  )}
                >
                  {heroTitleParts[0][0].text}
                </span>
                <span
                  className={clsx(
                    heroTitleParts[0][1].className,
                    "col-span-1 row-span-1"
                  )}
                >
                  {heroTitleParts[0][1].text}
                </span>
                <span
                  className={clsx(
                    heroTitleParts[0][2].className,
                    "col-span-1 row-span-1"
                  )}
                >
                  {heroTitleParts[0][2].text}
                </span>
                <span
                  className={clsx(
                    heroTitleParts[1][0].className,
                    "ml-2 col-span-1 row-span-1"
                  )}
                >
                  {heroTitleParts[1][0].text}
                </span>
                <span
                  className={clsx(
                    heroTitleParts[1][0].className,
                    "col-span-1 row-span-1"
                  )}
                >
                  {heroTitleParts[1][1].text}
                </span>
              </div>
            </div>
          </>
        }
        description={heroDescription}
        image={desktopImage}
        displayButton
        displayImage
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
        //display on mobile too
        mobileDisplay={true}
        mobileIllustrationComponent={
          <img src={desktopImage} alt="Illustration" className="w-full" />
        }
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
        // change the mobile illustration
        mobileDisplay={true}
        mobileIllustrationComponent={
          <img src={mobileSquaresImg} alt="Illustration" className="w-full" />
        }
      />
    </main>
  );
};

export default HomePage;
/*Uses an array of arrays (heroTitleParts) to control which words are on the same line.
Maps over each "line" separately, ensuring ses facettes appears on a new line.
Maintains text alignment and spacing as in your design.
*/
