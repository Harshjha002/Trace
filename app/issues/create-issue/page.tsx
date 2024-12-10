"use client"
import dynamic from 'next/dynamic';
import IssueFormSkelton from './loading';

const IssueForm = dynamic(() => import('../_components/IssueForm'), {
  ssr: false,
  loading:() => <IssueFormSkelton/>
});

const NewIssuePage = () => {
  return (
    <div>
      <IssueForm />
    </div>
  );
};

export default NewIssuePage;
