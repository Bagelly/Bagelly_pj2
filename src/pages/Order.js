import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Order = () => {
  const [orderDataList, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://5uofg1te62.execute-api.ap-southeast-2.amazonaws.com/bb/Order');
		    console.log(response.data);

        const data = JSON.parse(response.data.body);
        setData(Array.isArray(data) ? data : []);

        
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Your Orders</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {orderDataList.map((orderData) => (
            <div key={orderData.id}>
              <img src={orderData.bagelimg} alt={orderData.name} style={{ width: '100px', height: 'auto' }}/>
							<p>Name: {orderData.name}</p>
              <p>Price: {orderData.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;