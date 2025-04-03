import PageHeaderComponent from '@/components/modules/PageHeader/PageHeaderComponent'
import SearchPageTemplate from '@/components/templates/SearchPage/SearchPageTemplate'
import { useRouter } from 'next/router'
import React from 'react'

const SearchPage = () => {
    const router = useRouter()
    const query = router.query.query

    
    return (
        <>
            <PageHeaderComponent route={"SEARCH PAGE"} />
            <SearchPageTemplate query={query} />
        </>
    )
}

export default SearchPage