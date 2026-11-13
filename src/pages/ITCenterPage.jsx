import React from 'react';
import ProjectDetailView from '../components/common/ProjectDetailView';
import { PROJECTS_LIST } from '../data/organizationData';

export default function ITCenterPage() {
  const project = PROJECTS_LIST.find((p) => p.id === 'it-center');
  return <ProjectDetailView project={project} />;
}
