import professional from 'assets/images/Professional.jpg';
import tshirtCat from 'assets/images/Tshirt.jpg';
import jacket from 'assets/images/Jacket.jpg';
import classic from 'assets/images/classic.jpg';
import tshirt from 'assets/images/homeProduct1.png';
import tie from 'assets/images/homeProduct2.png';
import furCoat from 'assets/images/homeProduct3.png';
import jacket1 from 'assets/images/mans-jacket-1.jpg';
import jacket2 from 'assets/images/mans-jacket-2.jpg';
import jacket3 from 'assets/images/mans-jacket-3.jpg';
import jacket4 from 'assets/images/mans-jacket-4.jpg';
import jacket5 from 'assets/images/mans-jacket-5.jpg';
import jacket6 from 'assets/images/mans-jacket-6.jpg';
import shoes1 from 'assets/images/mans-shoes-1.jpg';
import shoes2 from 'assets/images/mans-shoes-2.jpg';
import shoes3 from 'assets/images/mans-shoes-3.jpg';
import shoes4 from 'assets/images/mans-shoes-4.jpg';
import shoes5 from 'assets/images/mans-shoes-5.jpg';
import tshirt1 from 'assets/images/mans-tshirts-1.jpg';
import tshirt2 from 'assets/images/mans-tshirts-2.jpg';
import tshirt3 from 'assets/images/mans-tshirts-3.jpg';
import tshirt4 from 'assets/images/mans-tshirts-4.jpg';
import tshirt5 from 'assets/images/mans-tshirts-2.jpg';
import tshirt6 from 'assets/images/mans-tshirts-2.jpg';






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
};

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
};

export function mansJackets() {
  return [
    {
      title: 'COTTON JACKET',
      oldPrice: '$129',
      newPrice: '$100',
      colors: ['#b5a186', '#202434', '#fbf5f0'],
      image: jacket1,
    },
    {
      title: 'HOODED JACKET',
      oldPrice: '$80',
      newPrice: '$73',
      colors: ['#4b5b6b', '#423496'],
      image: jacket2,
    },
    {
      title: 'COLORBLOCK LEATHER JACKET',
      oldPrice: '$120',
      newPrice: '$110',
      image: jacket3,
    },
    {
      title: 'LEATHER BIKER JACKET',
      oldPrice: '$150',
      newPrice: '$142',
      image: jacket4,
    },
    {
      title: 'DENIM JAKET',
      oldPrice: '$100',
      newPrice: '$96',
      colors: ['#4b5b6b', '#2b437a'],
      image: jacket5,
    },
    {
      title: 'HOODED BOMBER JACKET',
      oldPrice: '$119',
      newPrice: '$111',
      image: jacket6,
    },
  ];
};

export function mansShoes() {
  return [
    {
      title: 'FABRIC SNEAKERS',
      oldPrice: '$60',
      newPrice: '$54',
      colors: ['#242524', '#f9f9fb', '#a3927e'],
      image: shoes1,
    },
    {
      title: 'LEATHER SNEAKERS',
      oldPrice: '$80',
      newPrice: '$55',
      image: shoes2,
    },
    {
      title: 'RUNNING SHOES',
      oldPrice: '$75',
      newPrice: '$63',
      colors: ['#928170', '#a28850', '#ece2d5'],
      image: shoes3,
    },
    {
      title: 'BUCKLED LUG SOLE SANDALS',
      oldPrice: '$72',
      newPrice: '$68',
      colors: ['#353e24', '#E5E5E5'],
      image: shoes4,
    },
    {
      title: 'LEATHER SHOES',
      oldPrice: '$102',
      newPrice: '$98',
      colors: ['#242424', '#3c2a20'],
      image: shoes5,
    },
  ];
};

export function mansTshirts() {
  return [
    {
      title: 'PATCH PRINT T-SHIRT',
      oldPrice: '$40',
      newPrice: '$32',
      colors: ['#2A282A', '#E5E5E5'],
      image: tshirt1,
    },
    {
      title: 'PATCH STRIPED T-SHIRT',
      oldPrice: '$45',
      newPrice: '$38',
      image: tshirt2,
    },
    {
      title: 'TEXT PRINT T-SHIRT',
      oldPrice: '$200',
      newPrice: '$120',
      colors: ['#2A282A', '#575757'],
      image: tshirt3,
    },
    {
      title: 'KNIT POCKET T-SHIRT',
      oldPrice: '$50',
      newPrice: '$30',
      colors: ['#D0C3AC', '#897072'],
      image: tshirt4,
    },
  ];
};

export function womansCoats() {
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
};

export function womansDresses() {
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
};

export function womansBags() {
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
};