import React from 'react';

const Home = () => {
  const statement = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi modi doloribus necessitatibus, sint, quod repellendus tempora cupiditate libero, voluptatum similique reprehenderit eius? Earum asperiores quo alias id animi, perferendis corrupti!';

  return (
    <div style={{
      padding: '20px',
    }}
    >
      <h2 style={{
        fontSize: '35px',
        padding: '20px 0',
      }}
      >
        Welcome to our page!
      </h2>
      <p>{statement}</p>
      <br />
      <p>{statement}</p>
    </div>
  );
};

export default Home;
