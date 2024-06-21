import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

const Success = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(()=>{
    const intervalId = setInterval(() => {
      setCountdown(countdown - 1);
      if(countdown === 0){
        navigate('/');
        }
        }, 1000);
        return () => clearInterval(intervalId);
        }, [countdown, navigate]);

  return (
    <>
    <section className="notFound">
      <div className="container">
        <img src="/sandwich.png" alt="success" />
        <h1>Redirecting to Home in {countdown} seconds....</h1>
        <Link to={'/'}>Skip</Link>
      </div>
    </section>
    </>
  )
}

export default Success