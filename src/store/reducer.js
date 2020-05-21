const initialStore = {
  livingRoom: [
    {
      id: 1,
      name: "KVIK",
      description:
        "to seria mebli wypoczynkowych z głębokimi, miękkimi siedziskami i wygodnym oparciem dla pleców.",
      price: 1449,
      previousPrice: 100,
      wide: false,
      path: "kvik",
      type: "sofa",
      category: "living-room",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/benarp-armchair__0400895_PE564990_S5.JPG?f=s",
    },
    {
      id: 2,
      name: "PLATSA",
      description:
        "Szafka na TV,hifi, 280x42x191 cm. Gałki i uchwyty sprzedawane są osobno.",
      price: 1330,
      previousPrice: null,
      wide: true,
      category: "living-room",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/platsa-media-storage-combination__0715668_PE732775_S5.JPG?f=s",
    },
    {
      id: 3,
      name: "SODERHAMN",
      description: "Szezlong, Samsta pomarańczowy",
      price: 899,
      previousPrice: 1000,
      wide: false,
      category: "living-room",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/soederhamn-chaise-longue-samsta-orange__0802366_PE768435_S5.JPG?f=s",
    },
    {
      id: 4,
      name: "KRAGSTA",
      description:
        "Okrągły kształt oferuje duży blat na tace, serwisy do kawy lub herbaty. A niewielki wymiar sprawia, że stół łatwo ustawić w pokoju.",
      price: 399,
      previousPrice: null,
      wide: true,
      category: "living-room",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/groenlid-2-seat-sofa-inseros-white__0577219_PE668687_S5.JPG?f=s",
    },
    {
      id: 5,
      name: "HAMMARN",
      description: "Sofa rozkładana, Knisa ciemnoszary, czarny, 120 cm",
      price: 379,
      previousPrice: null,
      wide: false,
      category: "living-room",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/hammarn-sofa-bed-knisa-dark-grey-black__0519027_PE641353_S5.JPG?f=s",
    },

    {
      id: 6,
      name: "KVISTBRO",
      description: "Stolik z miejscem do przechowywania, biały, 44 cm",
      price: 99.99,
      previousPrice: null,
      wide: false,
      category: "living-room",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/kvistbro-storage-table-white__0477822_PE618485_S5.JPG?f=s",
    },
    {
      id: 7,
      name: "REMSTA",
      description: "Fotel, Djuparp zielono-niebieski ciemnozielononiebieski",
      price: 159,
      previousPrice: 199,
      wide: false,
      category: "living-room",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/remsta-armchair-djuparp-dark-green-blue__0474490_PE615066_S5.JPG?f=s",
    },

    {
      id: 8,
      name: "LACK",
      description: "Stolik, dąb bejcowany na biało biały, 55x55 cm",
      price: 39.99,
      previousPrice: null,
      wide: false,
      category: "living-room",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/lack-side-table-white-stained-oak-effect__0411514_PE570468_S5.JPG?f=s",
    },
    {
      id: 9,
      name: "BESTA",
      description:
        "Szafka pod TV, dąb bejcowany na biało, Notviken niebieski, 180x42x39 cm",
      price: 640,
      previousPrice: 699,
      wide: true,
      category: "living-room",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/besta-tv-bench__0741014_PE742168_S5.JPG?f=s",
    },
    {
      id: 10,
      name: "FRIHETEN",
      description: "Narożnik z funkcją spania, Skiftebo ciemnoszary",
      price: 1599,
      previousPrice: null,
      wide: true,
      category: "living-room",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/friheten-corner-sofa-bed-with-storage__0175610_PE328883_S5.JPG?f=s",
    },
  ],
  office: [
    {
      id: 11,
      name: "FREDDE",
      description: "Biurko, czarny, 185x74x146 cm",
      price: 699,
      previousPrice: null,
      wide: true,
      category: "office",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/fredde-desk-black__0736008_PE740351_S5.JPG?f=s",
    },
    {
      id: 12,
      name: "MARKUS",
      description: "Krzesło biurowe, Vissle ciemnoszary",
      price: 450,
      previousPrice: 499,
      wide: false,
      category: "office",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/markus-office-chair-vissle-dark-grey__0724714_PE734597_S5.JPG?f=s",
    },
    {
      id: 13,
      name: "ALEX",
      description: "Komoda, biały, 36x70 cm",
      price: 249,
      previousPrice: 299,
      wide: false,
      category: "office",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/alex-drawer-unit-white__0087723_PE217289_S5.JPG?f=s",
    },
    {
      id: 14,
      name: "MILLBERGET",
      description: "Krzesło obrotowe, Bomstad czarny",
      price: 299,
      previousPrice: null,
      wide: false,
      category: "office",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/millberget-swivel-chair-bomstad-black__0724719_PE734602_S5.JPG?f=s",
    },
    {
      id: 15,
      name: "LINNMON ",
      description: "Stół, biały dąb bejcowany na biało, biały, 150x75 cm",
      price: 373,
      previousPrice: null,
      wide: true,
      category: "office",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/linnmon-alex-table-white-white-stained-oak-effect-white__0737569_PE741169_S5.JPG?f=s",
    },
  ],
  kids: [
    {
      id: 16,
      name: "VITVAL",
      description: "Rama łóżka piętrowego, biały, jasnoszary, 90x200 cm",
      price: 849,
      previousPrice: 899,
      wide: true,
      category: "kids",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/vitval-bunk-bed-frame-white-light-grey__0687345_PE722121_S5.JPG?f=s",
    },
    {
      id: 17,
      name: "ORFJALL",
      description: "Dziecięce krzesło biurowe, biały, Vissle różowy",
      price: 149,
      previousPrice: null,
      wide: false,
      category: "kids",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/oerfjaell-children-s-desk-chair-white-vissle-pink__0708525_PE726625_S5.JPG?f=s",
    },
    {
      id: 18,
      name: "BUSUNGE",
      description: "Szafa, jasnoróżowy, 80x139 cm",
      price: 549,
      previousPrice: 599,
      wide: false,
      category: "kids",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/busunge-wardrobe-light-pink__0642669_PE701351_S5.JPG?f=s",
    },
    {
      id: 19,
      name: "MINNEN",
      description: "Rozsuwana rama łóżka, turkusowy, 80x200 cm",
      price: 399,
      previousPrice: null,
      wide: true,
      category: "kids",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/minnen-ext-bed-frame-with-slatted-bed-base__0750778_PE746825_S5.JPG?f=s",
    },
    {
      id: 20,
      name: "MAMMUT",
      description: "Krzesełko dziecięce, do wewnątrz/na zewnątrz, niebieski",
      price: 49,
      previousPrice: null,
      wide: false,
      category: "kids",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/mammut-children-s-chair-in-outdoor-blue__0727922_PE735928_S5.JPG?f=s",
    },
  ],
  kitchen: [
    {
      id: 21,
      name: "KNOXHULT",
      description: "Kuchnia, szary, 220x61x220 cm",
      price: 1169,
      previousPrice: 1249,
      wide: true,
      category: "kitchen",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/knoxhult-kitchen__0628984_PE694127_S5.JPG?f=s",
    },
    {
      id: 22,
      name: "KNOXHULT",
      description: "Szafka z szufladami, szary, 40 cm",
      price: 220,
      previousPrice: null,
      wide: false,
      category: "kitchen",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/knoxhult-base-cabinet-with-drawers__0630743_PE694871_S5.JPG?f=s",
    },
    {
      id: 23,
      name: "KNOXHULT",
      description: "Kuchnia, biały, 120x61x220 cm",
      price: 649,
      previousPrice: 699,
      wide: false,
      category: "kitchen",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/knoxhult-kitchen-white__0628983_PE694124_S5.JPG?f=s",
    },
    {
      id: 24,
      name: "METOD",
      description:
        "Szafka pod zlew HAVSEN/3fr/2szu, biały, Bodbyn szary, 60x60 cm",
      price: 660,
      previousPrice: 700,
      wide: false,
      category: "kitchen",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/metod-base-cabinet-2drawers-f-havsen-sink__0330618_PE520715_S5.JPG?f=s",
    },
    {
      id: 25,
      name: "METOD",
      description:
        "Szafka stoj/wysuwane mocowania wew, biały, Bodbyn kremowy, 20x60 cm",
      price: 365,
      previousPrice: null,
      wide: false,
      category: "kitchen",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/metod-base-cabinet-pull-out-int-fittings__0435179_PE588817_S5.JPG?f=s",
    },
  ],
  accesories: [
    {
      id: 26,
      name: "LILLANGEN",
      description: "Wieszak na drzwi, stal nierdzewna",
      price: 10,
      previousPrice: null,
      wide: false,
      category: "accesories",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/lillangen-hanger-for-door-stainless-steel__0119326_PE275531_S5.JPG?f=s",
    },
    {
      id: 27,
      name: "BAREN",
      description: "Szczotka do wc, stal nierdzewna",
      price: 14.99,
      previousPrice: 19.99,
      wide: false,
      category: "accesories",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/baren-toilet-brush-stainless-steel__0711692_PE728385_S5.JPG?f=s",
    },
    {
      id: 28,
      name: "AROD",
      description: "Lampa biurkowa, zielony",
      price: 149,
      previousPrice: null,
      wide: false,
      category: "accesories",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/aroed-work-lamp-green__0738037_PE741325_S5.JPG?f=s",
    },
    {
      id: 29,
      name: "BRANAS",
      description: "Kosz na bieliznę, rattan, 80 l",
      price: 129,
      previousPrice: 149,
      wide: false,
      category: "accesories",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/branaes-laundry-basket-with-lining__0711142_PE728010_S5.JPG?f=s",
    },
    {
      id: 30,
      name: "JALL",
      description: "Deska do prasowania, 120x37 cm",
      price: 99,
      previousPrice: null,
      wide: true,
      category: "accesories",
      imgSrc:
        "https://www.ikea.com/pl/pl/images/products/daenka-ironing-board__0710874_PE727814_S5.JPG?f=s",
    },
  ],
  open: false,
  activeElement: {},
  recomendedProducts: [],
  searchingItem: [],
  shoppingCart: [],
};

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return {
        ...state,
        open: !state.open,
      };
    case "CLOSE_MENU":
      return {
        ...state,
        open: false,
      };
    case "SEARCH_ITEM": {
      const { inputValue } = action.payload;
      const allItems = [
        ...state.livingRoom,
        ...state.office,
        ...state.kids,
        ...state.kitchen,
        ...state.accesories,
      ];
      return {
        ...state,
        searchingItem: allItems.filter(
          (item) => item.name.indexOf(inputValue.toUpperCase()) > -1
        ),
      };
    }
    case "ADD_TO_CART": {
      const { amountValue, addingItem } = action.payload;
      const addItem = addingItem;
      const { shoppingCart } = state;
      if (amountValue.length < 1) {
        alert(`
        product adding error, fill in the quantity field`);
        return {
          ...state,
        };
      } else if (shoppingCart.includes(addItem)) {
        addItem.amountValue =
          parseInt(amountValue) + parseInt(addItem.amountValue);
        return { ...state, addItem };
      } else {
        addItem.amountValue = amountValue;
        alert("added to cart");
      }
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, addItem],
      };
    }
    case "DELETE_FROM_CART": {
      const { itemId } = action.payload;
      const { shoppingCart } = state;
      return {
        ...state,
        shoppingCart: shoppingCart.filter((item) => item.id !== itemId),
      };
    }
    default:
      return state;
  }
};

export default reducer;
