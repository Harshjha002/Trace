
import prisma from '@/prisma/client';
import { notFound } from 'next/navigation';
import React from 'react';
import IssueFormForEdit from './clientDyanamicRoute';


const EditIssuePage = async ({ params }: Props) => {
    try {
      const { id } = await params;
      if (!id || isNaN(parseInt(id, 10))) {
        throw new Error('Invalid issue ID');
      }
      const issue = await prisma.issue.findUnique({
        where: { id: parseInt(id, 10) },
      });
  
      if (!issue) {
        notFound();
      }
  
      return (
        <div>
      <IssueFormForEdit issue={issue} />
    </div>
      );
    } catch (error) {
      console.error('Error loading issue:', error);
      notFound();
    }
  };

interface Props {
  params: Promise<{ id: string }>;
}


export default EditIssuePage;
