---
title: [CS] List<T> vs HashSet<T>
date: 2025-07-8 +09:00
categories: [Tech, CS]
tags:
  [
  CS, List, HashSet
  ]


published: true
hidden : false
---

## 💡 List<T> 와 HashSet<T>의 차이점 ? 뭐가 다르지

이 두개의 컬렉션에는 둘다 데이터를 담는 캘랙션인데, 언제 어떻게 쓰이는지 조금은 다른데 한번 알아보자!

---

## 📑 간단 비교표

| 항목      | `List<T>`                  | `HashSet<T>`                   |
| --------- | -------------------------- | ------------------------------ |
| 내부 구조 | 배열 (Array 기반)          | 해시 테이블 (Hash Table 기반)  |
| 중복 허용 | ✅ 허용함                   | ❌ 중복 허용 안 함              |
| 정렬 유지 | ✅ 인덱스 순서 유지         | ❌ 순서 보장 안 함              |
| 탐색 속도 | ❌ 느림 (`O(n)`)            | ✅ 빠름 (`O(1)` 평균)           |
| 주요 목적 | 순차적 접근, 정렬된 데이터 | 중복 제거, 빠른 포함 여부 체크 |

---
## 📑 1. `List<T>`는 언제 쓰나?

`List<T>`는 가장 범용적인 컬렉션
- 순서가 중요할 때
- 인덱스로 접근해야 할 때
- 중복이 허용될 때
- 
```csharp
var list = new List<string>();
list.Add("apple");
list.Add("apple");
Console.WriteLine(list.Count); // 2 (중복 허용)
```
`list.Contains("apple")`처럼 어떤 값이 포함되어 있는지 확인할 수도 있지만,  이건 내부적으로 **처음부터 끝까지 순회하면서비교**하기 때문에  
성능상 느릴 수 있다! 즉, **시간 복잡도는 `O(n)`**

---

## 📑 2. `HashSet<T>`는 언제 쓰나?

`HashSet<T>`는 **중복제거** 와 **빠른 탐색**에 특화됨
- 빠르게 탐색을 해야할 경우
- 중복이 허용되지 않을때

```csharp
var set = new HashSet<string>();
set.Add("apple");
set.Add("apple");
Console.WriteLine(set.Count); // 1 (중복 제거됨)

Console.WriteLine(set.Contains("apple")); // O(1) 수준의 빠른 탐색
```
- 내부적으로는 **해시 테이블(Hash Table)**을 이용해서  **중복 체크와 탐색을 빠르게 처리**

- 단점은 **순서를 보장하지 않는다는 것**. 순서가 중요하다면 `List`가 더 적합

---
### 🚀 언제 어떤 걸 써야 할까?

| 상황                                       | 추천 컬렉션  |
| ------------------------------------------ | ------------ |
| 중복된 값을 허용해야 할 때                 | `List<T>`    |
| 중복을 자동으로 제거하고 싶을 때           | `HashSet<T>` |
| 요소의 순서(정렬된 순서)가 중요할 때       | `List<T>`    |
| 값이 포함되어 있는지 빠르게 확인해야 할 때 | `HashSet<T>` |

👉 상황에 맞는 컬렉션을 선택해서 **성능과 효율을 모두 챙겨보세요!**
