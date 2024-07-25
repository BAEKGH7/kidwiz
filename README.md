# 팀 프로젝트 - 대학 상담센터 운영 서비스 구축


### 🔸 시연 영상 (링크)

<a href="https://youtu.be/KenYt3PLRZo?si=jcgtTY2EtUZ14Ydr&t=145">
    <img src="https://github.com/user-attachments/assets/400aaf2e-4756-465c-837b-23425db245b5" alt="KakaoTalk_20240527_235149481 mp4_20240725_134727 187" width="500" />
</a>


### 🔸 개요
 ● 개발목적 : 대학 상담센터 운영을 위한 상담예약 시스템 및 소개 페이지 구축  
 ● 개발일정 : '24.04.25 ~ '24.05.27  
 ● 특이사항 : 총 5개 팀 중 1위로 **대상** 수상 

### 🔸 주요 기술
 <img src="https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white"/> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/> 

 <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"/> <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=OpenJDK&logoColor=white">  <img src="https://img.shields.io/badge/MyBatis-000000?style=for-the-badge&logo=MyBatis&logoColor=white"> 

![Git](https://img.shields.io/badge/Git-F05032.svg?&style=for-the-badge&logo=Git&logoColor=white)
![Eclipse IDE](https://img.shields.io/badge/Eclipse%20IDE-2C2255.svg?&style=for-the-badge&logo=Eclipse%20IDE&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?&style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)

<img src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white"/>  

### 🔸 담당업무

 ● 교수상담, 취업상담, 심리상담, 전문상담 통합 예약 기능  
 · 1:1 대면상담 예약 신청 기능 구현  
 · 예약신청 FullCalendar API 활용  
 · 상담 유형에 따른 예약신청 Form 구현  
 · 신청서-신청정보 연동 SQL 작성  
 · 예약 관련 DB 설계

 ● 지도교수 상담 소개 페이지 작성 

### 🔸 기타 기여사항

● Figma를 통한 개발 프로세스 설계, 팀원 역할 정의(링크)

<a href="https://www.figma.com/board/8rPcdIzPkzg6UTRjMZQuAI/%EC%9C%84%EC%A7%80%EC%96%B8-2%ED%8C%80?node-id=11-1237">
    <img src="https://github.com/user-attachments/assets/1deba4fd-f430-4d1a-b13e-1aee7a251a84" width="500" />
</a>

---

## 📍 발표자료 발췌

<a href="https://github.com/user-attachments/assets/6dd8fca9-4a67-4c38-bda7-1f3bfe0bcd89">
    <img src="https://github.com/user-attachments/assets/6dd8fca9-4a67-4c38-bda7-1f3bfe0bcd89" alt="image" width="700" />
</a>

<a href="https://github.com/user-attachments/assets/2674946a-4f6b-4316-a295-3234abbe82b6">
    <img src="https://github.com/user-attachments/assets/2674946a-4f6b-4316-a295-3234abbe82b6" alt="image" width="700" />
</a>

<a href="https://github.com/user-attachments/assets/914e23bf-48f7-4602-9fdc-2e28e55130f9">
    <img src="https://github.com/user-attachments/assets/914e23bf-48f7-4602-9fdc-2e28e55130f9" alt="image" width="700" />
</a>

<a href="https://github.com/user-attachments/assets/ecdeaebd-efea-4a17-a307-a324eb5eac53">
    <img src="https://github.com/user-attachments/assets/ecdeaebd-efea-4a17-a307-a324eb5eac53" alt="image" width="700" />
</a>

<a href="https://github.com/user-attachments/assets/a7b23e04-78e7-4ed3-b9b5-3c6192dfc5e6">
    <img src="https://github.com/user-attachments/assets/a7b23e04-78e7-4ed3-b9b5-3c6192dfc5e6" alt="image" width="700" />
</a>

---

## 트러블 슈팅 

### 문제사항
 -  컴포넌트 간 데이터 전달 문제 : Vue에서 Router를 사용하여 컴포넌트 간 데이터를 전달할 때에 SPA 특성상 새로고침 시 경로를 포함한 파라미터 값이 유지되지 않아 Params를 사용하지 못했고, 부모-자식 컴포넌트로 데이터를 전달하는 Props의 경우에도 vue Router 사용시 지원되지 않았음
### 해결방법
 - URL에 Query 파라미터로 값을 남겨서 전달하여 해결 : GET방식 전달을 활용하는 것으로 방향을 선회함. 쿼리 파라미터는 URL에 명시적으로 표시되어 새로고침 시에도 유지되었고, 경로와 독립적이어서 라우트 설정에 영향을 주지 않았음.

