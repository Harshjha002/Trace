'use client'
import dynamic from 'next/dynamic';
import IssueFormSkelton from './loading';

const IssueFormForEdit = dynamic(
    
    () => import("../../_components/IssueForm"),
    {
        ssr:false,
        loading:() => <IssueFormSkelton/>
    }

)

export default IssueFormForEdit
