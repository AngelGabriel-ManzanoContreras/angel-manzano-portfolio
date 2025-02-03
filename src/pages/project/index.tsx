'use client';
import { useParams, useNavigate } from "react-router-dom";

import { projects } from "@/data/data"

import styles from "./project.module.css"
import Introduction from "@/sections/(project)/introduction"
import Summary from "@/sections/(project)/summary"
import Contribution from "@/sections/(project)/contribution"
import Tools from "@/sections/(project)/tools"
import { ITool } from "@/sections/(project)/tools/Itools";

export default function page() {
  const { project } = useParams();
  const navigate = useNavigate();
  const projectKey: string = Array.isArray(project) ? project[0] : project;
  const projectData = projects[ projectKey ];

  if ( !projectData ) {
    navigate("/");
    return null;
  }

  return (
    <>
      <head>
        <title>{ projectData.introduction.title } - Angel Manzano - Software Developer Portfolio</title>
        <meta name="description" content={ projectData.contribution.description } />
        { /* TODO : <meta name="keywords" content={ projectData.keywords } /> */}
        <meta property="og:title" content={ projectData.introduction.title } />
        <meta property="og:description" content={ projectData.contribution.description } />
        <meta property="og:url" content={ `https://angel-manzano-portfolio.netlify.app/${ projectKey }` } />
      </head>
      <main className={ styles[`project-main`] }>
        <Introduction { ...projectData.introduction } />
        <Summary summary={ projectData.summary } />
        <Contribution { ...projectData.contribution } />
        <Tools tools={ projectData.tools as ITool[] } />
      </main>
    </>
  )
}
