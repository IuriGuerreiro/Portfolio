'use client';

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useParams } from "next/navigation";

export default function projectsPage(){
    const params = useParams();
    const { lang } = useLanguage();
    const project = params.id;
    const projectData = {}; // Fetch or retrieve project data based on the 'project' variable
    return (
        <div>
            <h1>{project}</h1>
        </div>
    );
}