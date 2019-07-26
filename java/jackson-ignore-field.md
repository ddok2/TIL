# 필드값이 Null일 때 무시하기(Jackson) 

## Assignment
```java
@JsonPropertyOrder({
        "something"
})
public class SomeClass {

    @Getter @Setter
    private String something;
}
```
만일 Field 값이 Null이면 어떻게 하면 무시할수 있을까?

## Solution
1. [직접 ```ObjectMapper```에 설정](http://fasterxml.github.io/jackson-annotations/javadoc/2.6/com/fasterxml/jackson/annotation/JsonInclude.Include.html)할수 있다.
```java
mapper.setSerializationInclusion(Include.NON_NULL);
```
2. [```@JsonInclude``` 어너테이션 사용](http://fasterxml.github.io/jackson-annotations/javadoc/2.6/com/fasterxml/jackson/annotation/JsonInclude.html)
```java
@JsonInclude(Incldue.NON_NULL)
public class SomeClass {

    @Getter @Setter
    private String something;
}
```
만일 하나의 필드만 설정하고 싶으면 아래와 같이 하면 된다.
```java
public class SomeClass {

    @Getter @Setter
    @JsonInclude(Incldue.NON_NULL)
    private String something;
}
```

Let`s converts caffeine into code ☕️