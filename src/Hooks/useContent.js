import React, { useEffect, useState } from 'react';

const useContent = () => {
    const [specialist,setSpecialist] = useState([]);
    useEffect(() => {
        fetch("/content.json")
        .then((res) => res.json())
        .then((data) => setSpecialist(data))
    } ,[])
    return [specialist, setSpecialist];
};
export default useContent;