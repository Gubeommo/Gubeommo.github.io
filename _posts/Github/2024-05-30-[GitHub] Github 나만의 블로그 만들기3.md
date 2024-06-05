---
title: Github 나만의 블로그 만들기(with chirpy)-3
date: 2024-05-30  +09:00
categories: [Tech, Github]
tags:
  [
Github,Git,블로그,Github page,chirpy
  ]
image : /assets/img/Git_Hub.png

published: true
hidden : false
---

## 관련글
* [Github 나만의 블로그 만들기(with chirpy)-1](https://gubeommo.github.io/posts/GitHub-Github-%EB%82%98%EB%A7%8C%EC%9D%98-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B01/)
* [Github 나만의 블로그 만들기(with chirpy)-2](https://gubeommo.github.io/posts/GitHub-Github-%EB%82%98%EB%A7%8C%EC%9D%98-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B02/)
* <span style='background-color: #F7DDBE'>[Github 나만의 블로그 만들기(with chirpy)-3](https://gubeommo.github.io/posts/GitHub-Github-%EB%82%98%EB%A7%8C%EC%9D%98-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B03/)</span>
* [Github 나만의 블로그 만들기(with chirpy)-4](https://gubeommo.github.io/posts/GitHub-Github-%EB%82%98%EB%A7%8C%EC%9D%98-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B04/)
  
---

## 블로그 포스팅 하기

먼저 Clone이 된 폴더 안에 _post가 있는것을 확인 할 수 있는데 앞으로 여기에 Markdown형식의 파일을 올리면 자동적으로 포스팅이 될 것이다.

![image](https://github.com/Gubeommo/TIL/assets/86589565/bb4291cc-796a-4ff5-bd93-c08c9262e757)

아래 보이는 `.placeholder`은 지워주도록 하자.

`_post` 폴더 아래에 파일을 `.md` 형식인 파일을 만들것이다. 파일 제목의 형식은 `YYYY-MM-DD-[글제목].md` 로 작성해야한다.

오늘이 2024년 5월 30일 이므로 제목을 `2024-05-30-나만의 블로그 포스팅.md` 라고 파일 이름을 적어 보겠다.

![image](https://github.com/Gubeommo/TIL/assets/86589565/cf3dd5ef-572f-40e0-8dc4-bb663db1785e)

마크다운은 구글링해보면 정말 자세하게 어떻게 작성하는지부터 가이드로된 글이 많이있으니 참고하면 된다.
포스팅 할때에 한가지 규칙이 필요하다.

```yaml
---
title: TITLE
date: YYYY-MM-DD HH:MM:SS +/-TTTT
categories: [TOP_CATEGORIE, SUB_CATEGORIE]
tags: [TAG]     
---
```

참고로 `date` 요소에는 마지막에 `YYYY-MM-DD +09:00` 으로해주자 

그외로도 자주 쓰는 요소가
```yaml
pin: true    # 홈 화면에 고정시킬건지
published: true    # 게시 할건지
```

위에있는 형식에 맞춰서 넣은후 그 아래에 내용을 작성하면 된다!.

## 검색엔진 등록(구글,네이버)

블로그를 포스팅을하고 여러 사람들이 검색을 하여 들어 올 수 있도록 검색엔진에 등록해보자 !

### sitemap.xml 작성

[sitemap 작성](https://github.com/Gubeommo/Gubeommo.github.io/blob/main/sitemap.html) 링크에 들어가 코드를 복사한후

`root`폴더 아래에 `sitemap.xml` 생성후 넣어주고 `Commit` 과 `Push`를 해주자

> `root` 폴더는 _config.xml이 들어있는 폴더이다.
{: .prompt-tip }

### robots.txt 추가

```txt
User-agent: *
Allow: /

Sitemap: 본인의깃허브 주소/sitemap.xml  
```
`root`폴더안에 파일 이름을 `robots.txt`라 지어주고 위에 형식으로 넣어주자 지금 만드는 블로그의 경우는 `Sitemap: https://kobommo7280.github.io/sitemap.xml ` 가 될것이다.

추가후  `Commit` 과 `Push`를 해주자

---


### Google Search Console 등록

[Goolge Search Console](https://search.google.com/search-console/welcome?hl=ko&utm_source=about-page)에 들어간 후

![image](https://github.com/Gubeommo/TIL/assets/86589565/9ab44fa0-2185-4212-9784-c03170443b12)

본인의 Github 블로그 주소를 넣으면 된다.

![image](https://github.com/Gubeommo/TIL/assets/86589565/0203b8bf-2e70-4c74-a2b1-0faf60ace5ce)

먼저 순서에 따라 `.html` 파일을 다운로드를 하고 난후  그 파일을 똑같이 `root`폴더안에 넣어줍니다.

![image](https://github.com/Gubeommo/TIL/assets/86589565/4985654d-40e6-4c1a-ad0b-b056f7fe1561)

조금만 기다리다 보면


![image](https://github.com/Gubeommo/TIL/assets/86589565/c526325b-4aa4-4b53-b104-5186ffa82f74)


성공적으로 소유권을 확인 할 수 있다.
추가적으로 **색인 생성-Sitmaps**에 들어가 

![image](https://github.com/Gubeommo/TIL/assets/86589565/0d1139af-255c-4554-a6c4-7e2333c6b7db)

`sitemap.xml`을 제출하면 상태에 **성공**이 뜰것이다.

### Naver 검색엔진 등록

[Naver Search Advisor](https://searchadvisor.naver.com/console/board) 에 들어간 후 

![image](https://github.com/Gubeommo/TIL/assets/86589565/96a3942a-739a-414b-8eb9-371df3dd2406)

똑같이 깃허브 주소를 입력해 줍니다.
그후에 구글 과 똑같이 html를 다운한뒤 root 폴더에 넣고 `Commit` 과 `Push`후 좀 기다려 보면 성공할 것이다.

![image](https://github.com/Gubeommo/TIL/assets/86589565/a684003e-a486-4aca-a6ae-613814aaec76)

똑같이 Sitemap을 추가해주면 된다.

---

다음에는 깃 블로그를 Google 애널리틱스와 에드센스를 적용하는 방법에 대해 알아보겠다.