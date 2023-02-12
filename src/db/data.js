import professional from 'assets/images/Professional.jpg';
import tshirtCat from 'assets/images/Tshirt.jpg';
import jacket from 'assets/images/Jacket.jpg';
import classic from 'assets/images/classic.jpg';
import tshirt from 'assets/images/homeProduct1.png';
import tie from 'assets/images/homeProduct2.png';
import furCoat from 'assets/images/homeProduct3.png';

export function homePageCategories() {
  return [
    {
      title: 'Professional',
      sub: 'Collections',
      image: professional,
    },
    {
      title: 'T-shirt',
      sub: 'Collections',
      image: tshirtCat,
    },
    {
      title: 'Jacket',
      sub: 'Collections',
      image: jacket,
    },
    {
      title: 'classic',
      sub: 'Collections',
      image: classic,
    },
  ];
}

export function homePageProducts() {
  return [
    {
      title: 'T-shirt',
      oldPrice: '$50',
      newPrice: '$30',
      colors: ['#2A282A', '#E5E5E5'],
      image: tshirt,
    },
    {
      title: 'Tie',
      oldPrice: '$50',
      newPrice: '$45',
      colors: ['#963434', '#423496'],
      image: tie,
    },
    {
      title: 'Fur Coat',
      oldPrice: '$200',
      newPrice: '$120',
      colors: ['#D9C1AA', '#F1EEA5', '#F8B2FA'],
      image: furCoat,
    },
  ];
}

export function mansJackets() {
  return [
    {
      title: 'T-shirt',
      oldPrice: '$50',
      newPrice: '$30',
      colors: ['#2A282A', '#E5E5E5'],
      image: tshirt,
    },
    {
      title: 'Tie',
      oldPrice: '$50',
      newPrice: '$45',
      colors: ['#963434', '#423496'],
      image: tie,
    },
    {
      title: 'Fur Coat',
      oldPrice: '$200',
      newPrice: '$120',
      colors: ['#D9C1AA', '#F1EEA5', '#F8B2FA'],
      image: furCoat,
    },
    {
      title: 'T-shirt',
      oldPrice: '$50',
      newPrice: '$30',
      colors: ['#2A282A', '#E5E5E5'],
      image: tshirt,
    },
  ];
}