---
title: Github 나만의 블로그 만들기(with chirpy)-2
date: 2024-05-29 +09:00
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
* [Github 나만의 블로그 만들기(with chirpy)-1](https://gubeommo.github.io/posts/GitHub-Github-%EB%82%98%EB%A7%8C%EC%9D%98-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B01.md/)
* <span style='background-color: #F7DDBE'>[Github 나만의 블로그 만들기(with chirpy)-2](https://gubeommo.github.io/posts/GitHub-Github-%EB%82%98%EB%A7%8C%EC%9D%98-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B02/)</span>
* [Github 나만의 블로그 만들기(with chirpy)-3](https://gubeommo.github.io/posts/GitHub-Github-%EB%82%98%EB%A7%8C%EC%9D%98-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B03/)
* [Github 나만의 블로그 만들기(with chirpy)-4](https://gubeommo.github.io/posts/GitHub-Github-%EB%82%98%EB%A7%8C%EC%9D%98-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B04/)


## Chripy Theme 적용


> [Github 나만의 블로그 만들기(with chirpy)-1](https://gubeommo.github.io/posts/GitHub-Github-%EB%82%98%EB%A7%8C%EC%9D%98-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B01.md/) 여기에 테마를 다운로드를 먼저 해야한다.

![image](https://github.com/Gubeommo/TIL/assets/86589565/f72c415c-53e9-42e6-b108-3956f2ca4833)

다운받은 테마 소스를  Clone 한 위치에 덮어 쓰기 한후에 `_post`안에 있는 파일들을 전부 삭제해주자


![image](https://github.com/Gubeommo/TIL/assets/86589565/c087c190-9e90-42c1-93b6-89014d77a9e8)

실행후

자신이 클론한 위치에 이동후
```console
$ chcp 65001
```

```console
$ gem install jekyll bundler
$ gem install webrick
```

```console
$ jekyll new ./
```

> 만약 conFlict 에러시  `jekyll new ./ -f` 를 입력해주자 
{: .prompt-tip } 

```console
$ bundle install
$ bundle
```

```console
$ bundle add webrick
```

```console
$ bundle exec jekyll serve
```

[http://127.0.0.1:4000/](http://127.0.0.1:4000/) 에 들어가면 ?

![image](https://github.com/Gubeommo/TIL/assets/86589565/4f8021f2-8559-4e26-bf11-83d9cfcdcea8)

테마가 적용된걸 확인 할수 있다! (로컬에서)

---


## _config.yml 수정

파일중 **_config.yml** 파일을 열어보면 수 많은 요소가 있는데 중점적으로 볼 요소들은

* `lang` : 언어 설정입니다  기본값은 en으로 ko로 바꿔줍니다.
* `timezone` : 시간에 대한 설정입니다. 기본값은 없으며  **Asia/Seoul**로 넣어줍니다.
* `title` : 블로그의 제목입니다. 
* `tagline` : 블로그의 부연설명으로 제목아래에 작게 보일 텍스트입니다.
* `description` : 이 부분은 블로그 링크를 복사해서 카카오톡이나 다른곳에 공유할게 작게 표시되는걸 확인했습니다.
* `url` : 블로그로 실제 들어올 url 을 입력해줍니다. `https://(계정명)github.io` 이 될것이다. 
* `github :  username ` : 본인의 github 아이디를 입력합니다.	
* `avatar` : 블로그 왼쪽에 나올 이미지 이다.

맞게 전부 입력을 해주고 `bundle exec jekyll serve`을 다시 입력해보면 ???

![image](https://github.com/Gubeommo/TIL/assets/86589565/e0df34e7-6cfa-4121-88d4-bab5e3943ae7)

이렇게 에러 메세지가 반길것이다. ㅎㅎ
만약 에러가 안났다면 [http://127.0.0.1:4000/](http://127.0.0.1:4000/) 여기서 달라진 화면을 볼 수 있을 것이다.

크흠... 일단 해결해보자

### ERROR : cannot load such --tzinfo

구글링을 해본결과 Genfile에 들어가 

```console
gem 'tzinfo'
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw]
```

을 추가하면 된다더라. 이제 커밋 푸쉬를 해서 페이지를 보면 날 반겨주는 
![image](https://github.com/Gubeommo/TIL/assets/86589565/6d8cd89f-620e-4c34-8772-a94946acd6b3)

이 녀석도 해결해보자

### ERROR : layout: home # index page

[Chripy Start](https://chirpy.cotes.page/posts/getting-started/#deploy-by-using-github-actions) 을 참고해보면

```console
$ bundle lock --add-platform x86_64-linux
```
을 하면 된단다... 그럼 명령어을 실행해주고 다시 커밋 푸쉬를 하면  

![image](https://github.com/Gubeommo/TIL/assets/86589565/7480f9a4-2ec6-40a0-83ee-425d544001e2)

성공적으로 테마가 적용 된걸 확인 할 수 있다.

---

다음에는 블로그 포스팅 하는법 과 검색엔진 등록과 구글 애드센스 관련 글을 작성해보도록하겠다.
