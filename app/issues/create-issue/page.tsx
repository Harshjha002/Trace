'use client'
import { Button, Callout, TextField , Text} from '@radix-ui/themes';
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import SimpleMDE from "react-simplemde-editor";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod'
import { createIssueSchema } from '@/app/createIssueSchema';
import {z} from 'zod'

type IssueForm =  z.infer<typeof createIssueSchema>

const CreateNewIssuePage = () => {
  const { register, control, handleSubmit , formState : {errors} } = useForm<IssueForm>({resolver:zodResolver(createIssueSchema)})
  const [error, setError] = useState('')
  const router = useRouter()
  return (
    <div className='max-w-xl'>
      {error && <Callout.Root color='red' className='mb-5'>
        <Callout.Text>
          {error}
        </Callout.Text>
      </Callout.Root>}
      <form className='space-y-4' onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post('/api/issues', data)
          router.push("/issues")

        } catch (error) {
          setError("An unexpected error occured")
        }

      })}>
        <div>
          <TextField.Root placeholder="Enter Your Issue Title" {...register('title')} />
          {errors.title && <Text color='red' as='p'>{errors.title.message}</Text>}
          <Controller
            name='description'
            control={control}
            render={({ field }) => <SimpleMDE placeholder='Description'  {...field} />}
          />
          {errors.description && <Text color='red' as='p'>{errors.description.message}</Text>}
        </div>
        <Button>Submit Your Issue</Button>
      </form>
    </div>
  )
}

export default CreateNewIssuePage
