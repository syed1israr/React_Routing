import React, { useEffect, useState } from 'react';

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/syed1israr')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center  m-5 text-black p-4 text-3xl">
      Github id: {data.id}
      <div className='w-screen  flex  align-middle justify-center mt-5'    ><img src={data.avatar_url} alt="Git picture " className='rounded-md' /></div>
    </div>
  );
}

export default Github;
