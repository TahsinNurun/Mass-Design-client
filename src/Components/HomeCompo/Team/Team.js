import React from 'react';
import arch from '../../../Images/arch.png'
import TeamDetail from '../TeamDetail/TeamDetail';

const Team = () => {
    const teamData =[{
        image: arch,
        name: 'Ar. Jammy',
        email: 'jammy.s@gmail.com'
    },{
        image: arch,
        name: 'Ar. Arifen',
        email: 'arifin.s@gmail.com' 
    },{
        image: arch,
        name: 'Ar. Marina',
        email: 'marina.s@gmail.com'  
    }]
    return (
        <div>
            <div className="text-center mt-5">
                <h5>Meet Our Team</h5>
                <h3>People Behind Mass Design </h3>
            </div>
            <div className="justify-content-center">
                <div className="w-90 row mt-5 pt-5">
                    {
                      teamData.map( team => <TeamDetail team={team}></TeamDetail>)  
                    }
                </div>
            </div>
        </div>
    );
};

export default Team;