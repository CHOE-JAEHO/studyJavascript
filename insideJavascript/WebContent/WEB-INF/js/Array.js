/**
 * 52P배열부터 시작.
 */
//3.5배열
//3.5.1 배열 리터럴
//   3-13-----------------
//배열 리터럴을 통한 5개의 원소를 가진 배열을 생성.
var colorArr=['orange','yellow','blue','green','red'];//[]를 쓴다.

console.log(colorArr[0]); //orange
console.log(colorArr[1]); //yellow
console.log(colorArr[4]); // red
// 3-13 끝-----------------
//3.5.2 배열의 요소 생성
//3-14-----------------------
var emptyArr=[];
console.log(emptyArr[0]);

//배열의 동적생성 3-14------------------
emptyArr[0]=100;
emptyArr[3]='eight';
emptyArr[7]=true;
console.log(emptyArr);// 100, undifined, undifined, 'eight', undifined, undifined, undifined, true
console.log(typeof emptyArr[1])
/*즉
사용자가 추가한 undefined는 하나의 데이터이며 '비어있음'을 의미하고 하나의 값으로 동작합니다.
그래서 프로퍼티나 배열의 요소에서 고유의 키값(프로퍼티 이름)이 실존하게 되며 순회의 대상이 될 수 있습니다.하지만
사용자가 추가한 undefined가 아닌 자바스크립트 엔진이 반환한 undefined는 해당 프로퍼티나 배열의 키(index)가 존재하지 않기 때문에
 문자 그대로 값이 없음을 나타내는 것입니다.
출처: https://okayoon.tistory.com/entry/코어-자바스크립트-undefined와-null [Zzolab Blog :)]*/
console.log(emptyArr.length);//8
//배열의 동적생성 3-14- 끝-----------------

//3-15 배열의 length-------------
var arr =[];
console.log(arr.length) // 0

arr[0] =0; //arr.length =1;
arr[1] =1;//arr.length =2;
arr[2] =2;//arr.length =3;
arr[100] =100; 
console.log(arr.length)// 101 중간에 비운것도 길이로 쳐짐. 공간 살아있음.
// 3-15 끝--------------------------

//--3-16배열 length 프로퍼티의 명시적 변경---------
var arr=[0,1,2];
console.log(arr.length); //3
arr.length =5; // 직접적으로 설정.
console.log(arr);  //[0,1,2, undefined x 2] empty를 typeof에 넣으면 undifined 로 표시된다.

arr.length=2; //길이를 줄이면서 배열의 요소를 지워버림
console.log(arr);
console.log(arr[2]);
arr.length=3;
console.log(arr);//지워진 자리를 늘려도 원래 숫자는 돌아오지 안는다. 이미 지워짐.
//3-16 끝-------------------------------------

//배열의 표준 매서드와 length프로퍼티
//3-17 push()메서드와 length프로퍼티----------------

var pushArr =['zero','one','two'];
//push()메서드 호출 --호출하는 배열객체 맨 뒤에 요소를 추가한다.
pushArr.push('three');
console.log(pushArr) //["zero", "one", "two", "three"]
/*
0: "zero"
1: "one"
2: "two"
3: "three"
length: 4
__proto__: Array(0)
*/
//length값 변경후 ,push()메소드 호출
pushArr.length=5;
pushArr.push('four');
console.log(pushArr); //["zero", "one", "two", "three", empty, "four"]
/*
0: "zero"
1: "one"
2: "two"
3: "three"
5: "four"
length: 6
__proto__: Array(0)
*/
//빈 공간 뒤에도 push로 요소를 삽입할 수있다.

// 배열과 객체 3-18 배열과 객체의 유사점과 차이점-------
//colorsArray 배열
var colorsArray = ['orange','yellow','green'];
console.log(colorsArray[0]); //orange
console.log(colorsArray[1]); //yellow
console.log(colorsArray[2]); //green

//colorsObj 객체
var colorsObj ={
	'0':'orange', //키가 문자열 0으로 들어감.
	'1':'yellow',
	'2':'green'
};
console.log(colorsObj[0]); //orange  ★자바스크립트 엔진이 []연산자 내에 숫자가 사용될 경우 해당 숫자를 자동으로 문자열로 바꿔주기 때문이다.
console.log(colorsObj[1]); //yellow 
console.log(colorsObj[2]); //green

//typeof 연산자 비교.
console.log(typeof colorsArray); //object
console.log(typeof colorsObj);  //object 둘 다 객체이다.

//length 프로퍼티.
console.log(colorsArray.length); //	3
console.log(colorsObj.length); //  length프로퍼티 내장x

//배열 표준 매서드
colorsArray.push('red'); //배열의 기본 메서드 동작.
//colorsObj.push('red');  //배열이 아니므로 push동작 안함.오류
//같은 객체이지만 배열과 객체는 부모인 prototype이 다르다.
//--3-18끝--------------------------------------------------

//3-19-배열의 프로토타입과 객체의 프로토타입비교-------------------
var emptyArray1=[];
var emptyObj={};

console.dir(emptyArray1.__proto__); //배열 프로토타입. Array.prototype출력//Object를 prototype으로둔다.
console.dir(emptyObj.__proto__); //객체 프로토타입. Object.prototype을 출력.
//3-19 끝-=-=---------------------------------

//3-20배열의 동적 프로퍼티 생성-00=======================
var arr20= ['zero','one','two'];
console.log(arr20.length); //3

//프로퍼티 동적추가.
arr20.color ='blue';
arr20.name= 'number_array';
console.log(arr.length);  //3 프로퍼티만 추가됬을 뿐 배열 길이가 늘어나진 않았다.

//배열원소 추가.
arr20[3]='red';
console.log(arr20.length) //4 배열의 가장큰 index가 변했을 경우에만 변경. 즉 가장 큰  index의 길이를 표시한다.

//배열 객체 출력.
console.dir(arr20)
//3-20 끝------------------------

//3-21 배열의 프로퍼티 열거-----------------
for(var prop in arr20){
	console.log(prop,arr20[prop]); //객체표현처럼 모든 프로퍼티를 열거
}
for(var i=0;i<arr20.length; i++){
	console.log(i,arr20[i]);      //가장 긴 배열 요소만 열거.
}
//3-21 끝-------------------------------

//3-22 delete연산자를 이용한 배열 프로퍼티삭제
var arr22=['zero','one','two','three'];
delete arr22[2];
console.log(arr22); // 배열요소를 delete로는 값만 삭제한다. 길이를 줄이지는 못한다. ["zero", "one", empty, "three"]
console.log(arr22.length); //4
//배열을 완전히 삭제할 경우에는 배열 메서드(push와 같은)splice를 사용.
//splice(start, deleteCount,item)
/*
start: 시작 인덱스
deleteCount:시작 인덱스를 포함한 삭제할 요소의 수
item:삭제할 위치에 추가할 요소. 삭제한 겟수만큼 , , 추가
*/
//3-23-splice()를 이용한 배열 프로퍼티 삭제.
var arr23= ['zero','one','two','three'];
arr23.splice(2,1) //index 2부터 요소 1를 삭제;
console.log(arr23); // ["zero", "one", "three"]
console.log(arr23.length);//3
//3-23끝---------------------------------------

//3-24 Array()생성자 함수를 통한 배열생성----------------------
var foo =new Array(3); //인자 하나일 때는 length값
console.log(foo);
console.log(foo.length);

var bar = new Array(1,2,3); //인자 여러개 일때는 배열 요소.
console.log(bar); //출력값 [1,2,3]
console.log(bar.length);// 출력값 3
//3-24 끝---------------------------------

//3-25 유사배열객체의 배열메서드 호출----------------------
var arr25=['bar'];
var obj={
	name: 'foo',
	length:1
};

arr25.push('baz');
console.log(arr25); //["bar", "baz"]
//  obj.push('baz'); //에러 객체에서 배열메소드 호출..오류
//3-25 끝-------------------------------------

//apply()메소드를 이용하면 유사배열 객체도 push메소드를 호출 가능하다.
//3-26 유사배열 객체에서 apply()를 활용한 배열 메소드 호출
var arr26=['bar'];
var obj ={name: 'foo', length:1};

arr26.push('baz');
console.log(arr26); // ["bar", "baz"]

Array.prototype.push.apply(obj,['baz']);
console.log(obj);// {1: "baz", name: "foo", length: 2} 새롭게 배열이 추가되면서 ['baz']가 push되었다.
//3-26 끝----------------------------------------

//3-27 기본 타입변수에서의 메서드 호출(기본타입과 표준메소드)------------
var num=0.5;
console.log(num.toExponential(1)); //출력 값 5.0e-1 
//숫자를 지수 형태의 문자열로 반환한다. 인자 값은 소수점 몇자리까지 표시할 것인지 지정하는 것이다.
//문자열 메서드 호출
console.log("test".charAt(2)); // s 문자열에서 인자로 받은 인덱스에 위치한 문자를 반환한다.
//3-27 끝-----------------------------------

//3-28 연산자 예제------------------------
var add1= 1+2;
var add2= 'my' + 'String';
var add3= 1+'string';
var add4 ='string' +2;
//숫자 + 숫자 는 숫자의 연산, 문자가 하나라도 섞인 연산은 문자열로 반환한다.

console.log(add1);
console.log(add2);
console.log(add3);
console.log(add4);
//3-28 끝------------------------------

//typeof 연산자
/*typeof연산자는 피연산자의 타임을 '문자열'의 형태로 리턴한다. 여기서 null과 배열이 'object'인 것,
 함수는 'function'인점에 유의하자*/
console.log(typeof 1)
console.log(typeof 'ㅇㅇ')
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof obj)
console.log(typeof arr26)

console.log(typeof function(){});

//3-29 ==동등 연산자와 ===일치 연산자의 차이점-----------
console.log(1 =='1'); //true
console.log(1==="1"); //false
/*==일 경우 1과 '1'은 타입이 다를 경우 타입변화가 일어나서 비교,
=== 는 타입이 다를 경우에도 타입 변화없이 비교함*/

//3-29 끝-----------------------------------------

//3-30 !!연산자 활용을 총한  불린 값 변환
//연산 하는 값을 true, false 값(boolean)으로 판단한다.
console.log(!!0);		//0= false
console.log(!!1);		//1= true
console.log(!!'String'); //true
console.log(!!'');	//공백, null= false
console.log(!!true); // true
console.log(!!false);  //false
console.log(!!null); //공백, null= false
console.log(!!undefined); //공백, null= false
console.log(!!{}); //true  *빈 객체
console.log(!![1,2,3]); //true  *값이 있는 객체 
//3-30--------------------끝---------------