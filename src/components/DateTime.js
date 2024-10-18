import React, { useEffect, useState } from 'react';
import './DateTime.css'; 

const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); 
    return () => clearInterval(interval); 
  }, []);

  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return (
    <div className="datetime-box">
      {dateTime.toLocaleDateString(undefined, options)}
    </div>
  );
};

export default DateTime;
