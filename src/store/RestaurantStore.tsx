import Realm from 'realm';
import {Restaurant} from '../types/api';

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
