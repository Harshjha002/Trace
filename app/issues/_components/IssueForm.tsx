'use client';
import { ErrorMessage, Spinner } from '@/app/components';
import { issueSchema } from '@/app/createIssueSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Issue } from '@prisma/client';
import { Button, Callout, TextField } from '@radix-ui/themes';
import axios from 'axios';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import SimpleMDE from 'react-simplemde-editor';
import { z } from 'zod';



type IssueFormData = z.infer<typeof issueSchema>;


const IssueForm = ({ issue }: { issue?: Issue }) => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IssueFormData>({
        resolver: zodResolver(issueSchema),
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const onSubmit = handleSubmit(async (data) => {
        try {
            setIsSubmitting(true);
            if (issue) {
                await axios.patch('/api/issues/' + issue.id, data)
                router.push(`/issues/${issue.id}`);
            }
            else {
                await axios.post('/api/issues', data);
                router.push('/issues');
                router.refresh()
            }
        } catch (error) {
            setIsSubmitting(false);
            setError('An unexpected error occurred');
        }
    });

    return (
        <div className="max-w-xl mx-auto mt-8 p-6 bg-gradient-to-b from-[#A8D3DA] to-[#F3ECB8] text-[#4A4A4A] rounded-xl shadow-lg space-y-6">
            {error && (
                <Callout.Root color="red" className="mb-5">
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>
            )}
            <form className="space-y-6" onSubmit={onSubmit}>
                {/* Title Input */}
                <div>
                    <p className="font-semibold">Title</p>
                    <TextField.Root defaultValue={issue?.title}
                        className="w-full p-3 bg-[#F5CAB3] border border-[#B590CA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A8D3DA] transition-all duration-200"
                        placeholder="Enter your issue title"
                        aria-label="Issue Title"
                        {...register('title')}
                    />
                    <ErrorMessage>{errors.title?.message}</ErrorMessage>
                </div>

                {/* Description Input */}
                <div>
                    <p className="font-semibold">Description</p>
                    <Controller
                        defaultValue={issue?.description}
                        name="description"
                        control={control}
                        render={({ field }) => (
                            <SimpleMDE
                                {...field}
                                className="w-full p-3 bg-[#F5CAB3] border border-[#B590CA] rounded-lg text-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#A8D3DA] transition-all duration-200"
                                placeholder="Enter issue description"
                                aria-label="Issue Description"

                            />
                        )}
                    />
                    <ErrorMessage>{errors.description?.message}</ErrorMessage>
                </div>

                {/* Submit Button */}
                <Button
                    className="w-full bg-[#B590CA] hover:bg-[#A8D3DA] text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F3ECB8]"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                            <Spinner /> <span>Submitting...</span>
                        </div>
                    ) : (
                        issue ? "Update Issue" : 'Submit New Issue'
                    )}
                </Button>

            </form>
        </div>
    );
};

export default IssueForm;
