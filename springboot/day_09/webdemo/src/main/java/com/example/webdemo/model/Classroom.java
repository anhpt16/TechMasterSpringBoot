package com.example.webdemo.model;

import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Getter
@Setter
@ToString
@AllArgsConstructor
@Builder
@Component
public class Classroom {
    private int id;
    private String name;
    @Autowired
    private Student student;
    @Autowired
    private Teacher teacher2;
    public Classroom() {
        System.out.println("Teacher Ready");
    }
}