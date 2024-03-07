<!-- markdownlint-disable MD033 -->
# TruStep Custom Resources for Cloudformation

This repo contains a set of cloudformation custom resources created by TruStep to support the operation of itself and its clients.

Currently there is only one custom resource.
It handles Quicksight Permissions of each type of element available.
With it you can manage the permissions as a Resource of its own.
Usefull when you have one or more teams responsible for creating some quicksight elements, but its permissions should be handle by a different teams withou access to the repository which creates the resource.
Considering that a permission is not a standalone resource by its own, this extension imposes some restriccions to avoid inconsistent scenarios. The main restriccion is that one permission resource associated with a quicksight element and a principal must define all actions of that principal within the resource. You cannot define, for the same quicksight element and principal, distinct cloudformation resources, either in the same or in a distinct template. You neither can manage permissions for a quicksight resource and principal which as set outside cloudformation. In such a case, you need to revoke the permissions manually granted and then launch the template.

To view [here](custom-resource-quicksight-permissions.md) a detailed documentation of Custom::QuicksightPermissions resource.

## Installation Instruccions

The template is created using AWS SAM Cloudformation extension. You should follow this steps to install it:

1. install AWS CLI
2. install AWS SAM
3. clone this repository
4. configure credentials with appropriated permissions to deploy to the account. you can optionally run the sam pipeline bootstrap command to allow aws sam create a stack which create user and roles with appropriated permissions. Please refer to AWS CLI and AWS SAM documentation for further details.
5. run sam build
6. run sam package
7. run sam deploy

After successfull deployment, check if the corresponding cloudformation stack was deployed correctly to the desired account. You can do it either by console or with AWS CLI.

## Using the Custom Resources

To use the custom resources in your cloudformation or aws sam templates, you should point the ServiceToken property to the Arn of the lambda created in the instalation process. You can do it either by hardcoding the value into your template, or by referencing the output variable QuicksightPermissionsArn created in the instalation process. To view the details of the output please check AWS Cloudformation Console.

The way we recommend you reference the custom resource within your template is by adding an input parameter to your template to hold the stack name of the custom resources deployed in installation process. Then you can use Cloudformation [Fn::ImportValue function](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html) with !Sub '${YourCustomResourceStackNameParameter}-QuicksightPermissions-Lambda-Arn'.
