import React, { useEffect } from 'react'

import Layout from '../../components/Layout/Layout.jsx'
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx'
import styles from './Projects.module.css'
import { projectsData } from '../../utils/data.js'

export default function Projects() {
  useEffect(() => {
    document.title = 'Projects | Angel Manzano - Portfolio'
  }, [])

  return (
    <Layout>
      <section className={styles.Projects}>

        <h1 className={styles.Projects__Title}>Projects</h1>
        
        <section className={styles.Projects__List}>
        {
          Object.entries(projectsData).map( ([url, { head, tools } ], i) => (
            <ProjectCard
              key={i}
              url={url}
              title={head.title}
              img={head.img}
              tools={tools.map( tool => tool.name ).join(', ')}
            />
          ) ) 
        }
        </section>

      </section>
    </Layout>
  )
}