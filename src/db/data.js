/* eslint-disable no-return-assign */
import professional from '../assets/images/Professional.jpg';
import tshirt from '../assets/images/Tshirt.jpg';
import jacket from '../assets/images/Jacket.jpg';
import classic from '../assets/images/classic.jpg';

export default function homePageCards() {
    return [
        {
            title: 'Professional',
            sub: 'Collections',
            image: professional,
        },
        {
            title: 'T-shirt',
            sub: 'Collections',
            image: tshirt,
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
