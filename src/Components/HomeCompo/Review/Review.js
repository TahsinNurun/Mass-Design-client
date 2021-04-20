import React, { useEffect, useState } from 'react';
import image1 from '../../../Images/team (1).png';
import image2 from '../../../Images/team (4).png'
import image3 from '../../../Images/team (5).png';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const Review = () => {
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        fetch('https://limitless-dusk-84969.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviewData(data))
    }, [])
    // const reviewData = [{
    //     name:'Misha Watson',
    //     review:'British architect Amanda Levete has been selected as the recipient of the 2018 Jane Drew Prize, recognizing “an architectural designer who, through their work and commitment to design excellence, has raised the profile of women in architecture.',
    //     image:image1,
    //     email: 'misha.watson@gmail.com'
    // },{
    //     name:'Daniel Berman',
    //     review:'Founder of London-based practice AL_A, Levete rose to promise as one half of Stirling Prize-winning practice Future Systems, which she ran with then-husband Jan Kaplický. Together, they completed paradigm-shifting .',
    //     image:image2,
    //     email: 'daniel.berman@gmail.com'
    // },{
    //     name:'Dan Brown',
    //     review:'British architect Amanda Levete has been selected as the recipient of the 2018 Jane Drew Prize, recognizing “an architectural designer who, through their work and commitment to design excellence, has raised the profile of women in architecture.',
    //     image:image3,
    //     email: 'dan.brown@gmail.com'
    // }]
    return (
        <section className="container">
            <div className="text-center mt-5">
                <h5>Review</h5>
                <h3>Our valuable clients feedback about our projects</h3>
            </div>
            <div className="justify-content-center">
                <div className="w-90 row mt-5 pt-5">
                    {
                        reviewData.map(review => <ReviewDetail review={review}></ReviewDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Review;