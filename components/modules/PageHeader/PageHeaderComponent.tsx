import { Book, Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PageHeaderComponent = (route: any) => {
    return (
        <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
            <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: "400px" }}>
                <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">{String(route.route)}</h1>
                <div className="d-inline-flex mb-lg-5">
                    <Link href="/" className="m-0 text-white flex items-start gap-x-2"><Home className='w-5 h-5' /> HOME PAGE </Link>
                    <p className="m-0 text-white px-2">/</p>
                    <p className="m-0 flex items-start gap-x-2 text-[#da9f5b] font-semibold"><Book className='w-5 h-5 translate-y-0.5' />{String(route.route)}</p>
                </div>
            </div >
        </div >
    )
}

export default PageHeaderComponent