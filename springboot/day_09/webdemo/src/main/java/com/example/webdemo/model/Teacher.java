package com.example.webdemo.model;

import lombok.*;
import org.springframework.stereotype.Component;

@Getter
@Setter
@ToString
@AllArgsConstructor
@Builder
public class Teacher {
    private int id;
    private String name;

    public Teacher() {
        System.out.println("Teacher Ready");
    }
}