// inheritance chain

{
  const globalObject = Object;
  const ObjectPrototype = Object.prototype;
  const ObjectPrototype_proto_ = Object.prototype.__proto__;
  console.log('Object:', Object);

  const obj = {};
  const obj_proto_ = obj.__proto__;
  const obj_protoTest = obj_proto_ === Object.prototype;
  console.log('obj:', obj);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
}


{
  const globalArray = Array;
  const ArrayPrototype = Array.prototype;
  const ArrayPrototype_proto_ = Array.prototype.__proto__;
  const ArrayPrototype_proto_Test = ArrayPrototype_proto_ === Object.prototype;
  console.log('Array:', Array);

  const arr = [];
  const arr_proto_ = arr.__proto__;
  const arr_protoTest = arr_proto_ === Array.prototype;
  console.log('arr:', arr);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
}

{
  const globalString = String;
  const StringPrototype = String.prototype;
  const StringPrototype_proto_ = String.prototype.__proto__;
  console.log('String:', String);

  const str = '';
  const str_proto_ = str.__proto__;
  console.log('str', str);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
}

{
  const globalNumber = Number;
  const NumberPrototype = Number.prototype;
  const NumberPrototype_proto_ = Number.prototype.__proto__;
  console.log('Number:', Number);

  const num = 0;
  const num_proto_ = num.__proto__;
  console.log('num', num);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
}


{
  const globalBoolean = Boolean;
  const BooleanPrototype = Boolean.prototype;
  const BooleanPrototype_proto_ = Boolean.prototype.__proto__;
  console.log('Boolean:', Boolean);

  const bool = false;
  const bool_proto_ = bool.__proto__;
  console.log('bool', bool);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
}


{
  const globalFunction = Function;
  const FunctionPrototype = Function.prototype;
  const FunctionPrototype_proto_ = Function.prototype.__proto__;
  console.log('Function:', Function);

  const es5 = function () { };
  const es5_proto_ = es5.__proto__;
  console.log('es5:', es5);

  const es6 = () => { };
  const es6_proto_ = es6.__proto__;
  console.log('es6:', es6);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
}
