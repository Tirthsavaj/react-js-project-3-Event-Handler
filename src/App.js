  import logo from './logo.svg';
  import './App.css';
  import './components/design.css'
  // import './components/Images'
  import React, { useState } from 'react';

  function App() {
    const allRecords = [
      {
        images: '/images/idli.jpg',
        name: 'idli',
        price: '30',
        category: 'break-fast',
      },
      {
        images: 'images/samosa.jpeg',
        name: 'samosa',
        price: '30',
        category: 'lunch',
      },
      {
        images: '/images/panjabi.jpg',
        name: 'panjabi',
        price: '99',
        category: 'Dinner',
      },
      {
        images: '/images/khaman.jpg',
        name: 'khaman',
        price: '120',
        category: 'break-fast',
      },
      {
        images: '/images/patra.avif',
        name: 'patra',
        price: '100',
        category: 'lunch',
      },
      {
        images: '/images/pizza.avif',
        name: 'pizza',
        price: '99',
        category: 'Dinner',
      },
    ];

    const [selectedCategory, setSelectedCategory] = useState();

    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };

    const filteredRecords = selectedCategory
      ? allRecords.filter((record) => record.category === selectedCategory)
      : allRecords;

    return (
      <div className="App">
        <div className="buttons">
          <button onClick={() => handleCategoryClick()}>All</button>
          <button onClick={() => handleCategoryClick('lunch')}>lunch</button>
          <button onClick={() => handleCategoryClick('break-fast')}>break-fast</button>
          <button onClick={() => handleCategoryClick('Dinner')}>Dinner</button>
        </div>
        <table className="records-table">
          <thead>
            <tr>
              <th>Images</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {
            filteredRecords.map((item) => {
              const { images, name, price, category } = item;
              return (
                <tr key={name}>
                  <td><img src={images} width={100} height={90}/></td>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>{category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  export default App;
