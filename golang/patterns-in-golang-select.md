# Go, select 의 패턴들

## select

`select`는 `switch`와 비슷하지만 case에 channel 사용함.

### pattern - 1

```go
package pattern1

func patter1() {
	c1 := make(chan string)
	c2 := make(chan string)

	go func() {
		for {
			time.Sleep(5 * time.Second)
			c1 <- "one"
		}
	}()

	go func() {
		for {
			time.Sleep(10 * time.Second)
			c2 <- "two"
		}
	}()

	for {
		fmt.Println("------------------start select------------------")

		select {

		case msg1 := <-c1:
			fmt.Println("received", msg1)

		case msg2 := <-c2:
			fmt.Println("received", msg2)
		}

		fmt.Println("------------------end select-------------------")
	}
}

```

`case`의 채널에 값이 들어올 때까지 `select`문에서 블록됨.

### pattern - 2

```go
package pattern

import (
	"fmt"
	"time"
)

func process(ch chan string) {
	time.Sleep(10 * time.Second)
	ch <- "process successful"
}
func scheduling() {
	// do something 
}
func pattern2() {
	ch := make(chan string)
	go process(ch)
	for {
		time.Sleep(1 * time.Second)

		select {
		case v := <-ch:
			fmt.Println("received value: ", v)
			return
		default:
			fmt.Println("no value received")
		}

		scheduling()
	}
}
```

어떤 생산자가 결과를 줄 때 까지 기다리는 방식의 코드를 구성하는 패턴.

### pattern - 3

```go
package pattern

func sayHelloServer(ch chan string) {
	ch <- "from server 1"
}
func sayHelloServer2(ch chan string) {
	ch <- "from server 2"
}

func pattern3() {
	output1 := make(chan string)
	output2 := make(chan string)

	go sayHelloServer(output1)

	go sayHelloServer2(output2)

	time.Sleep(1 * time.Second)

	select {
	case s1 := <-output1:
		fmt.Println(s1)
	case s2 := <-output2:
		fmt.Println(s2)
	}
}


```

### pattern - 4

```go
package pattern

func consuming(scheduler chan string) {
	select { 
	case <-scheduler:
		fmt.Println("입력받음.") 
    case <-time.After(5 * time.Second):
		fmt.Println("타임아웃.") }
}

func producing(scheduler chan string) {
	var name string
	fmt.Print("> ")
	fmt.Scanln(&name)
	scheduler <- name
}

func pattern4() {
	scheduler := make(chan string)
	
	go consuming(scheduler)
	
	go producing(scheduler)
	
	time.Sleep(100 * time.Second)
}

```


출처: https://golangbot.com/select/
