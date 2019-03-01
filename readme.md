### Create normal secret

```kubectl create secret generic my-secret --dry-run --from-literal=foo=my-super-secret -o yaml  > k8s/secret.yaml ```