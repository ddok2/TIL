# ISO8601 with milliseconds in json using Jackson

## Assignment
```java
import com.fasterxml.jackson.databind.util.ISO8601DateFormat;

objectMapper.setDateFormat(new ISO8601DateFormat());
```
ISO8601Date 포맷으로 했을 때 milliseconds가 무시된다.

## Solution
```java
public class ISO8601WithMillisFormat extends ISO8601DateFormat {
    @Override
    public StringBuffer format(Date date, StringBuffer toAppendTo, FieldPosition fieldPosition) {
        String value = ISO8601Utils.format(date, true); // "true" to include milliseconds
        toAppendTo.append(value);
        return toAppendTo;
    }
}
```
새로운 클래스를 정의해서 Object Mapper에 이용하면 된다.

```java
ObjectMapper objectMapper = new ObjectMapper();
ISO8601DateFormat dateFormat = new ISO8601WithMillisFormat();
objectMapper.setDateFormat(dateFormat);
```
위 코드를 작성하고 ```new Date()``` 를 해보면 다음 처럼 나타난다. ```2017-11-13T10:50:59.555Z``` 👍