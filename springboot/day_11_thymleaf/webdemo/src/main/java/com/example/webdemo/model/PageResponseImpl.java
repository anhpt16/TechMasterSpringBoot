package com.example.webdemo.model;

import lombok.*;

import java.util.List;
import java.util.Map;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PageResponseImpl<T> implements PageResponse<T>{
    private int currentPage;
    private int pageSize;
    List<T> data;
    @Override
    public int getCurrentPage() {
        return currentPage;
    }

    @Override
    public int getPageSize() {
        return pageSize;
    }

    @Override
    public int totalElements() {
        return 0;
    }

    @Override
    public int totalPages() {
        return (int) Math.ceil((double) data.size() / pageSize);
    }

    @Override
    public List<T> getContent() {
        int fromIndex = (currentPage - 1) * pageSize;
        if (fromIndex >= data.size()) {
            return List.of();
        }
        int toIndex = Math.min(fromIndex + pageSize, data.size());
        return data.subList(fromIndex, toIndex);
    }
}
