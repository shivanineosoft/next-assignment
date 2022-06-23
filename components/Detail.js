import moment from 'moment';
import Link from 'next/link';
import React from 'react'

function Detail({ avengerDetail }) {

    return (<>
            <Link href="/tv-shows/avengers">Back</Link>
            <div className='flex-container'>
                <div className='detail-div'>
                    <div className='inner-div'>
                        <strong className='title'>Name : </strong>
                        <span className='content'>{avengerDetail && avengerDetail.name ? avengerDetail.name :'-'}</span>
                    </div>
                    <div className='inner-div'>
                        <strong className='title'>Language : </strong>
                        <span className='content'>{avengerDetail && avengerDetail.language ? avengerDetail.language :'-'}</span>
                    </div>
                    <div className='inner-div'>
                        <strong className='title'>Premiered : </strong>
                        <span className='content'>{avengerDetail && avengerDetail.premiered ? moment(avengerDetail.premiered).format('Do MMM YYYY') : '-'}</span>
                    </div>
                    <div className='inner-div'>
                        <strong className='title'>Rating : </strong>
                        <span className='content'>{avengerDetail && avengerDetail.rating && avengerDetail.rating.average ? avengerDetail.rating.average : '-'}</span>
                    </div>
                    <div className='inner-div'>
                        <strong className='title'>Runtime : </strong>
                        <span className='content'>{avengerDetail && avengerDetail.runtime ? avengerDetail.runtime : '-'}</span>
                    </div>
                    <div className='inner-div'>
                        <strong className='title'>Country Name : </strong>
                        <span className='content'>{avengerDetail && avengerDetail.network && avengerDetail.network.country && avengerDetail.network.country.name ? avengerDetail.network.country.name : '-'}</span>
                    </div>
                    <div className='inner-div'>
                        <strong className='title'>Type : </strong>
                        <span className='content'>{avengerDetail && avengerDetail.type ? avengerDetail.type : '-'}</span>
                    </div>
                    <div className='inner-div'>
                        <strong className='title'>Summary : </strong>
                        <span className='content' dangerouslySetInnerHTML={{__html: avengerDetail && avengerDetail.summary ? avengerDetail.summary : ''}}></span>
                    </div>
                </div>
                <div className='image-div'>
                    <img src={avengerDetail && avengerDetail.image && avengerDetail.image.original ? avengerDetail.image.original : ''}  width="600" height="600"/>
                </div>
            </div>
    </>)
}

export default Detail
