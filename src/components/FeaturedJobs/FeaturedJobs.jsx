import { useEffect, useState } from "react";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() =>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data => setJobs(data))
    }, [])
    return (
        <div className="text-center">
            <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptatum!</p>
        </div>
    );
};

export default FeaturedJobs;