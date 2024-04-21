import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Layout from '../../components/Layout/Layout.jsx';
import ProjectIntroduction from '../../sections/ProjectIntroduction/ProjectIntroduction.jsx';
import Problem from '../../sections/Problem/Problem.jsx';
import Task from '../../sections/Task/Task.jsx';
import Tools from '../../sections/Tools/Tools.jsx';
import Results from '../../sections/Results/Results.jsx';
import NotFound from '../NotFound/NotFound';

import { projectsData } from '../../utils/data';

export default function Project() {
  const { projectIndex } = useParams()
  const ProjectSelected = projectsData[ projectIndex ]

  useEffect(() => {
    document.title = `${projectIndex} | Angel Manzano - Portfolio`
  }, [projectIndex])

  if (!ProjectSelected) return ( <NotFound msg='Project Not Found' /> )

  const { head, problem, task, results, tools } = ProjectSelected

  return (
    <Layout>

      <ProjectIntroduction {...head} />

      <Problem problem={problem} />

      <Task task={task}/>

      <Results {...results} title={head.title}/>
      
      <Tools tools={tools}/>

    </Layout>
  )
}