# AWS Disk 확장

```shell
# 디스크 상태 확인
ubuntu@ip-10-0-13-105:~$ lsblk
NAME        MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
loop0         7:0    0 91.3M  1 loop /snap/core/8592
loop1         7:1    0 91.4M  1 loop /snap/core/8689
loop2         7:2    0   18M  1 loop /snap/amazon-ssm-agent/1480
loop3         7:3    0   18M  1 loop /snap/amazon-ssm-agent/1566
nvme0n1     259:0    0   64G  0 disk
└─nvme0n1p1 259:1    0   32G  0 part /

# sudo growpart /dev/nvme0n1 1
ubuntu@ip-10-0-13-105:~$ sudo growpart /dev/nvme0n1 1
CHANGED: partition=1 start=2048 old: size=67106783 end=67108831 new: size=134215647,end=134217695

# sudo resize2fs /dev/nvme0n1p1
ubuntu@ip-10-0-13-105:~$ sudo resize2fs /dev/nvme0n1p1
resize2fs 1.44.1 (24-Mar-2018)
Filesystem at /dev/nvme0n1p1 is mounted on /; on-line resizing required
old_desc_blocks = 4, new_desc_blocks = 8
The filesystem on /dev/nvme0n1p1 is now 16776955 (4k) blocks long.

```
