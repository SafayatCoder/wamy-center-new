import React from 'react';
import ProjectDetailView from '../components/common/ProjectDetailView';
import { PROJECTS_LIST } from '../data/organizationData';

export default function DreamHomesPage() {
  const project = PROJECTS_LIST.find((p) => p.id === 'homes');
  return <ProjectDetailView project={project} />;
}
