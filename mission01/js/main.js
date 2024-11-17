
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}



// 정규표현식

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}



// validation

// HTML에서 각 요소 찾아서 해당 변수에 할당
const form = document.querySelector('.login-form');

const emailInput = document.getElementById('userEmail');
const emailError = document.getElementById('userEmailError');

const pwInput = document.getElementById('userPassword');
const pwError = document.getElementById('userPasswordError');

// form이 제출되면 함수 실행
form.addEventListener('submit', function (event) {
  // submit 해도 바로 서버로 제출되지 않고 아래 작업 먼저 하도록 함
  event.preventDefault();
  // 유효성 검사. 잘못된 부분이 있어서 isValid가 false로 바뀌면 페이지 이동하지 않도록 함
  let isValid = true;


// 1. email 정규표현식을 사용한 validation

if (emailReg(emailInput.value)) {
  // true면 해당 input에 is--invalid 클래스 제거 (is--invalid: CSS '공통 에러 메시지' -> 에러 메시지 숨김)
  emailInput.classList.remove('is--invalid');
  emailError.style.display = 'none';
} else {
  // false면 해당 input에 is--invalid 클래스 추가 (에러 메시지 표시)
  emailInput.classList.add('is--invalid');
  emailError.style.display = 'block';
  isValid = false; // isValid false로 바꿈
}


// 2. pw 정규표현식을 사용한 validation

if (pwReg(pwInput.value)) {
  // true면 해당 input에 is--invalid 클래스 제거 (에러 메시지 숨김)
  pwInput.classList.remove('is--invalid');
  pwError.style.display = 'none';
} else {
  // false면 해당 input에 is--invalid 클래스 추가 (에러 메시지 표시)
  pwInput.classList.add('is--invalid');
  pwError.style.display = 'block';
  isValid = false;
}



// 3. 로그인 버튼 클릭 시 user.id의 값과 input의 값 비교

if (emailInput.value === user.id) {
} else {
  alert('아이디가 일치하지 않습니다.');
  isValid = false;
}



// 4. 로그인 버튼 클릭 시 user.pw의 값과 input의 값 비교

if (pwInput.value === user.pw) {
} else {
  alert('비밀번호가 일치하지 않습니다.');
  isValid = false;
}



// 5. 두 값이 일치한다면 다음 페이지(welcome.html)로 이동

if (isValid && emailInput.value === user.id && pwInput.value === user.pw) {
  window.location.href = 'welcome.html';  // 로그인 성공 시 페이지 이동
}
});