let db = {};

export default {
  setItem: (item, value) => {
    return new Promise((resolve, reject) => {
      db[item] = value;
      resolve(value);
    });
  },
  multiSet: (item, fun) => {
    return new Promise((resolve, reject) => {
      for (let index = 0; index < item.length; index++) {
        db[item[index][0]] = item[index][1];
      }
      fun();
      resolve(value);
    });
  },
  getItem: (item, value = null) => {
    return new Promise((resolve, reject) => {
      resolve(db[item]);
    });
  },
  multiGet: (item) => {
    return new Promise((resolve, reject) => {
      resolve(db[item]);
    });
  },
  removeItem: (item) => {
    return new Promise((resolve, reject) => {
      resolve(delete db[item]);
    });
  },
  getAllKeys: (db) => {
    return new Promise((resolve) => {
      resolve(db.keys());
    });
  },
};
