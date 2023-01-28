import React from 'react'
import { Link } from 'react-router-dom';

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

function Card(props) {
    const { data } = props;
    return (
        <div>
            {
                data.map((item) => {
                    return (
                        <>
                            <div key={item.id} className="card cardStyle float-start text-center  " >
                                <Link to={'/' + item.id}> <img src={item.image} className="card-img-top" height="200px" alt="items" /></Link>
                                <div className="card-body fw-bolder ">
                                    <p className="card-text p-0">Title: {item.title.slice(0, 40)}</p>

                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Rating
                                            name="text-feedback"
                                            value={item.rating.rate}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                    </div>
                                    <div className="col-5">
                                        <div className='text-info'>Reviews : {item.rating.count}</div>
                                    </div>
                                </div>

                            </div>
                        </>

                    )

                })
            }
        </div>
    )
}

export default Card
