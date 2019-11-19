# MacOS에서 Ubuntu 18.04 VNC 설정하기

## Ubuntu
먼저 `vino` 를 설치한다
```bash
$ sudo apt update
$ sudo apt install vino -y
```

설치하고 난 다음에 `설정 - Sharing - Screen Sharing`에서 Active를 설정한다.

그리고 encryption을 disable한다.
```bash
$ gsettings set org.gnome.Vino require-encryption false
```


## Mac
맥 Finder에서 해당 URL로 연결한다.
```
vnc://<IP>:5900
```
