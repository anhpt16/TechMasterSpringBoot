package com.example.demostream;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;
import java.util.stream.Collectors;

@SpringBootApplication
public class DemostreamApplication {

	public static void main(String[] args) {
		Greeting vietNam = new VietNam();
		vietNam.sayHello("Anh");

		List<Integer> list = new ArrayList<>(Arrays.asList(1,2,1,8,5,7,6,3,1,0));
		list.forEach(i -> System.out.println(i));
		list.removeIf(i -> (i % 2 == 1));
		System.out.println("-----");
		list.forEach(i -> System.out.println(i));
		list.sort((a, b) -> a - b);
		System.out.println("------");
		list.forEach(i -> System.out.println(i));

		int total = list.stream()
			.map(i -> i * 2)
			.reduce(0, (a, b) -> a + b);
		System.out.println("Total: " + total);

		List<Integer> number = new ArrayList<>(List.of(1,5,4,3,1,5,7,9,7,3,2,1));
		int max = number.stream()
			.filter(i -> i % 2 == 0)
			.max((a, b) -> a - b)
			.orElse(0);
		System.out.println("Max: " + max);

		List<Integer> numbers = List.of(10, 5, 3, 12, 6, 7, 5, 3);
//		Câu 7
		List<Integer> numberDis = numbers.stream()
			.distinct()
			.collect(Collectors.toList());
		System.out.println("Dis: ");
		numberDis.forEach(num -> System.out.print(num + " "));
//		Câu 8
		List<Integer> fiveNumber = numbers.stream()
			.limit(5)
			.collect(Collectors.toList());
		System.out.println("\nMax 5: ");
		fiveNumber.forEach(num -> System.out.print(num + " "));
//		Câu 9
		List<Integer> skipNumber = numbers.stream()
			.limit(5)
			.skip(2)
			.collect(Collectors.toList());
		System.out.println("\nSkip 3: ");
		skipNumber.forEach(num -> System.out.print(num + " "));
//		Câu 10
		int fistNumber = numbers.stream()
			.filter(i -> i > 5)
			.findFirst()
			.orElse(-1);
		System.out.println("\nEl first > 5: " + fistNumber);
//		Câu 11
		boolean isChan = numbers.stream()
			.allMatch(i -> (i % 2 == 0));
		System.out.println("\nList chan: " + isChan);
//		Câu 12
		boolean isLon10 = numbers.stream()
			.anyMatch(i -> i > 10);
		System.out.println("\nPhan tu lon hon 10: " + isLon10);
//		Câu 13
		long countMore5 = numbers.stream()
			.filter(i -> i > 5)
			.count();
		System.out.println("\nSo phan tu lon hon 5: " + countMore5);
//		Câu 14
		List<Integer> newList = numbers.stream()
			.map(i -> i * 2)
			.collect(Collectors.toList());
		System.out.println("\nNew List: ");
		newList.forEach(i -> System.out.print(i + " "));
//		Câu 15
		boolean anyEight = numbers.stream()
			.anyMatch(i -> i == 8);
		System.out.println("\nGia trị bang 8: " + anyEight);




		SpringApplication.run(DemostreamApplication.class, args);
	}

}
