import moment from 'moment';
import Link from 'next/link';
import React from 'react'

function List({ avengersList }) {
    return (<>
        <div className="div-table">
            <div className="div-table-row">
                <div className="div-table-col header" align="center">Name</div>
                <div className="div-table-col header">Genres</div>
                <div className="div-table-col header">Runtime</div>
                <div className="div-table-col header">Premiered</div>
                <div className="div-table-col header">Language</div>
                <div className="div-table-col header">Rating</div>
                <div className="div-table-col header">Country Name</div>
                <div className="div-table-col header">Thumbnail</div>
            </div>
            {
                avengersList.map((item,i) => {
                    return <div className="div-table-row" key={i}>
                                <div className="div-table-col link">
                                    <Link href={`/tv-shows/details/${item.show.id}`}>
                                        {item.show.name ? item.show.name :'-'}
                                    </Link>
                                </div>
                                <div className="div-table-col">
                                    {item.show.language ? item.show.language : '-'}
                                </div>
                                <div className="div-table-col">
                                    {item.show.genres.length >0 ? item.show.genres.join(',') : '-'}
                                </div>
                                <div className="div-table-col">{item.show.runtime ? item.show.runtime : '-'}</div>
                                <div className="div-table-col">
                                    {item.show.premiered ? moment(item.show.premiered).format('Do MMM YYYY') : '-'}
                                </div>
                                <div className="div-table-col">
                                    {item.show.rating && item.show.rating.average ? item.show.rating.average : '-'}
                                </div>
                                <div className="div-table-col">
                                    {item.show.network && item.show.network.country && item.show.network.country.name ? item.show.network.country.name : '-'}
                                </div>
                                <div className="div-table-col">
                                    <img src={item.show.image && item.show.image.medium} width="40" height="40"/>
                                </div>
                            </div>
                })
            }
            
      </div>
    </>)
}



export default List
