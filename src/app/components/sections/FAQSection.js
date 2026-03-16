"use client";
import { useState } from "react";

const faqs = [
	{
		question: "Hvilke tømreropgaver kan HMI Tømrermester udføre?",
		answer:
			"Vi tilbyder alt fra køkkenrenovering, gulvbelægning, døre og vinduer, hegn og terrasser, til totalrenoveringer og specialopgaver. Vores erfaring sikrer høj kvalitet i både private og erhvervsprojekter.",
	},
	{
		question: "Hvor hurtigt kan I starte på et projekt?",
		answer:
			"Vi planlægger projekter individuelt og kan ofte starte inden for få uger, afhængigt af opgavens størrelse og kompleksitet. Kontakt os for en konkret tidsplan.",
	},
	{
		question: "Tilbyder I gratis rådgivning og tilbud?",
		answer:
			"Ja, vi tilbyder uforpligtende rådgivning og kan udarbejde et skræddersyet tilbud, så du ved præcis, hvad dit projekt vil koste.",
	},
	{
		question: "Kan I koordinere med andre håndværkere?",
		answer:
			"Absolut. Vi samarbejder med VVS, elektrikere og malere, så hele projektet forløber glat og effektivt.",
	},
	{
		question: "Arbejder I også med erhvervsbyggeri?",
		answer:
			"Ja, vi håndterer både private hjem og erhvervsprojekter, herunder kontorrenovering, butikker og større bygningsarbejder.",
	},
	{
		question: "Hvilke materialer og metoder bruger I?",
		answer:
			"Vi bruger kvalitetsmaterialer og moderne byggemetoder, der sikrer holdbare løsninger, samtidig med at vi tilpasser os kundens ønsker og stil.",
	},
	{
		question: "Hvor holder I til, og hvilke områder dækker I?",
		answer:
			"Vi holder til i Taastrup og dækker primært Hovedstadsområdet og omegn. Kontakt os for at høre, om vi kan hjælpe i dit område.",
	},
];

export default function FaqSection() {
	const [openIndex, setOpenIndex] = useState(null);

	return (
		<section className="py-16 bg-gray-50 dark:bg-dark-surface w-full">
			<div className="text-center mb-16">
				<p className="text-accent font-medium mb-2">FAQ</p>
				<h2 className="text-3xl md:text-4xl font-bold font-serif text-darkblue dark:text-dark-text mb-4">
					Ofte stillede spørgsmål
				</h2>
				<div className="w-24 h-1 bg-accent mx-auto"></div>
			</div>
			<div className="max-w-3xl mx-auto px-4">
				<div className="space-y-4">
					{faqs.map((faq, idx) => (
						<div key={idx} className="border-b border-accent pb-4">
							<button
								className="w-full flex items-center justify-between text-left font-semibold text-lg text-darkblue dark:text-dark-text focus:outline-none"
								onClick={() =>
									setOpenIndex(openIndex === idx ? null : idx)
								}
							>
								<span>{faq.question}</span>
								<span
									className={`transform transition-transform duration-200 ${
										openIndex === idx
											? "rotate-90 text-accent"
											: "rotate-0 text-gray-400"
									}`}
								>
									▶
								</span>
							</button>
							{openIndex === idx && (
								<p className="mt-2 text-gray-700 dark:text-gray-300">
									{faq.answer}
								</p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}