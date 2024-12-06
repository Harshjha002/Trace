import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const CreateNewIssuePage = () => {
  return (
    <div className='space-y-4'>
      <TextField.Root placeholder="Enter Your Issue Title">

      </TextField.Root>
      <TextArea placeholder="Describ your issue" />

      <Button>Submit Your Issue</Button>

    </div>
  )
}

export default CreateNewIssuePage
