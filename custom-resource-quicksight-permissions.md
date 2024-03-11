<!-- markdownlint-disable MD033 -->
# Custom::QuicksightPermissions

Manage permissions of Amazon Quicksight Analyses, Dashboards, Data Sets, Data Sources, Folders, Templates, Themes and Topics\.

> [!IMPORTANT]  
> Permissions on the **same Quicksight element** given to the **same Principal ARN** cannot appears in more than one stack.
> If you try to do it, only the first one will successfully deploy. Any subsequent stack will fail to deploy.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<details open>
<summary>Hide/Show</summary>

<pre>
 <code>
{
  "Type" : "Custom::QuicksightPermissions",
  "Properties" : {
    <a href="#ServiceToken">ServiceToken</a>: String,
    <a href="#AnalysisId">AnalysisId</a>: String,
    <a href="#DashboardId">DashboardId</a>: String,
    <a href="#DataSetId">DataSetId</a>: String,
    <a href="#DataSourceId">DataSourceId</a>: String,
    <a href="#FolderId">FolderId</a>: String,
    <a href="#TemplateId">TemplateId</a>: String,
    <a href="#ThemeId">ThemeId</a>: String,
    <a href="#TopicId">TopicId</a>: String,
    <a href="#Permissions">Permissions</a>: [ QuicksightPermission, ... ]
    <a href="#LinkPermissions">LinkPermissions</a>: [ QuicksightPermission, ... ]
  }
}
</code>
</pre>
</details>

### YAML

<details open>
<summary>Hide/Show</summary>

<pre>
 <code>
Type: Custom::QuicksightPermissions
Properties:
  <a href="#ServiceToken">ServiceToken</a>: String
  <a href="#AnalysisId">AnalysisId</a>: String
  <a href="#DashboardId">DashboardId</a>: String
  <a href="#DataSetId">DataSetId</a>: String
  <a href="#DataSourceId">DataSourceId</a>: String
  <a href="#FolderId">FolderId</a>: String
  <a href="#TemplateId">TemplateId</a>: String
  <a href="#ThemeId">ThemeId</a>: String
  <a href="#TopicId">TopicId</a>: String
  <a href="#Permissions">Permissions</a> :
    - QuicksightPermission
  <a href="#LinkPermissions">LinkPermissions</a> :
    - QuicksightPermission
 </code>
</pre>

</details>

## Properties

> [!WARNING]  
> Just one of the following properties should be specified:
>
> - <a href="#AnalysisId">AnalysisId</a>
> - <a href="#DashboardId">DashboardId</a>
> - <a href="#DataSetId">DataSetId</a>
> - <a href="#DataSourceId">DataSourceId</a>
> - <a href="#FolderId">FolderId</a>
> - <a href="#TemplateId">TemplateId</a>
> - <a href="#ThemeId">ThemeId</a>
> - <a href="#TopicId">TopicId</a>

### `ServiceToken`

<details><summary>Hide/Show</summary>

The Service Token that implements this custom resource\.  

Tipically will be an import value similar to this one:

<pre>
 <code>
{
  "ServiceToken": {
    "Fn::ImportValue": {
      "Fn::Sub": "${CustomResourcesStackName}-QuicksightPermissions-Lambda-Arn"
    }
  }
}
 </code>
</pre>

<pre>
 <code>
ServiceToken:
  'Fn::ImportValue': !Sub "${CustomResourcesStackName}-QuicksightPermissions-Lambda-Arn"
 </code>
</pre>

> *Required*: Yes  
> *Type*: String  
> *Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

</details>

### `AnalysisId`

<details><summary>Hide/Show</summary>

The ID of the AWS Quicksight Analysis that the permissions will be defined to.

Just one of these properties should be specified:

- <a href="#AnalysisId">AnalysisId</a>
- <a href="#DashboardId">DashboardId</a>
- <a href="#DataSetId">DataSetId</a>
- <a href="#DataSourceId">DataSourceId</a>
- <a href="#FolderId">FolderId</a>
- <a href="#TemplateId">TemplateId</a>
- <a href="#ThemeId">ThemeId</a>
- <a href="#TopicId">TopicId</a>

> *Required*: Yes (Only one of the Id properties)  
> *Type*: String  
> *Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

</details>

### `DashboardId`

<details><summary>Hide/Show</summary>

The ID of the AWS Quicksight Dashboard that the permissions will be defined to.

Just one of these properties should be specified:

- <a href="#AnalysisId">AnalysisId</a>
- <a href="#DashboardId">DashboardId</a>
- <a href="#DataSetId">DataSetId</a>
- <a href="#DataSourceId">DataSourceId</a>
- <a href="#FolderId">FolderId</a>
- <a href="#TemplateId">TemplateId</a>
- <a href="#ThemeId">ThemeId</a>
- <a href="#TopicId">TopicId</a>

> *Required*: Yes (Only one of the Id properties)  
> *Type*: String  
> *Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

</details>

### `DataSetId`

<details><summary>Hide/Show</summary>

The ID of the AWS Quicksight Data Set that the permissions will be defined to.

Just one of these properties should be specified:

- <a href="#AnalysisId">AnalysisId</a>
- <a href="#DashboardId">DashboardId</a>
- <a href="#DataSetId">DataSetId</a>
- <a href="#DataSourceId">DataSourceId</a>
- <a href="#FolderId">FolderId</a>
- <a href="#TemplateId">TemplateId</a>
- <a href="#ThemeId">ThemeId</a>
- <a href="#TopicId">TopicId</a>

> *Required*: Yes (Only one of the Id properties)  
> *Type*: String  
> *Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

</details>

### `DataSourceId`

<details><summary>Hide/Show</summary>

The ID of the AWS Quicksight Data Source that the permissions will be defined to.

Just one of these properties should be specified:

- <a href="#AnalysisId">AnalysisId</a>
- <a href="#DashboardId">DashboardId</a>
- <a href="#DataSetId">DataSetId</a>
- <a href="#DataSourceId">DataSourceId</a>
- <a href="#FolderId">FolderId</a>
- <a href="#TemplateId">TemplateId</a>
- <a href="#ThemeId">ThemeId</a>
- <a href="#TopicId">TopicId</a>

> *Required*: Yes (Only one of the Id properties)  
> *Type*: String  
> *Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

</details>

### `FolderId`

<details><summary>Hide/Show</summary>

The ID of the AWS Quicksight Folder that the permissions will be defined to.

Just one of these properties should be specified:

- <a href="#AnalysisId">AnalysisId</a>
- <a href="#DashboardId">DashboardId</a>
- <a href="#DataSetId">DataSetId</a>
- <a href="#DataSourceId">DataSourceId</a>
- <a href="#FolderId">FolderId</a>
- <a href="#TemplateId">TemplateId</a>
- <a href="#ThemeId">ThemeId</a>
- <a href="#TopicId">TopicId</a>

> *Required*: Yes (Only one of the Id properties)  
> *Type*: String  
> *Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

</details>

### `TemplateId`

<details><summary>Hide/Show</summary>

The ID of the AWS Quicksight Template that the permissions will be defined to.

Just one of these properties should be specified:

- <a href="#AnalysisId">AnalysisId</a>
- <a href="#DashboardId">DashboardId</a>
- <a href="#DataSetId">DataSetId</a>
- <a href="#DataSourceId">DataSourceId</a>
- <a href="#FolderId">FolderId</a>
- <a href="#TemplateId">TemplateId</a>
- <a href="#ThemeId">ThemeId</a>
- <a href="#TopicId">TopicId</a>

> *Required*: Yes (Only one of the Id properties)  
> *Type*: String  
> *Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

</details>

### `ThemeId`

<details><summary>Hide/Show</summary>

The ID of the AWS Quicksight Theme that the permissions will be defined to.

Just one of these properties should be specified:

- <a href="#AnalysisId">AnalysisId</a>
- <a href="#DashboardId">DashboardId</a>
- <a href="#DataSetId">DataSetId</a>
- <a href="#DataSourceId">DataSourceId</a>
- <a href="#FolderId">FolderId</a>
- <a href="#TemplateId">TemplateId</a>
- <a href="#ThemeId">ThemeId</a>
- <a href="#TopicId">TopicId</a>

> *Required*: Yes (Only one of the Id properties)  
> *Type*: String  
> *Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

</details>

### `TopicId`

<details><summary>Hide/Show</summary>

The ID of the AWS Quicksight Topic that the permissions will be defined to.

Just one of these properties should be specified:

- <a href="#AnalysisId">AnalysisId</a>
- <a href="#DashboardId">DashboardId</a>
- <a href="#DataSetId">DataSetId</a>
- <a href="#DataSourceId">DataSourceId</a>
- <a href="#FolderId">FolderId</a>
- <a href="#TemplateId">TemplateId</a>
- <a href="#ThemeId">ThemeId</a>
- <a href="#TopicId">TopicId</a>

> *Required*: Yes (Only one of the Id properties)  
> *Type*: String  
> *Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

</details>

### `Permissions`

<details><summary>Hide/Show</summary>

A structure that describes the principals and the resource\-level permissions on the element\.

You can use the `Permissions` structure to grant permissions by providing a list of AWS Identity and Access Management \(IAM\) action information for each principal listed by Amazon Resource Name \(ARN\)\.

> *Required*: Yes, except when using <a href="#LinkPermissions">LinkPermissions</a> when can be omited if desired.
> *Type*: List of [QuicksightPermission](custom-resource-quicksight-permissions-property-permission.md)  
> *Update requires*: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

</details>

### `LinkPermissions`

> [!NOTE]  
> **Applies only for Dashboards \(when DashboardId is specified\)\. If you define LinkPermissions for other element types, they will be ignored.**

<details><summary>Hide/Show</summary>

A structure that describes the principals and the resource\-level link permissions on the dashboard\.

You can use the `LinkPermissions` structure to grant link permissions by providing a list of AWS Identity and Access Management \(IAM\) action information for each principal listed by Amazon Resource Name \(ARN\)\.

> *Required*: No  
> *Type*: List of [QuicksightPermission](custom-resource-quicksight-permissions-property-permission.md)  
> *Update requires*: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

</details>

## Return values

### Fn::GetAtt

#### `Id`

The Id of the element to which the permission was assigned to\.
