/**
 * 
 */
var foo={
	name:'foo',
	age:20,
	major:'computer science'
};

console.log(foo)
//foo객채의 출력과 
var prop;

//for in 으로 객체의 프로퍼티를 각각 모두 출력하는 것은 다르다.
//반복문이므로 객채의 내용이 전부 출력되는 것일뿐, 하나씩 출력하려면 다른 방법이 필요하다.
function test(){
	var str=''; //문자열 값을 없에고 싶을 때는 자바스크립트에선 ''공백값을 준다.
for(prop in foo){
	//변수에 3번 반복해서 추가된다.
	
		str+="<li>"+prop+","+foo[prop]+"</li>"
		
	$("#test").html(str)//한번만실행.
	console.log(str)
				//for문 안에서만 사용 가능한 방법.
	console.log(prop//프로퍼티의 이름.
				// 객체명이 모든 프로퍼티의 이름을 총칭하고, 
				,foo[prop]//프로퍼티의 값. 
				//객체 foo의 프로퍼티 객체 prop를 출력하는 구문을 작성.프로퍼티의 값이 출력된다.
				)
				
}
}
// 객체 delete(객체자체는 delete되지 않는다. 프로퍼티만 delete가능.])))
var food ={
	name: 'foo',
	nickname: 'babo'
};

console.log(food.nickname);
delete food.nickname;
console.log(food.nickname)

delete food
console.log(food.name);

//참초타입의 특성---------------------------------------
/*
var objA={
	val:40
};
var objB= objA;
console.log(objA.val);
console.log(objB.val);
*/

/*참조 타입은 메모리 주소를 참조하기 때문에 
objB가 참조하는 주소의 값을 변경하는 것은
objB가 참조하는 objA의 참조값 즉. 같은 참조값을 변경하는 것이된다.
그러므로 objA와 objB는 같은 주소를 공유하며, 참조값의 변경을 공유한다.*/
/*★불러내는 변수명이 다를 뿐 같은 것을 가르킨다. 부르는 이름이 다르지만 본질이 같은 것과 마찬가지.
 '나 (val=40)'라는 존재는 다 같은 '나 (val=40)' 지만 부모님에게는 자식(objA), 
학교에서는 학생(objB)이 되는 것과 유사한 형태이다.
그러므로 참조타입의 변수이 여러개가 되는 경우나, 참조 값이 많은 연산을 거치는 경우에는 그 사용에 주의가 필요할 것 같다.*/

/*
objB.val=50;//참조 주소의 값이 변했다. 같은 주소를 가르키므로 같은 값이 변한 것이다.
console.log(objA.val);
console.log(objB.val);
*/

//---------------------------------------------------------

//객체비교------------------------------------------------
/*
var a= 100;
var b= 100;
var objD= {value:100};
var objE= {value:100};
var objF= objE;
console.log(a ==b) //true
console.log(objD == objE) //false 주소값을 참조하고 있으므로 값은 같으나 주소값은 다른다.
console.log(objE == objF)//true objF는 objE와 같은 곳을 가르키므로 참이다.
*/

//----------------------------------------------

//참조에 의한 함수 호출 방식 3-11-------------------------------------------
var a = 100;
var objA={ value:100};
//메소드생성
function changeArg(num, obj){//매개변수를 생성한것이다. 갑자기 어디서 튀어나온 것인가 깜짝 놀랐다.
		num=200; //매개변수num자리에 들어온 값을 200으로 변경.
		obj.value= 200; //매개변수 obj.valeu의 값을 200으로 변경
	
	console.log(num); //200
	console.log(obj); //200
	}
	
changeArg(a,objA);
console.log(a); //100 메소드에서 a인자는 a의 값을 복사해서 받은 것이다. 그러므로 실제 a의 값은 변하지 않는다.(기본타입/값에의한 호출.)
console.log(objA); //200 참조변수는 참조 주소를 호출 받은 것. 등록된 주소의 값이 변하고 그대로 공유된다.(참조타임/ 참조에의한 호출.)

//3- 11 끝---------------------------------------------

//프로토타입.
//3-12 객체 생성 및 출력---------------------------------
var foo12={  //mysql 테이블 생성느낌이 난다. 프로퍼티간에 쉼표를 써서 그런듯
	name: 'foo',
	age: 30
};

console.log(foo12.toString())/*.toString은 Object가 기본적으로 가지는 매소드로 
//모든 객체는 prototype이라는 숨겨진 ★프로퍼티를 가진다.*/
console.log(foo12);//객체 출력결과에서 _proto_:Object 를 확인할 수 있다.
//객체 리터럴 방식으로 생성된 객체의 경우 Object.prototype 객체가 프로토타입 객체가 된다. //기본 내장프로퍼티
//__proto__라는 이름으로 표시되는 프로퍼티가, 자동적으로 생성된 프로퍼티(Object.prototype)이다.``