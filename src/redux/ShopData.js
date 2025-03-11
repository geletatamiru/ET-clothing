import bluebeanie from "../images/shop-img/hats/blue-beanie.png";
import bluesnapback from "../images/shop-img/hats/blue-snapback.png";
import brownbrim from "../images/shop-img/hats/brown-brim.png";
import browncowboy from "../images/shop-img/hats/brown-cowboy.png";
import greenbeanie from "../images/shop-img/hats/green-beanie.png";
import graybrim from "../images/shop-img/hats/grey-brim.png";
import palmtreecap from "../images/shop-img/hats/palm-tree-cap.png";
import redbeanie from "../images/shop-img/hats/red-beanie.png";
import wolfcap from "../images/shop-img/hats/wolf-cap.png";

import blackshearling from "../images/shop-img/jackets/black-shearling.png";
import bluejeanjacket from "../images/shop-img/jackets/blue-jean-jacket.png";
import brownshearling from "../images/shop-img/jackets/brown-shearling.png";
import browntrench from "../images/shop-img/jackets/brown-trench.png";
import greyjeanjacket from "../images/shop-img/jackets/grey-jean-jacket.png";

import camovest from "../images/shop-img/mens/camo-vest.png";
import floralshirt from "../images/shop-img/mens/floral-shirt.png";
import longsleeve from "../images/shop-img/mens/long-sleeve.png";
import pinkshirt from "../images/shop-img/mens/pink-shirt.png";
import plkadotshirt from "../images/shop-img/mens/polka-dot-shirt.png";
import rollupjeanshirt from "../images/shop-img/mens/roll-up-jean-shirt.png";

import adidasnmd from "../images/shop-img/sneakers/adidas-nmd.png";
import blackconverse from "../images/shop-img/sneakers/black-converse.png";
import nikebrown from "../images/shop-img/sneakers/nike-brown.png";
import nikefunky from "../images/shop-img/sneakers/nike-funky.png";
import nikesred from "../images/shop-img/sneakers/nikes-red.png";
import timberlands from "../images/shop-img/sneakers/timberlands.png";
import whitenikehightops from "../images/shop-img/sneakers/white-nike-high-tops.png";
import yeezy from "../images/shop-img/sneakers/yeezy.png";

import bluetank from "../images/shop-img/womens/blue-tank.png";
import floralblouse from "../images/shop-img/womens/floral-blouse.png";
import floralskirt from "../images/shop-img/womens/floral-skirt.png";
import redpolkadotdress from "../images/shop-img/womens/red-polka-dot-dress.png";
import stripedsweater from "../images/shop-img/womens/striped-sweater.png";
import whitevest from "../images/shop-img/womens/white-vest.png";
import yellowtracksuit from "../images/shop-img/womens/yellow-track-suit.png";



const SHOP_DATA = {
  hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: brownbrim,
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: bluebeanie,
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: browncowboy,
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: graybrim,
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: greenbeanie,
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: palmtreecap,
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: redbeanie,
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: wolfcap,
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: bluesnapback,
        price: 16
      }
    ]
  },
  sneakers: {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: adidasnmd,
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: yeezy,
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: blackconverse,
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: whitenikehightops,
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: nikesred,
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: nikebrown,
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl:  nikefunky,
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: timberlands,
        price: 200
      }
    ]
  },
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: blackshearling,
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: bluejeanjacket,
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: greyjeanjacket,
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: brownshearling,
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: browntrench,
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: bluetank,
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: floralblouse,
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: floralskirt,
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: redpolkadotdress,
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: stripedsweater,
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: yellowtracksuit,
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: whitevest,
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: camovest,
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: floralshirt,
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: longsleeve,
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: pinkshirt,
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: rollupjeanshirt,
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: plkadotshirt,
        price: 25
      }
    ]
  }
}
export default SHOP_DATA;