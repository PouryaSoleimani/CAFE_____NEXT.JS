import PageHeaderComponent from '@/components/modules/PageHeader/PageHeaderComponent'
import TestimonialCommentsTemplate from '@/components/templates/TestimonialPage/TestimonialCommentsTemplate'
import { GetStaticProps } from 'next'
import React from 'react'

interface TestimonialPageProps {
    comments: [{ id: number | string, username: string, body: string, imgSRC: string, productID: string }]

}
const TestimonialPage: React.FC<TestimonialPageProps> = ({ comments }) => {
    return (
        <>s
            <PageHeaderComponent route={"TESTIMONIAL PAGE"} />
            <TestimonialCommentsTemplate comments={comments} />
        </>
    )
}
// GET STATIC PROPS =================================================================================================================
export const getStaticProps: GetStaticProps = async (ctx) => {
    const commentsReq = await fetch("http://localhost:4000/comments")
    const comments = await commentsReq.json()

    return {
        props: { comments: comments },
        revalidate: 43200
    }
}
export default TestimonialPage