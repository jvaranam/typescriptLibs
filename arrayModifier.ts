private checkDuplicateAddress(_entityArray, _element){
    return new Promise((resolve, reject) =>{
      _entityArray.find((element)=>{
        //if(element.latLng.lat == _latLng.lat && element.latLng.lng == _latLng.lng && element.name == this.addressInfo.name && element.address == this.addressInfo.address){
        if(element.name == _element.name){
          resolve(_element);
        }
      });
      reject("no");
    })
  }
  
  private spliceObjectFromArray(_array, _obj, _elementType){
    return new Promise((resolve, reject) =>{
      _array.find((element, index) =>{
        if(element[_elementType] == _obj[_elementType]){
          _array.splice(index,1);
          resolve(_array);
        }
      })
      reject();
    })
  }
