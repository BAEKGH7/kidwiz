package com.kidwiz.web.DAO;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.kidwiz.web.DTO.CardDTO;
import com.kidwiz.web.DTO.MemberDTO;
import com.kidwiz.web.DTO.RegDTO;
import com.kidwiz.web.DTO.ResultDTO;

@Repository
@Mapper
public interface RegDAO {

	public int accept(String no); 
	
	public int regconInsert(RegDTO dto);

	public List<RegDTO> regDetail(String rgno);

	public List<Map<String, Object>> timetable();
	
	public int regTotalCount();

	public List<RegDTO> regResult(String regno);

	public List<MemberDTO> memberDetail(String id);

	public int resultWrite(ResultDTO result);

	public List<RegDTO> getRegResult(String regno);

	public int oneTimeRegInsert(RegDTO test);

	public int resultUpdate(ResultDTO result);

	public String getMajor(int id);

	public List<Map<String, Object>> regRev(Map<String, Object> pageMap);

	public Map<String, Object> getRegInfo(String regno);

	public List<RegDTO> regReservations(String date);

	public Map<String, Object> getCounselorInfo(String id);

	public Map<String, Object> getProInfo(String type);

	public List<RegDTO> checkRegRev(String date);

	public List<RegDTO> rsvs(Map<String, Object> map);

	public List<RegDTO> getScehdule(Map<String, Object> map);

	public List<Map<String, Object>> recentBoard(String id);

	public List<Map<String, Object>> need2Write(String id);

	public int cardWrite(List<CardDTO> cards);

	public List<CardDTO> getCardNews();

	public List<CardDTO> cardDetail(String uuid);

}
