"use client";

import { useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import EvolutionaryComponent from "../components/EvolutionaryComponent";

export default function Vision() {
    const { language } = useLanguage();

    const content = useMemo(
        () =>
            ({
                en: {
                    mission: {
                        title: "Mission",
                        lead:
                            "From Chile, we aim to strengthen the competitiveness of the agroindustry and position biotechnology as a productive growth engine.",
                        paragraphs: [
                            "Our mission is to extend shelf life and preserve the quality of fresh fruit during export through deep-tech biotechnology applied directly in the processing line.",
                            "We develop biodegradable, safe, and functional coatings with antimicrobial and anti-ripening properties that reduce losses and enable access to more distant markets.",

                        ],
                    },
                    vision: {
                        title: "Vision",
                        lead:
                            "We seek to be an active bridge that translates rigorous science into technically validated products that are truly useful for industry.",
                        paragraphs: [
                            "Our vision is to close the gap between academia and industry, transforming scientific knowledge into real and applicable solutions.",
                            "We are born from university biotechnology with the conviction that research must be oriented toward solving concrete productive challenges.",

                        ],
                    },
                },
                es: {
                    mission: {
                        title: "Misión",
                        lead:
                            "Desde Chile, buscamos fortalecer la competitividad de la agroindustria y posicionar la biotecnología como un motor productivo.",
                        paragraphs: [
                            "Nuestra misión es extender la vida útil y preservar la calidad de la fruta fresca durante la exportación mediante biotecnología deep-tech aplicada en línea de proceso.",
                            "Desarrollamos recubrimientos biodegradables, inocuos y funcionales con propiedades antimicrobianas y antimaduración que reducen mermas y permiten acceder a mercados más lejanos.",

                        ],
                    },
                    vision: {
                        title: "Visión",
                        lead:
                            "Buscamos ser un nexo activo que traduzca ciencia rigurosa en productos técnicamente validados y útiles para la industria.",
                        paragraphs: [
                            "Nuestra visión es cerrar la brecha entre la academia y la industria, transformando conocimiento científico en soluciones reales y aplicables.",
                            "Nacemos desde la biotecnología universitaria con la convicción de que la investigación debe orientarse a resolver problemas productivos concretos.",

                        ],
                    },
                },
            }) as const,
        []
    );

    const t = content[language];

    return (
        <section
            id="vision"
            className="relative z-0 bg-[#F9F3E7] text-[#244629]"
        >
            <div className="max-w-6xl mx-auto px-6 py-24 space-y-32">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-5">
                        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
                            {t.mission.title}
                        </h2>
                        <div className="my-10 h-px w-full bg-[#244629]/20" />
                    </div>

                    <div className="md:col-span-7">


                        <div className="space-y-6 md:text-lg text-[#244629]/80 leading-relaxed">
                            {t.mission.paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                        <p className="text-base md:text-lg pt-4 leading-relaxed font-medium pb-6">
                            {t.mission.lead}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-5">
                        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
                            {t.vision.title}
                        </h2>
                        <div className="my-10 h-px w-full bg-[#244629]/20" />
                    </div>

                    <div className="md:col-span-7">


                        <div className="space-y-6 md:text-lg text-[#244629]/80 leading-relaxed">
                            {t.vision.paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                        <p className="text-base md:text-lg  pt-4 leading-relaxed font-medium pb-6">
                            {t.vision.lead}
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full mt-12">
                    <div className="w-full max-w-6xl">
                        <EvolutionaryComponent
                            className="mx-auto"
                            showNavigation={true}
                            showProgressBar={true}
                        />
                    </div>
                </div>


            </div>
        </section>
    );
}
