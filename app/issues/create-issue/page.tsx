'use client';
import ErrorMessage from '@/app/components/ErrorMessage';
import { createIssueSchema } from '@/app/createIssueSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Callout, TextField } from '@radix-ui/themes';
import axios from 'axios';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import SimpleMDE from 'react-simplemde-editor';
import { z } from 'zod';

type IssueForm = z.infer<typeof createIssueSchema>;

const CreateNewIssuePage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const [error, setError] = useState('');
  const router = useRouter();

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-cream text-dark rounded-md shadow-lg space-y-6">

      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-6"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post('/api/issues', data);
            router.push('/issues');
          } catch (error) {
            setError('An unexpected error occurred');
          }
        })}
      >

        <div>
          <TextField.Root
            className="w-full bg-aqua border border-lavender text-dark rounded"
            placeholder="Enter Your Issue Title"
            {...register('title')}
          />
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
        </div>


        <div>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <SimpleMDE
                className="bg-cream border border-peach text-dark rounded"
                placeholder="Description"
                {...field}
              />
            )}
          />
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
        </div>

        <Button className="w-full bg-lavender hover:bg-peach text-white py-2 px-4 rounded">
          Submit Your Issue
        </Button>
      </form>
    </div>
  );
};

export default CreateNewIssuePage;
