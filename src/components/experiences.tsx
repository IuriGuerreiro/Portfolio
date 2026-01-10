import React from "react";
import Link from 'next/link';
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Experience = {
    id: string;
    company: string;
    date: string;
    role: string;
    location: string;
    points: string[];
    tags?: string[];
    images?: string[];
    bigDescription?: string;
    links?: {
        web?: string;
        ios?: string;
        android?: string;
        other?: { name: string; url: string }[];
    };
}

interface ExperiencesProps {
  job: Experience;
}

export const Experiences: React.FC<ExperiencesProps> = ({ job }) => {
    const { lang } = useLanguage();
    const readMore = lang === 'en' ? 'Read More' : 'Ler Mais';

    return (
        <div className="md:pl-6 border-l-0 md:border-l border-neutral-800 md:hover:border-white transition-colors duration-300">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h4 className="text-xl font-bold text-white">{job.company}</h4>
                <span className="font-mono text-xs text-neutral-500">{job.date}</span>
            </div>
            <div className="text-neutral-400 text-sm mb-6 font-mono flex items-center gap-2">
                <span>{job.role}</span>
                <span className="text-neutral-700">•</span>
                <span>{job.location}</span>
            </div>
            <ul className="space-y-2 text-neutral-300 text-sm leading-relaxed max-w-3xl mb-6">
                {job.points.map((point, i) => (
                <li key={i} className="flex gap-2">
                    <span className="text-neutral-600">›</span> {point}
                </li>
                ))}
            </ul>
            {job.tags && (
                <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-mono px-2 py-1 bg-neutral-900 border border-neutral-800 text-neutral-500 rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
            {((job.images && job.images.length > 0) || job.bigDescription) && (
                <div className="mt-6">
                    <Link
                        href={`/experience/${job.id}`}
                        className="inline-flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white transition-colors group"
                    >
                        {readMore}
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            )}
        </div>
    );
}