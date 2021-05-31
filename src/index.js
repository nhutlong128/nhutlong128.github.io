import React from 'react';
import '../css/index.css';
import { useQuery, gql } from '@apollo/client';

import ImageSlider from '../components/ImageSlider'
import ProductCardDeck from '../components/ProductCardDeck'
import Header from '../components/Header';
import Footer from '../components/Footer';
import PhoneRinging from '../components/PhoneRinging'


const GET_ALL_CLASS_CAR = gql`
query GetAllClassAndCar {
    carInformationCollection {
      total
      items {
        carName
        carClass {
          sys {
            id
          }
        }
        carPrice
        priceUnit
        thumbnail {
          url
        }
        metaData
      }
    }
    carClassCollection {
      total
      items {
        carClass
        sys {
            id
          }
      }
    }
  }
 `;

function IndexPage() {
  const { loading, error, data } = useQuery(GET_ALL_CLASS_CAR);
    if (loading) return <p>Fetching Car</p>;
    if (error) return <p>`Error :(`</p>;
    const list_class = data.carClassCollection.items
    const list_car = data.carInformationCollection.items
    
    const all_car_list = []
    list_class.forEach(item_class => {
        let car_class_name = item_class.carClass;
        let car_class_id = item_class.sys.id;
        let car_list_within_class = []
        list_car.forEach(item_car => {
            let car = item_car
            if (car.carClass.sys.id === car_class_id) {
                car_list_within_class.push(item_car)
            }
        })
        all_car_list.push({'classID': car_class_id, 'className': car_class_name, 'list_car_within': car_list_within_class})
    });
  return (
    <main>
      <Header all_car_list = {all_car_list}/>
      <ImageSlider/>
      <ProductCardDeck all_car_list = {all_car_list}/>
      <Footer />
      <PhoneRinging />
    </main>
  );
}

export default IndexPage

