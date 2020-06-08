# kubeadm 설치하기

```shell
sudo swapoff -a

sudo apt-get update && sudo apt-get install -y apt-transport-https curl 
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

cat <<EOF | sudo tee /etc/apt/sources.list.d/kubernetes.list
deb https://apt.kubernetes.io/ kubernetes-xenial main
EOF

sudo apt-get update 
sudo apt-get install -y kubelet kubeadm kubectl 
sudo apt-mark hold kubelet kubeadm kubectl

wget -qO- get.docker.com | sh
sudo apt-get install -y kubelet kubeadm kubectl kubernetes-cni 

# Master Node
sudo kubeadm init --apiserver-advertise-address 10.0.13.10 --pod-network-cidr=10.13.0.0/16
#kubectl apply -f https://docs.projectcalico.org/v3.8/manifests/calico.yaml
#wget https://docs.projectcalico.org/v3.8/manifests/calico.yaml
#sed -i -e 's?10.0.0.0/16?10.244.0.0/16?g' calico.yaml
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml

# Worker Node
sudo kubeadm join 192.168.1.11:6443 --token h6rqd9.f4yddgftt1wvzxmq \
--discovery-token-ca-cert-hash sha256:4ed0795cd2034ff23b53f30ed15b708f357c21b32d6b8e577ffca11669a3fc19

# kubeadm join 192.168.1.11:6443 --token n84li7.bwlcehkw6wbdxatn \
#    --discovery-token-ca-cert-hash sha256:d95f6a102b1eca3318d428007efa16d6742acad820a3d150fda61a6b1ca93c54
#kubeadm join 192.168.56.108:6443 --token oawil9.qdtacdnzvua4hdd9 \
#    --discovery-token-ca-cert-hash sha256:c89fea2c93cc0764085877650b16b38eb3dcdfa24bcc85cf65b1a31e0f3f8c26
kubeadm join 10.0.13.10:6443 --token eq4s80.nrbdj0o8gsrluzel \
    --discovery-token-ca-cert-hash sha256:223ec5c4678f61c65e3de602e54b7ddc36a9ccfc00df325aa0ddd9feef9765b9


##
less /etc/systemd/system/kubelet.service.d/10-kubeadm.conf

[Service]
Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf"
Environment="KUBELET_SYSTEM_PODS_ARGS=--pod-manifest-path=/etc/kubernetes/manifests --allow-privileged=true"
Environment="KUBELET_NETWORK_ARGS=--network-plugin=cni --cni-conf-dir=/etc/cni/net.d --cni-bin-dir=/opt/cni/bin"
Environment="KUBELET_DNS_ARGS=--cluster-dns=10.96.0.10 --cluster-domain=cluster.local"
Environment="KUBELET_AUTHZ_ARGS=--authorization-mode=Webhook --client-ca-file=/etc/kubernetes/pki/ca.crt"
Environment="KUBELET_CADVISOR_ARGS=--cadvisor-port=0"
Environment="KUBELET_CGROUP_ARGS=--cgroup-driver=systemd"
Environment="KUBELET_CERTIFICATE_ARGS=--rotate-certificates=true --cert-dir=/var/lib/kubelet/pki"
Environment="KUBELET_EXTRA_ARGS=--node-ip=<worker IP address>"
ExecStart=ExecStart=/usr/bin/kubelet $KUBELET_KUBECONFIG_ARGS $KUBELET_SYSTEM_PODS_ARGS $KUBELET_NETWORK_ARGS $KUBELET_DNS_ARGS $KUBELET_AUTHZ_ARGS $KUBELET_CADVISOR_ARGS $KUBELET_CGROUP_ARGS $KUBELET_CERTIFICATE_ARGS $KUBELET_EXTRA_ARGS


systemctl daemon-reload
systemctl restart kubelet
```
