'use client';
import { Star } from "lucide-react";
import { useState, useRef } from "react";
import ReviewNavigation from "../buttons/ReviewNavigation";

const Reviews = () => {
  const mobileScrollRef = useRef(null);
  const desktopScrollRef = useRef(null);
  const [expandedReviews, setExpandedReviews] = useState({});
  
  const reviews = [
    {
      quote: "Vi vil give vores bedste anbefalinger til HMI. Vi har fået udskiftet låger og opsat nye elementer i køkken. Nye elementer og afdækning af faldstamme mm. på badeværelse. HMI's medarbejder var super dygtig og trods vores ændringer undervejs, så klarede HMI det hele til et super flot resultat. Vi vil helt klart bruge dem igen.",
      author: "Gitte",
      role: "Køkkenrenovering & Badeværelse"
    },
    {
      quote: "HMI har udført flere opgaver ved os, alle projekterne er udført fuldstændig efter aftale. Gode sparringspartner i processen der er gået det ekstra skridt for os. Såfremt vi skal have lavet mere - vil vi benytte HMI igen.",
      author: "Niels Leest",
      role: "Flere tømreropgaver"
    },
    {
      quote: "Fantastisk arbejde til gode priser!\nHan lavede os et praktisk og flot klædeskab med godt håndværk. Udover skabene tog han sig også af gipsvæggene med samme professionelle tilgang og præcision. Jeg var især glad for, hvordan han hele vejen igennem processen var lydhør over for vores ønsker og behov. Jeg kan varmt anbefale hans tjenester til alle, der søger en dygtig, serviceorienteret og pålidelig tømrere til deres projekter. Vi vil helt sikkert tage kontakt til ham igen for fremtidige opgaver. Tak for det fantastiske arbejde Ali!.",
      author: "Fatme Mustafa",
      role: "Klædeskab"
    },
    {
      quote: "Udførligt arbejde med øje for detaljer til en konkurrencedygtig pris.\nAli fik lavet lysninger til vores nye ovenlysvinduer og til trods for at vinduerne var placeret i overgangen mellem gammelt hus og tilbygning og krævede understøtning af spær, samt at arbejdet krævede en snedker grundet de mange detaljer, formåede han at levere et rigtigt flot resultat.\nSom en del af de forberedende arbejder stod Ali for koordinering med tagdækker og ingeniør og holdt os løbende opdateret.\nMine varmeste anbefalinger herfra.",
      author: "Ali H.",
      role: "Ovenlysvinduer installation"
    },
    {
      quote: "Fik skiftet vindue + dør til altan. Trods flere udfordringer undervejs, klarede en meget løsningsorienteret Ali opgaven til UG med et flot finish. Vi er rigtig glade for resultatet og giver vores bedste anbefalinger.",
      author: "Dennis Preuss",
      role: "Vindue- og dørskift"
    },
    {
      quote: "Fra drøm til virkelighed.\nVi gik med tanker om nyt køkken, udvidelse af værelser, samme sæt andre rum.\nFra 1. dag Ali var forbi og kigge på opgaven, dagen efter fik vi tilbuddet som var super fornuftig.\nAli overholdt alle aftaler, og tider.\nHan arrangeret hele opgaven mellem Elektrikker vvs og maler. Trods uforudsete udfordringer, stoppet det ikke Ali i at overholde tiden.\nTusind tak for hjælpen.",
      author: "Carlo Muradian",
      role: "Totalrenovering"
    },
    {
      quote: "Gav en rigtig god og fair pris på et 6 meter hegn. Da de gik i gang tog det kun 2 dage at få lavet. Virkelig flink fyr. Godt håndværk!",
      author: "Sarah",
      role: "Etablering af hegn"
    },
    {
      quote: "Vi har fået lavet nedsænket gipsloft med stålforskaldning på toilettet. Ali var punktlig, behagelig og grundig. Vi er meget tilfredse.",
      author: "Benedikte Lorentz",
      role: "Gipsloft installation"
    },
    {
      quote: "Har fået sat nyt hegn op rigtig godt arbejde holder aftaler kommer til tiden gør som man vil have det skal gøres super godt",
      author: "Seref Ozturk",
      role: "Etablering af hegn"
    },
    {
      quote: "Jeg anbefaler stærkt denne virksomhed. Meget pålidelig, og deres tidtagning er fantastisk. Professionel og venlig, konkurrencedygtige priser.",
      author: "Justyna Kubas",
      role: "Tømreropgaver"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    const newIndex = (currentIndex + 1) % reviews.length;
    setCurrentIndex(newIndex);
    scrollToReview(newIndex);
  };

  const prevReview = () => {
    const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    setCurrentIndex(newIndex);
    scrollToReview(newIndex);
  };

  const goToReview = (index) => {
    setCurrentIndex(index);
    scrollToReview(index);
  };

  const scrollToReview = (index) => {
    const isMobile = window.innerWidth < 768;
    const scrollContainer = isMobile ? mobileScrollRef.current : desktopScrollRef.current;
    
    if (scrollContainer) {
      const reviewWidth = isMobile ? 320 + 24 : 384 + 32; // width + gap
      const scrollPosition = index * reviewWidth;
      
      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleReviewExpanded = (reviewIndex) => {
    setExpandedReviews(prev => ({
      ...prev,
      [reviewIndex]: !prev[reviewIndex]
    }));
  };

  const truncateText = (text, reviewIndex) => {
    const words = text.split(' ');
    const isExpanded = expandedReviews[reviewIndex];
    
    if (isExpanded || words.length <= 20) {
      return text;
    }
    
    return words.slice(0, 20).join(' ') + '...';
  };

  const getDesktopReviews = () => {
    if (reviews.length <= 3) return reviews;
    const arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return arr;
  };

  return (
    <section id="reviews" className=" py-16 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Overskrift */}
        <div className="mb-12">
          <p className="text-accent font-medium mb-2">ANMELDELSER</p>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-darkblue dark:text-dark-text mb-4">Hvad vores kunder siger</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Mobil: scrollbar med alle anmeldelser */}
        <div className="md:hidden">
          <div ref={mobileScrollRef} className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
              {reviews.map((review, idx) => (
                <div 
                  key={idx}
                  data-review-index={idx}
                  className="bg-gray-50 dark:bg-dark-surface p-6 rounded-xl shadow-sm dark:shadow-gray-700/50 hover:shadow-md dark:hover:shadow-gray-600/50 transition-shadow flex flex-col justify-between h-[35rem] w-80 flex-shrink-0"
                >
                  <div>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 fill-accent text-accent"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <blockquote className="text-gray-600 dark:text-gray-300 italic mb-6 text-base leading-relaxed">
                      &quot;{truncateText(review.quote, idx)}&quot;
                      {review.quote.split(' ').length > 20 && (
                        <button
                          onClick={() => toggleReviewExpanded(idx)}
                          className="block mt-2 text-accent hover:text-darkblue dark:hover:text-dark-text font-medium text-sm transition-colors"
                        >
                          {expandedReviews[idx] ? 'Læs mindre' : 'Læs mere'}
                        </button>
                      )}
                    </blockquote>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                    <p className="font-semibold text-darkblue dark:text-dark-text">{review.author}</p>
                    <p className="text-sm text-gray-500 dark:text-dark-muted">{review.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: scrollbar med alle anmeldelser */}
        <div className="hidden md:block">
          <div ref={desktopScrollRef} className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 pb-4" style={{ width: 'max-content' }}>
              {reviews.map((review, idx) => (
                <div 
                  key={idx}
                  data-review-index={idx}
                  className="bg-gray-50 dark:bg-dark-surface p-8 rounded-xl shadow-sm dark:shadow-gray-700/50 hover:shadow-md dark:hover:shadow-gray-600/50 transition-shadow flex flex-col justify-between h-[40rem] w-96 flex-shrink-0"
                >
                  <div>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-6 h-6 fill-accent text-accent"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <blockquote className="text-gray-600 dark:text-gray-300 italic mb-6 text-lg leading-relaxed">
                      &quot;{truncateText(review.quote, idx)}&quot;
                      {review.quote.split(' ').length > 20 && (
                        <button
                          onClick={() => toggleReviewExpanded(idx)}
                          className="block mt-2 text-accent hover:text-darkblue dark:hover:text-dark-text font-medium text-sm transition-colors"
                        >
                          {expandedReviews[idx] ? 'Læs mindre' : 'Læs mere'}
                        </button>
                      )}
                    </blockquote>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                    <p className="font-semibold text-darkblue dark:text-dark-text">{review.author}</p>
                    <p className="text-sm text-gray-500 dark:text-dark-muted">{review.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex gap-2 mt-8 justify-center">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToReview(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${currentIndex === idx ? 'bg-accent' : 'bg-gray-300 dark:bg-gray-600'}`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>

        {/* Review Navigation inde i sektionen */}
        <ReviewNavigation
          onPrev={prevReview}
          onNext={nextReview}
          buttonClass="bg-gray-100 dark:bg-dark-surface hover:bg-accent dark:hover:bg-accent transition-colors p-2 rounded-full"
          iconClass="text-gray-800 dark:text-dark-text"
        />
      </div>
    </section>
  );
};

export default Reviews;