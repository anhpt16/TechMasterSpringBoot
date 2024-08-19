package com.example.demo.utils;

import java.util.List;

public interface PageResponse<T> {
    int getCurrentPage();
    int getPageSize();
    int totalElements();
    int totalPages();
    List<T> getContent();
}
