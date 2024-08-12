package com.example.webdemo.model;

import lombok.*;
import org.springframework.stereotype.Component;

@Getter
@Setter
@ToString
@AllArgsConstructor
@Builder
@Component
public class Student {
    private int id;
    private String name;

    public Student() {
        System.out.println("Student Ready");
    }
}
