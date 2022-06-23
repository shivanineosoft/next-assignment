import { useRouter } from 'next/router'
import React from 'react'
import Detail from '../../../components/Detail';
import ErrorComponent from '../../../components/ErrorComponent';
import { avengerDetailUrl } from '../../../constants/apiUrl';
import Layout from '../../../layouts/Layout';

function id({ avengerDetail }) {
    const router = useRouter();
    const { id } = router && router.query;
    
    return (<>
        <Layout>
            {
                parseInt(id , 10) == id ? 
                <Detail avengerDetail = { avengerDetail }/> 
                : 
                <ErrorComponent />
            }
        </Layout>
    </>)
}

export async function getServerSideProps(context) {
    const id = context.params.id;
    const res = await fetch(avengerDetailUrl(id));
    const avengerDetail = await res.json();
    return { props: { avengerDetail } }
}

export default id
