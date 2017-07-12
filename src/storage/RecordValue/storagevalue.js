
const storagevalue =(props)=>{
  let UID123_object = {
   name: 'Chris',
   age: 30,
   traits: {hair: 'brown', eyes: 'brown'},
  };
  // You only need to define what will be added or updated
  let UID123_delta = {
   age: 31,
   traits: {eyes: 'blue', shoe_size: 10}
  };

  AsyncStorage.setItem('UID123', JSON.stringify(UID123_object), () => {
    AsyncStorage.mergeItem('UID123', JSON.stringify(UID123_delta), () => {
      AsyncStorage.getItem('UID123', (err, result) => {
        console.log(result);
      });
    });
  });

};

export default storagevalue;
