import Realm from 'realm';
import {Restaurant} from '../types/api';

// class RestaurantClass {
//   public _id: string = '';
//   public title: string = '';
//   public address: string = '';
//   public latitude: string = '';
//   public longitude: string = '';
//   public rating: number = 0;
//   public total_review: number = 0;
//   public description: string = '';
//   public mobile: string = '';
//   public images: Realm.List<ImageClass>;
//   public static schema: Realm.ObjectSchema = {
//     name: 'User',
//     primaryKey: '_id',
//     properties: {
//       _id: 'uuid',
//       title: 'string',
//       address: 'string',
//       latitude: 'string',
//       longitude: 'string',
//       rating: 'float',
//       total_review: 'float',
//       description: 'string',
//       mobile: 'string',
//       images: 'Image[]',
//     },
//   };
// }

// class ImageClass {
//   public _id: string = '';
//   public name: string = '';
//   public static schema: Realm.ObjectSchema = {
//     name: 'Image',
//     primaryKey: '_id',
//     properties: {
//       _id: 'uuid',
//       url: 'string',
//     },
//   };
// }

export const RestaurantSchema = {
  name: 'Restaurant',
  properties: {
    id: 'objectId',
    title: 'string',
    address: 'string',
    latitude: 'string',
    longitude: 'string',
    rating: 'float',
    total_review: 'float',
    description: 'string',
    mobile: 'string',
    images: 'Image[]',
  },
  primaryKey: 'id',
};

export const ImageSchema = {
  name: 'Image',
  properties: {
    url: 'string',
  },
};

export const storeRestaurant = async (data: Restaurant[]) => {
  try {
    const realm = await Realm.open({
      schema: [RestaurantSchema, ImageSchema],
    });
    realm.write(() => {
      data.map(restaurant => {
        restaurant.id = new Realm.BSON.ObjectId();
        restaurant.images = restaurant.images.map(image => {
          return {
            url: image.url,
            id: new Realm.BSON.ObjectId(),
          };
        });
        realm.create('Restaurant', restaurant);
      });
    });
    realm.close();
  } catch (err) {
    console.error('Failed to open the realm', err);
  }
};

export const getRestaurant = () => {
  return new Promise<Restaurant[]>((resolve, reject) => {
    Realm.open({
      schema: [RestaurantSchema, ImageSchema],
    }).then(realm => {
      try {
        const restaurant: Restaurant[] = realm.objects('Restaurant');
        resolve(JSON.parse(JSON.stringify(restaurant)));
      } catch (err) {
        console.error('Failed to open the realm', err);
        reject(err);
      }
    });
  });
};

export const deleteRestaurants = () => {
  return new Promise<boolean>((resolve, reject) => {
    Realm.open({
      schema: [RestaurantSchema, ImageSchema],
    }).then(realm => {
      try {
        realm.write(() => {
          // Delete all objects from the realm.
          realm.deleteAll();
        });
        resolve(true);
      } catch (err) {
        console.error('Failed to open the realm', err);
        reject(err);
      }
    });
  });
};
