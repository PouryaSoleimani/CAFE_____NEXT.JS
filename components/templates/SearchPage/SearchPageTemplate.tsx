import { GetStaticProps } from 'next'
import React from 'react'

interface SearchPageInterface { query: string | string[] | undefined }

const SearchPageTemplate: React.FC<SearchPageInterface> = ({ query }) => {


    return (
        <div className='text-white '>{query}</div>
    )
}





export const getStaticProps: GetStaticProps = async (ctx) => {
    const query = ctx?.params?.query
    console.log(ctx, query)
    return {
        props: { query },
    }
}



export default SearchPageTemplate