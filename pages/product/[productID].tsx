// ^ SINGLE PRODUCT DETAILS PAGE ================================================================================================================================
import React from 'react';
import SingleProductDetailsPageTemplate from '@/components/templates/SingleProductDetailsPage/SingleProductDetailsPage';
import { GetStaticPaths, GetStaticProps } from 'next';

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
    const request = await fetch(`https://cafe-server-5u3w.onrender.com//menu`);
    const allProducts: Product[] = await request.json();

    const paths = allProducts.map((item) => ({
        params: { productID: item.id.toString() },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// GET STATIC PROPS
export const getStaticProps: GetStaticProps = async (ctx) => {
    const productID = ctx.params?.productID;

    if (!productID) {
        return {
            notFound: true,
        };
    }

    try {
        const request = await fetch(`${API_URL}/menu/${productID}`);

        if (!request.ok) {
            return {
                notFound: true,
            };
        }

        const singleProduct: Product | null = await request.json();

        return {
            props: { singleProduct },
        };
    } catch (error) {
        console.error("Error fetching product:", error);
        return {
            notFound: true,
        };
    }
};

export default SingleProductDetailsPage;