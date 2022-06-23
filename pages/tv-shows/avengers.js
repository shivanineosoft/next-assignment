import React from 'react'
import List from '../../components/List'
import { avengersListUrl } from '../../constants/apiUrl'
import Layout from '../../layouts/Layout'

function Avengers({ avengersList }) {
    return (
        <Layout>
            <List avengersList={avengersList}/>
        </Layout>
    )
}
export async function getServerSideProps() {
    const res = await fetch(avengersListUrl);
    const avengersList = await res.json();
    return { props: { avengersList } }
}
export default Avengers
