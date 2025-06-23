'use client';
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import ReviewNavigation from "./buttons/ReviewNavigation";

const Reviews = () => {
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
      quote: "Fantastisk arbejde til gode priser! Han lavede os et praktisk og flot klædeskab med godt håndværk. Jeg var især glad for, hvordan han hele vejen igennem processen var lydhør over for vores ønsker og behov. Vi vil helt sikkert tage kontakt til ham igen.",
      author: "Fatme Mustafa",
      role: "Klædeskab"
    },
    {
      quote: "Ali fik lavet lysninger til vores nye ovenlysvinduer og til trods for de mange detaljer, formåede han at levere et rigtigt flot resultat. Han stod for koordinering med tagdækker og ingeniør og holdt os løbende opdateret. Mine varmeste anbefalinger herfra.",
      author: "Ali H.",
      role: "Ovenlysvinduer installation"
    },
    {
      quote: "Fik skiftet vindue + dør til altan. Trods flere udfordringer undervejs, klarede en meget løsningsorienteret Ali opgaven med et flot finish. Vi er rigtig glade for resultatet og giver vores bedste anbefalinger.",
      author: "Dennis Preuss",
      role: "Vindue- og dørskift"
    },
    {
      quote: "Fra drøm til virkelighed. Vi gik med tanker om nyt køkken, udvidelse af værelser. Ali overholdt alle aftaler og tider. Han arrangerede hele opgaven mellem elektriker, VVS og maler. Tusind tak for hjælpen.",
      author: "Carlo Muradian",
      role: "Totalrenovering"
    },
    {
      quote: "Gav en rigtig god og fair pris på et 6 meter hegn. Da de gik i gang tog det kun 2 dage at få lavet. Virkelig flink fyr. Godt håndværk!",
      author: "Sarah",
      role: "Hegnmontering"
    },
    {
      quote: "Vi har fået lavet nedsænket gipsloft med stålforskaldning på toilettet. Ali var punktlig, behagelig og grundig. Vi er meget tilfredse.",
      author: "Benedikte Lorentz",
      role: "Gipsloft installation"
    }
  ];

  // ... (resten af komponenten forbliver uændret)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const nextReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
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
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Overskrift */}
        <div className="mb-12">
          <p className="text-accent font-medium mb-2">ANMELDELSER</p>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-darkblue mb-4">Hvad vores kunder siger</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Mobil: én anmeldelse */}
        <div className="flex justify-center md:hidden">
          <div 
            className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow w-full max-w-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-6 h-6 fill-accent text-accent"
                  fill="currentColor"
                />
              ))}
            </div>
            <blockquote className="text-gray-600 italic mb-6 text-lg">
              &quot;{reviews[currentIndex].quote}&quot;
            </blockquote>
            <div className="border-t border-gray-200 pt-4">
              <p className="font-semibold text-darkblue">{reviews[currentIndex].author}</p>
              <p className="text-sm text-gray-500">{reviews[currentIndex].role}</p>
            </div>
          </div>
        </div>

        {/* Desktop: tre anmeldelser */}
        <div 
          className="hidden md:grid md:grid-cols-3 gap-8 mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {getDesktopReviews().map((review, idx) => (
            <div 
              key={idx} 
              className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow w-full mx-auto"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-6 h-6 fill-accent text-accent"
                    fill="currentColor"
                  />
                ))}
              </div>
              <blockquote className="text-gray-600 italic mb-6 text-lg leading-relaxed">
                &quot;{review.quote}&quot;
              </blockquote>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-darkblue">{review.author}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex flex-col items-center">
          <ReviewNavigation onPrev={prevReview} onNext={nextReview} />
          
          {/* Indicator dots */}
          <div className="flex gap-2 mt-4">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToReview(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === idx ? 'bg-accent' : 'bg-gray-300'}`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;