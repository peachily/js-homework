// 과제 순서

// 1. 함수의 이름
// 2. 함수의 실행부 작성
// 3. 함수의 로직
// 4. validation

/* 문제1 */
const obj = {
  name: "tiger",
  age: 40,
};

function getValueAtObject(object, key) {
  // 객체에 키를 입력했을 때 값이 나오길 기대

  if (!(Object.prototype.toString.call(object).slice(8, -1).toLowerCase() === "object")) {
    // 함수는 매개변수를 유연하게 받을수록 재사용성이 증가 -> type 체크하는 방법으로 Object 사용
    throw new TypeError("getValueAtObject 함수의 첫 번째 인수는 객체 타입이어야 합니다."); // Error를 발생시킴
  }

  // 이렇게 해도 됨
  // if(!(typeof object === 'object')){console.error('getValueAtObject 함수의 첫 번째 인수는 객체 타입이어야 합니다.')};
  // if(typeof key !== 'string'){console.error('getValueAtObject 함수의 두 번째 인수는 문자 타입이어야 합니다.)}

  if (!(key in object)) {
    console.error("해당 객체에는 key값이 존재하지 않습니다.");
    return; // 함수 실행을 멈춤. console.error 대신 throw new SyntaxError를 쓰면 필요 없는 부분
  }

  return object[key];
}

// Object.hasOwn, Object.prototype.hasOwnProperty 를 사용하면 더 안전하게 만들 수 있음

getValueAtObject(obj, "name"); // 'tiger'

// 다른 방법

// function getValueAtObject(object,key){
//
//   const entries = Object.entries(object);
//
//   for(let keyValue of entries){
//     const key = keyValue[0];
//     const value = keyValue[1];
//
//     if(_key === key ){return value}
//     }
//
//   }
//
// console.log( getValueAtObject(obj,'name'));

/* 문제2 */

const arr = ["정주연", "박혜미", "김영현"];

function getNumberAtArray(array, index) {
  if (!Array.isArray(array)) {
    throw new Error("전달된 첫 번째 인수의 데이터 타입은 ${typeof array} 타입입니다. 해당 함수의 첫 번째 인수는 배열 타입이어야 합니다.");
  }

  if (index >= 0 && index < array.length) {
    return array[index];
  } else {
    throw new Error("...");
  }
}

console.log(getNumberAtArray(arr, 3));
