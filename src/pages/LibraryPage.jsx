import React from 'react';
import ProjectDetailView from '../components/common/ProjectDetailView';
import { PROJECTS_LIST } from '../data/organizationData';

export default function LibraryPage() {
  const project = PROJECTS_LIST.find((p) => p.id === 'library');
  return <ProjectDetailView project={project} />;
}
