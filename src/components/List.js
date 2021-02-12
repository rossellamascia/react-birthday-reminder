import React from 'react';

const List = ({ data }) => {
  return (
    <>
      {data.map(el => {
        return (
          <article className="person" key={el.id}>
            <img src={el.image} alt={el.id} />
            <div>
              <h4>{el.fullname}</h4>
              <p>{el.age} years</p>
              <p>{el.birthday}</p>
            </div>
          </article>
        )
      })}
    </>
  );
};

export default List;
