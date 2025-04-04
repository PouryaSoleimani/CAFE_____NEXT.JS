import PageHeaderComponent from '@/components/modules/PageHeader/PageHeaderComponent'
import TestimonialCommentsTemplate from '@/components/templates/TestimonialPage/TestimonialCommentsTemplate'
import { GetStaticProps } from 'next'
import React from 'react'

interface TestimonialPageProps {
    comments: [{ id: number | string, username: string, body: string, imgSRC: string, productID: string }]

}
const TestimonialPage: React.FC<TestimonialPageProps> = ({ comments }) => {
    return (
        <>
            <PageHeaderComponent route={"TESTIMONIAL PAGE"} />
            <TestimonialCommentsTemplate comments={comments} />
        </>
    )
}
// GET STATIC PROPS =================================================================================================================
export const getStaticProps: GetStaticProps = async (ctx) => {
    const commentsReq = await fetch("https://cafe-server-5u3w.onrender.com/comments")
    const comments = await commentsReq.json()

    return {
        props: { comments: comments },
        revalidate: 43200
    }
}
export default TestimonialPage