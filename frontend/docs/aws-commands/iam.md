---
sidebar_position: 1
---

# IAM

## Roles

### List all roles

To list all IAM roles and save them to a file named roles.json, use the following command:

```
aws iam list-roles > roles.json
```

### List Roles by Name

To list IAM roles that contain a specific value in their name, such as "Github," and display them in a table format, use the following command:

```
aws iam list-roles --query 'Roles[?contains(RoleName, `Github`)].{Name:RoleName, ARN:Arn, Created:CreateDate}' --output table
```

### Create a Role

To create a new IAM role, use the following command. Replace RoleName with the desired role name and provide a trust policy document in trust-policy.json:

```
aws iam create-role --role-name RoleName --assume-role-policy-document file://trust-policy.json
```

### Delete a Role

To delete an existing IAM role, use the following command. Replace RoleName with the name of the role you want to delete:

```
aws iam delete-role --role-name RoleName
```

### Attach a Policy to a Role

To attach an IAM policy to a role, use the following command. Replace RoleName and PolicyArn with the actual role name and policy ARN:

```
aws iam attach-role-policy --role-name RoleName --policy-arn arn:aws:iam::123456789012:policy/PolicyName
```

### Detach a Policy from a Role

To detach an IAM policy from a role, use the following command. Replace RoleName and PolicyArn with the actual role name and policy ARN:

```
aws iam detach-role-policy --role-name RoleName --policy-arn arn:aws:iam::123456789012:policy/PolicyName
```

### List Policies Attached to a Role

To list all policies attached to a specific role, use the following command. Replace RoleName with the actual role name:

```
aws iam list-attached-role-policies --role-name RoleName
```

### Update a Role's Trust Policy

To update the trust policy of a role from a file named trust-policy.json, use the following command. Replace RoleName with the actual role name:

```
aws iam update-assume-role-policy --role-name RoleName --policy-document file://trust-policy.json
```

## Policies

### List all policies

To list all IAM policies, use the following command:

```
aws iam list-policies
```

### List Policies by Name or Description

To list all policies that contain a specific value in their name or description, such as "Github," use the following command:

```
aws iam list-policies --query "Policies[?contains(PolicyName, `Github`) || (Description != null && contains(Description, `GITHUB`))]" --output table
```

### List all the policy versions

To list all versions of a specific policy, use the following command. Replace YourPolicyName with the actual policy name:

```
aws iam list-policy-versions --policy-arn arn:aws:iam::123456789012:policy/YourPolicyName
```

### Save Policy to a File

To save an existing policy version to a file named current_policy.json, use the following command. Replace YourPolicyName and v1 with the actual policy name and version ID:

```
aws iam get-policy-version --policy-arn arn:aws:iam::123456789012:policy/YourPolicyName --version-id v1 > current_policy.json
```

### Update a role policy

To update a role's trust policy from a file named trust-policy.json, use the following command. Replace GitHubActionsOIDC-WebsitesRole with the actual role name:

```
aws iam update-assume-role-policy --role-name GitHubActionsOIDC-WebsitesRole --policy-document file://trust-policy.json
```

### Delete old policy versions

To delete an old version of a policy, use the following command. Replace YourPolicyName and v1 with the actual policy name and version ID:

```
aws iam delete-policy-version --policy-arn arn:aws:iam::123456789012:policy/YourPolicyName --version-id v1
```

### Upload the updated policy version

To upload an updated version of a policy and set it as the default, use the following command. Replace YourPolicyName with the actual policy name:

```
aws iam create-policy-version --policy-arn arn:aws:iam::123456789012:policy/YourPolicyName --policy-document file://current_policy.json --set-as-default
```
