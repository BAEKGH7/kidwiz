package com.kidwiz.web.DAO;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.kidwiz.web.DTO.MemberDTO;
import com.kidwiz.web.DTO.RsvDTO;

@Repository
@Mapper
public interface RsvDAO {

    //List<RsvDTO> getAllReservations(RsvDTO rsv);
	 List<RsvDTO> getAllReservations(@Param("ctype") String ctype, @Param("date") String date);
    
    void insertReservation(RsvDTO reservation);
    
    MemberDTO getMemberById(int id);
    
    Integer getProId(String majorHead);
	Integer getCounselorId(String CounselingType);

}
