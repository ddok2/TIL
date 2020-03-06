# micro k8s Monitoring

```shell
# check add-on
$ microk8s.status
microk8s is running
addons:
cilium: disabled
dashboard: enabled
dns: enabled
fluentd: disabled
gpu: disabled
helm3: disabled
helm: disabled
ingress: enabled
istio: enabled
jaeger: disabled
juju: disabled
knative: disabled
kubeflow: disabled
linkerd: disabled
metallb: disabled
metrics-server: disabled
prometheus: enabled
rbac: disabled
registry: enabled
storage: enabled

# enable prometheus
$ microk8s.enable prometheus
Enabling Prometheus
namespace/monitoring created
...

# check
$ kubectl get pods -n monitoring
NAME                                  READY   STATUS    RESTARTS   AGE
alertmanager-main-0                   2/2     Running   0          41m
grafana-58dc7468d7-mlfp6              1/1     Running   0          41m
kube-state-metrics-78b46c84d8-nnnm8   3/3     Running   0          41m
node-exporter-9clws                   2/2     Running   0          41m
node-exporter-dzfmz                   2/2     Running   0          41m
node-exporter-flqpj                   2/2     Running   0          41m
node-exporter-msvrj                   2/2     Running   0          41m
node-exporter-rwhz9                   2/2     Running   0          41m
prometheus-adapter-5cd5798d96-6djqc   1/1     Running   0          41m
prometheus-k8s-0                      3/3     Running   1          40m
prometheus-operator-99dccdc56-6m4xk   1/1     Running   0          41m


## Grafana
$ kubectl -n monitoring port-forward --address 0.0.0.0 $(kubectl -n monitoring get pod -l app=grafana -o jsonpath='{.items[0].metadata.name}') 4000:3000 &

$ nohup /var/lib/snapd/snap/bin/microk8s.kubectl -n monitoring port-forward --address 0.0.0.0 $(kubectl -n monitoring get pod -l app=grafana -o jsonpath='{.items[0].metadata.name}') 4000:3000 &

## Prometheus
$ kubectl -n monitoring port-forward --address 0.0.0.0 $(kubectl -n monitoring get pod -l app=prometheus -o jsonpath='{.items[0].metadata.name}') 9090:9090

$ nohup /var/lib/snapd/snap/bin/microk8s.kubectl -n monitoring port-forward --address 0.0.0.0 $(kubectl -n monitoring get pod -l app=prometheus -o jsonpath='{.items[0].metadata.name}') 9090:9090 &
```
