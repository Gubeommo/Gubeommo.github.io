---
title: "[CS] Call By Value Call By Reference"
date: 2025-07-09 +09:00
categories: [Tech, CS]
tags:
  [ 
    CS, 
    CallByValue 
  ]
image : ./assets/img/DrawnResource/csimage.png
published: true
hidden : false
---



## 💡 Call By Value Call By Reference

오늘은 CS에서 자주 헷갈리는 개념인 **Call by Value**와 **Call by Reference**를 쉽게 탐구해보자 
함수에 값을 넘길 때, **값이 복사되는지**, **참조가 공유되는지**에 따라 결과가 완전히 달라 진다는 사실...

---

## 📚 미리보는 결론!


| 방식              | 뜻                       | 값이 바뀔까? | 설명                            |
| ----------------- | ------------------------ | ------------ | ------------------------------- |
| Call by Value     | 값 전달                  | ❌ 안 바뀜    | 원본이 아닌 **복사본**이 넘어옴 |
| Call by Reference | 참조 전달 (`ref`, `out`) | ✅ 바뀜       | 원본을 **직접 조작**함          |

---

## 📑 Call by Value (값 전달)


```csharp
class Test
{
    public int A;
}

void ChangeValue(Test t) // 참조된 값
{
    t = new Test(); // 새로운 객체로 바꿈
    t.A = 100;
}

void Main()
{
    Test t = new Test(); 
    t.A = 10;

    ChangeValue(t);
    Console.WriteLine(t.A); // 👉 결과는? 10
}
```

### 해석


```csharp
Test t = new Test(); 
t.A = 10;
```

위 코드를 통해 **Heap 영역에는 `Test` 객체가 생성**되며, 예를 들어 그 주소가 `0xA`라고 가정해보자면
이후 `void ChangeValue(Test t)` 함수가 호출될 때, **원본 객체 자체가 전달되는 것이 아니라 그 객체를 가리키는 "참조값(주소)"이 복사되어 매개변수로 전달!**

```csharp
void ChangeValue(Test t) // 참조값의 복사본이 전달됨
{
    t = new Test(); // 새로운 객체로 참조 변경
    t.A = 100;
}
```

`ChangeValue()` 함수 내부에서 `t = new Test();`를 실행하면,  
**기존 참조(0xA)를 덮어쓰고(새로운 주소값을 바라봄), 새로운 객체를 Heap에 생성**하며 이 객체는 예를 들어 주소 `0xB`를 갖게된다고 가정 하면  
그 후 `t.A = 100;`은 **새롭게 생성된 객체의 A 속성에 값을 할당됨!**

따라서, 이 함수 안에서 `t`가 가리키는 객체는 `Main()` 함수의 `t`와는 완전히 다른 인스턴스이며,  
**`Main()`에 있는 원래의 `Test` 객체(주소 0xA)에는 아무런 영향도 주지 않음!**


---

## 📑 Call by Reference 


```csharp
class Test
{
    public int A;
}

void ChangeRef(ref Test t)  //ref 사용시 직접 연결됨
{
    t = new Test();
    t.A = 100;
}

void Main()
{
    Test t = new Test();
    t.A = 10;

    ChangeRef(ref t);
    Console.WriteLine(t.A); // 👉 결과는? 100
}
```

### 해석


```csharp
void ChangeRef(ref Test t)  //ref 사용시 직접 연결됨
{
    t = new Test();
    t.A = 100;
}
```

`ref`는 단순히 참조값을 복사해서 넘기는 게 아니라, 참조 변수 자체를 직접 넘기는 것 즉, 함수 안의 t는 Main 함수에 있던 원래 t랑 `같은 메모리 공간`을 바라보고 있음 !
그 후 `t = new Test()` 하게 되면 **Main에 있는 `t`에 새로운 객체를 할당하게 바뀌게 되어서 영향을주게 됨 !**


---

## 📖 결론

- **Call by Value**는 **참조값을 복사**해서 넘기기 때문에,  함수 안에서 객체를 새로 만들어도 **원본에는 영향 없음**

- **Call by Reference (`ref`)** 는  **참조 변수 자체를 넘기기 때문에**,   함수 안에서 참조를 바꾸거나 객체를 수정하면 **원본에도 그대로 반영됨**