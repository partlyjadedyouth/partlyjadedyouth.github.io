---
title: '[Computer Vision] Gaussian Smoothing'
date: '2023-01-01 00:00:00'
tags: computer-vision gaussian kernel
categories: computer-vision
---

![pepe](pepe.jpg)

Smoothing이란 쉽게 말해 이미지를 흐릿하게 만들어주는 것이다. 

"이미지는 선명할 수록 좋은 거 아닌가? 왜 굳이 흐리게 만드는 거지?"라는 생각을 할 수도 있지만 생각보다 쓸모가 많다. 예를 들어 이미지의 노이즈를 제거할 때 smoothing이 사용된다. 자세한 원리는 뒤에서 설명하겠지만 어떻게 보면 아주 간단하다. 이미지를 뭉개면서 노이즈까지 같이 뭉개버리는 것이다.

`가우시안 스무딩(Gaussian smoothing)`, 또는 `가우시안 블러(Gaussian blur)`는 컴퓨터 비전 분야에서 가장 보편적으로 사용되는 smoothing 기법이다. 

이 글에서는 왜 Gaussian smoothing이 자주 사용되는지, Gaussian smoothing에 사용되는 Gaussian kernel이 무엇인지, 그리고 OpenCV 라이브러리를 이용해 Python으로 Gaussian smoothing을 직접 구현하는 방법에 대해서 다루어보려고 한다.

## 1. 왜 Gaussian인가?

![n-1](n1.png)

이미지를 흐리게 하는 가장 간단한 방법은 위의 그림처럼 인접한 두 픽셀 값의 평균을 내는 것이다. 직관적인 예시를 들기 위해 이미지의 가로 길이가 1px이라고 가정했다. 평균이기 때문에 나누기도 해줘야 하지만 이 부분도 일단은 생략하도록 하자.

![n-3](n3.jpeg)

이걸 계속 반복해보면 이렇게 될 것이다. $n=4$일 때는 $(A + 4B  + 6C + 4D + E)$와 $(B+4C+6D+4E+F)$가 나올 것이다.