// ^ SINGLE PRODUCT DETAILS PAGE ================================================================================================================================
import React from 'react';
import SingleProductDetailsPageTemplate from '@/components/templates/SingleProductDetailsPage/SingleProductDetailsPage';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

interface Product {
    id: number;
    name: string;
    imgSRC: string;
    price: number | string;
    description: string;
    rate: number;
}

interface SingleProductDetailsPageTemplateProps {
    singleProduct: Product | null;
}

// COMPONENT
const SingleProductDetailsPage: React.FC<SingleProductDetailsPageTemplateProps> = ({ singleProduct }) => {
    if (!singleProduct) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <SingleProductDetailsPageTemplate singleProduct={singleProduct} />
        </>
    );
};

// GET STATIC PATHS
export const getStaticPaths: GetStaticPaths = async () => {
    const request = await fetch(`http://localhost:4000/menu`);
    const allProducts: Product[] = await request.json();

    const paths = allProducts.map((item) => ({
        params: { productID: item.id.toString() },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

// GET STATIC PROPS
export const getStaticProps = async (ctx: GetStaticPropsContext<{ productID: string }>) => {
    const productID = ctx.params?.productID;

    if (!productID) {
        return {
            notFound: true,
        };
    }

    const request = await fetch(`http://localhost:4000/menu/${productID}`);
    const singleProduct: Product | null = await request.json();

    return {
        props: { singleProduct },
    };
};

export default SingleProductDetailsPage;