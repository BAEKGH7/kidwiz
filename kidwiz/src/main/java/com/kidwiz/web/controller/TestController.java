package com.kidwiz.web.controller;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kidwiz.web.DTO.ResultData;
import com.kidwiz.web.DTO.TestResult;
import com.kidwiz.web.service.TestService;

@RestController
@RequestMapping("/api")
public class TestController {

    @Autowired
    TestService testService;

    // 설문지 제출 -> 결과 생성
    @PostMapping("/submitTest")
    public ResponseEntity<ResultData> submitTest(@RequestBody List<Integer> questionData) {
        List<TestResult> testResults = new ArrayList<>();
        int totalScore = 0;

        for (int i = 0; i < questionData.size(); i++) {
            Integer answer = questionData.get(i);
            if (answer != null && answer >= 1 && answer <= 3) {
                int score = calculateScore(answer);
                TestResult testResult = new TestResult();
                testResult.setQid(i + 1);
                testResult.setTanswer(answer);
                testResult.setTdate(LocalDateTime.now());
                testResults.add(testResult);
                totalScore += score;
            }
        }

        if (!testResults.isEmpty()) {
            testService.saveTestResults(testResults);
        }

        ResultData result = generateResultData(totalScore);
        return ResponseEntity.ok(result);
    }


    // 결과 조회
    @PostMapping("/getTestResult")
    public ResponseEntity<ResultData> getTestResult(@RequestBody List<Integer> userAnswers) {
        if (userAnswers == null || userAnswers.isEmpty()) {
            // 유효한 답변이 없는 경우에는 예외 처리 또는 적절한 메시지를 반환할 수 있습니다.
            return ResponseEntity.badRequest().build();
        }
        int totalScore = 0;
        int validAnswersCount = 0;

        for (Integer answer : userAnswers) {
            if (answer != null && answer >= 1 && answer <= 3) {
                int score = calculateScore(answer);
                totalScore += score;
                validAnswersCount++;
            } else {
                // null이거나 1~3 사이의 값이 아닌 경우에는 무시하고 다음 답변으로 넘어갑니다.
                continue;
            }
        }

        // 적어도 하나의 유효한 답변이 있는 경우에만 결과를 반환합니다.
        if (validAnswersCount > 0) {
            ResultData result = generateResultData(totalScore);
            return ResponseEntity.ok(result);
        } else {
            // 유효한 답변이 없는 경우에는 예외 처리 또는 적절한 메시지를 반환할 수 있습니다.
            return ResponseEntity.badRequest().build();
        }
    }


    // 답변에 따른 점수 계산
    private int calculateScore(int answer) {
        switch (answer) {
            case 3:
                return 3;
            case 2:
                return 2;
            case 1:
                return 1;
            default:
                return 0;
        }
    }

    // 총점에 따른 결과 생성
    private ResultData generateResultData(int totalScore) {
        ResultData result = new ResultData();
        result.setTotalScore(totalScore);
        result.setRecommendedJobs(getRecommendedJobs(totalScore));
        result.setPersonalTraits(getPersonalTraits(totalScore));
        return result;
    }


    // 총점에 따른 추천 직업 목록
    private String getRecommendedJobs(int totalScore) {
        if (totalScore >= 25) {
            return "프로젝트 매니저, 인사 담당자, 커뮤니케이션 전문가 등";
        } else if (totalScore >= 20 && totalScore < 25) {
            return "소프트웨어 엔지니어, 마케팅 전문가, 연구원 등";
        } else if (totalScore >= 15 && totalScore < 20) {
            return "데이터 분석가, 금융 분석가, 교육자 등";
        } else if (totalScore >= 10 && totalScore < 15) {
            return "영업 직군, 기술 지원자, 디자이너 등";
        } else if (totalScore >= 5 && totalScore < 10) {
            return "관리직, 사무 보조원, 서비스 업종 등";
        } else {
            return "특정 분야에 대한 전문가, 자유 영업자, 미술가 등";
        }
    }

    // 총점에 따른 성향 분석
    private List<String> getPersonalTraits(int totalScore) {
        List<String> personalTraits = new ArrayList<>();

        // 외향성 여부 분석
        if (totalScore >= 20) {
            personalTraits.add("외향성, 사교성이 높음, 타인과의 대화를 즐김");
        } else if (totalScore >= 12 && totalScore < 20) {
            personalTraits.add("외향성, 리더십 능력이 있음, 그룹 내에서 적극적인 역할을 수행");
        } else {
            personalTraits.add("내향성, 사색적 성향, 자신만의 생각에 깊이 몰입");
        }

        // 대인관계 성향 분석
        if (totalScore >= 20) {
            personalTraits.add("대인관계 조절 능력이 뛰어남, 갈등 해결 능력이 뛰어남, 타인의 감정을 잘 이해하고 공감함");
        } else if (totalScore >= 12 && totalScore < 20) {
            personalTraits.add("협업 능력이 뛰어남, 타인에 대한 이해가 높음, 다양한 의견을 수용하고 존중함");
        } else {
            personalTraits.add("개인주의적 성향, 독립적인 활동을 선호함, 자신의 영역을 보호하고 지킴");
        }

        // 문제 해결 능력 성향 분석
        if (totalScore >= 20) {
            personalTraits.add("문제 해결 능력이 뛰어남, 창의적인 사고를 가짐, 복잡한 문제에 대한 해결책을 찾는 능력이 있음");
        } else if (totalScore >= 12 && totalScore < 20) {
            personalTraits.add("문제 해결에 적극적, 논리적인 사고를 가짐, 문제를 해결하기 위해 체계적으로 접근함");
        } else {
            personalTraits.add("초보적인 문제 해결 능력을 갖추고 있음. 문제 해결에 어려움을 겪을 수 있음. 도움과 지원을 통해 능력을 키울 수 있음");
        }

        return personalTraits;
    }
}