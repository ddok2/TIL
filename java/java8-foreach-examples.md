# Java 8 forEach 예제들

Java 8 ```forEach()``` 을 이용하여 ```List``` 또는 ```Map``` 루프 돌리는 예제들이다.

## 1. forEach and Map
### 1.1 보통 방법
```java
Map<String, Integer> items = new HashMap<>();
items.put("A", 10);
items.put("B", 20);
items.put("C", 30);
items.put("D", 40);
items.put("E", 50);
items.put("F", 60);

for (Map.Entry<String, Integer> entry : items.entrySet()) {
	System.out.println("Item : " + entry.getKey() + " Count : " + entry.getValue());
}
```
### 1.2 Java 8 ```forEach``` + Lambda
```java
Map<String, Integer> items = new HashMap<>();
items.put("A", 10);
items.put("B", 20);
items.put("C", 30);
items.put("D", 40);
items.put("E", 50);
items.put("F", 60);

items.forEach((k,v)->System.out.println("Item : " + k + " Count : " + v));

items.forEach((k,v)->{
	System.out.println("Item : " + k + " Count : " + v);
	if("E".equals(k)){
		System.out.println("Hello E");
	}
});
```
## 2. forEach and List
### 2.1 보통 방법 
```java
List<String> items = new ArrayList<>();
items.add("A");
items.add("B");
items.add("C");
items.add("D");
items.add("E");

for(String item : items){
	System.out.println(item);
}
```
### 2.2 Java 8 ```forEach``` + Lambda
```java
List<String> items = new ArrayList<>();
items.add("A");
items.add("B");
items.add("C");
items.add("D");
items.add("E");

//lambda
//Output : A,B,C,D,E
items.forEach(item->System.out.println(item));

//Output : C
items.forEach(item->{
	if("C".equals(item)){
		System.out.println(item);
	}
});

//method reference
//Output : A,B,C,D,E
items.forEach(System.out::println);

//Stream and filter
//Output : B
items.stream()
	.filter(s->s.contains("B"))
	.forEach(System.out::println);
```

### 참고
- [Java 8 Iterable forEach JavaDoc](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html#forEach-java.util.function.Consumer-)
- [Java 8 forEach JavaDoc](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html#forEach-java.util.function.BiConsumer-)

### 출처
- [www.mkyong.com](https://www.mkyong.com/java8/java-8-foreach-examples/?utm_source=mkyong&utm_medium=author&utm_campaign=related-post&utm_content=1)