/* 문제1: 객체에서 특정 키의 값을 안전하게 가져오는 함수 */

function getValueAtObject(obj, key) {
  if (key in obj) {
    // 변수 in 객체: 객체의 속성 중 변수의 값과 일치하는 이름이 있는지 확인
    return obj[key]; // 객체[변수]: 객체의 속성 중 변수의 값과 일치하는 이름의 속성 값
  } else {
    throw new Error("Error !"); //throw new Error("메시지"): 특정 조건에서 에러를 발생시키고, 해당 에러에 대한 메시지를 보여 줌
  }
}

/* 문제2: 배열에서 특정 인덱스의 값을 안전하게 가져오는 함수 */

function getNumberAtArray(arr, index) {
  if (!Array.isArray(arr)) {
    // Array.isArray(변수): 변수의 값이 배열인지 확인하여 배열이면 true, 배열이 아니면 false를 반환
    throw new Error("Error !");
  }
  if (index < 0 || index >= arr.length) {
    // 유효한 index: 0(배열의 첫 번째 요소) ~ arr.length-1(배열의 마지막 요소) -> index는 0부터 세기 때문
    throw new Error("Error!");
  }
  return arr[index];
}
