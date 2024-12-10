import { Pencil2Icon } from '@radix-ui/react-icons'
import { Heading, Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const IssueActions = ({issueId} : {issueId:number}) => {
  return (
    <>
    <Heading>Actions</Heading>
        <Button>
          <Pencil2Icon/>
          <Link href = {`/issues.${issueId}/edit`}>Edit issue</Link>
        </Button>
    </>
  )
}

export default IssueActions
