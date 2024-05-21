package com.kidwiz.web.service;

import java.util.List;

import com.kidwiz.web.DTO.MemberDTO;
import com.kidwiz.web.DTO.RsvDTO;

public interface RsvService {

    List<RsvDTO> getAllReservations();
    void createReservation(RsvDTO reservationDto);

    MemberDTO getMemberById(int id);
}
