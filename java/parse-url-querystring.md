# Parse URL Query String

## Assignment
URL : 
```
https://google.com.ua/oauth/authorize?
client_id=SS&response_type=code&scope=N_FULL&access_type=offline&
redirect_uri=http://localhost/Callback
```
위 URL Query String을 아래처럼 파싱해야한다.
```
NAME               VALUE
------------------------
client_id          SS
response_type      code
scope              N_FULL
access_type        offline
redirect_uri       http://localhost/Callback

```

## Solution 1
[URLEncodedUtils](http://hc.apache.org/httpcomponents-client-ga/httpclient/apidocs/org/apache/http/client/utils/URLEncodedUtils.html)
를 이용한다.
```java
import org.apache.hc.client5.http.utils.URLEncodedUtils

String url = "https://www.sungyub.com/sung_is_awesome.html?one=1&two=2&three=3&three=3a";
List<NameValuePair> params = URLEncodedUtils.parse(new URI(url), "UTF-8");

for (NameValuePair param : params) {
  System.out.println(param.getName() + " : " + param.getValue());
}
```
해당 URL를 돌려보면:
```
https://www.sungyub.com/sung_is_awesome.html?one=1&two=2&three=3&three=3a
```
결과:
```
one : 1
two : 2
three : 3
three : 3a
```

## Solution 2
[Google Guava](https://github.com/google/guava)를 이용한다.
```java
import java.util.Map;
import com.google.common.base.Splitter;

public class Parser {
    public static void main(String... args) {
        String uri = "https://www.sungyub.com/sung_is_awesome.html?one=1&two=2&three=3&three=3a";
        String query = uri.split("\\?")[1];
        final Map<String, String> map = Splitter.on('&').trimResults().withKeyValueSeparator("=").split(query);
        System.out.println(map);
    }
}
```
결과:
```text
{one=1, two=2, three=3, three=3a}
```

## Solution 3
Without using an external library 😟  

Java8:
```java
public Map<String, List<String>> splitQuery(URL url) {
    if (Strings.isNullOrEmpty(url.getQuery())) {
        return Collections.emptyMap();
    }
    return Arrays.stream(url.getQuery().split("&"))
            .map(this::splitQueryParameter)
            .collect(Collectors.groupingBy(SimpleImmutableEntry::getKey, LinkedHashMap::new, mapping(Map.Entry::getValue, toList())));
}

public SimpleImmutableEntry<String, String> splitQueryParameter(String it) {
    final int idx = it.indexOf("=");
    final String key = idx > 0 ? it.substring(0, idx) : it;
    final String value = idx > 0 && it.length() > idx + 1 ? it.substring(idx + 1) : null;
    return new SimpleImmutableEntry<>(key, value);
}
```

Java:
```java
public static Map<String, List<String>> splitQuery(URL url) throws UnsupportedEncodingException {
  final Map<String, List<String>> query_pairs = new LinkedHashMap<String, List<String>>();
  final String[] pairs = url.getQuery().split("&");
 
  for (String pair : pairs) {
    final int idx = pair.indexOf("=");
    final String key = idx > 0 ? URLDecoder.decode(pair.substring(0, idx), "UTF-8") : pair;
    if (!query_pairs.containsKey(key)) {
      query_pairs.put(key, new LinkedList<String>());
    }
    final String value = idx > 0 && pair.length() > idx + 1 ? URLDecoder.decode(pair.substring(idx + 1), "UTF-8") : null;
    
    query_pairs.get(key).add(value);
  }
  
  return query_pairs;
}
```
결과:
```text
{one=["1"], two=[2], three=["3", 3a]}
```