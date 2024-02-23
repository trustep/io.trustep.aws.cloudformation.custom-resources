<!-- markdownlint-disable MD033 -->
# Custom::QuicksightPermissions

Manage permissions of Amazon Quicksight Analyses, Dashboards, Data Sets, Data Sources, Folders, Role Custom, Templates, Themes and Topics\.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
 <code>
{
  "Type" : "Custom::QuicksightPermissions",
  "Properties" : {
    <a href="#ServiceToken">ServiceToken</a> : String,
    <a href="#AnalysisId">AnalysisId</a> : String,
    <a href="#DashboardId">DashboardId</a> : String,
    <a href="#DataSetId">DataSetId</a> : String,
    <a href="#DataSourceId">DataSourceId</a> : String,
    <a href="#FolderId">FolderId</a> : String,
    <a href="#RoleCustomId">RoleCustomId</a> : String,
    <a href="#TemplateId">TemplateId</a> : String,
    <a href="#ThemeId">ThemeId</a> : String,
    <a href="#TopicId">TopicId</a> : String,
    <a href="#Permissions">Permissions</a> : [ QuicksightPermission, ... ]
  }
}
</code>
</pre>

### YAML

<pre>
 <code>
Type: Custom::QuicksightPermissions
Properties:
  <a href="#ServiceToken">ServiceToken</a> : String,
  <a href="#AnalysisId">AnalysisId</a> : String,
  <a href="#DashboardId">DashboardId</a> : String,
  <a href="#DataSetId">DataSetId</a> : String,
  <a href="#DataSourceId">DataSourceId</a> : String,
  <a href="#FolderId">FolderId</a> : String,
  <a href="#RoleCustomId">RoleCustomId</a> : String,
  <a href="#TemplateId">TemplateId</a> : String,
  <a href="#ThemeId">ThemeId</a> : String,
  <a href="#TopicId">TopicId</a> : String,
  <a href="#Permissions">Permissions</a> :
    - QuicksightPermission
 </code>
</pre>

## Properties

### `ServiceToken`

The Service Token that implements this custom resource\.  

*Required*: Yes  
*Type*: String  
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

### `AnalysisId`

The ID of the AWS Quicksight Analysis that the permissions will be defined to.

Just one of these properties should be specified:

- AnalsysisId
- DashboardId
- DataSetId
- DataSourceId
- FolderId
- RoleCustomId
- TemplateId
- ThemeId
- TopicId

*Required*: Yes (Only one of the Id properties)  
*Type*: String  
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

### `DashboardId`

The ID of the AWS Quicksight Dashboard that the permissions will be defined to.

Just one of these properties should be specified:

- AnalsysisId
- DashboardId
- DataSetId
- DataSourceId
- FolderId
- RoleCustomId
- TemplateId
- ThemeId
- TopicId

*Required*: Yes (Only one of the Id properties)  
*Type*: String  
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

### `DataSetId`

The ID of the AWS Quicksight Data Set that the permissions will be defined to.

Just one of these properties should be specified:

- AnalsysisId
- DashboardId
- DataSetId
- DataSourceId
- FolderId
- RoleCustomId
- TemplateId
- ThemeId
- TopicId

*Required*: Yes (Only one of the Id properties)  
*Type*: String  
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

### `DataSourceId`

The ID of the AWS Quicksight Data Source that the permissions will be defined to.

Just one of these properties should be specified:

- AnalsysisId
- DashboardId
- DataSetId
- DataSourceId
- FolderId
- RoleCustomId
- TemplateId
- ThemeId
- TopicId

*Required*: Yes (Only one of the Id properties)  
*Type*: String  
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

### `FolderId`

The ID of the AWS Quicksight Folder that the permissions will be defined to.

Just one of these properties should be specified:

- AnalsysisId
- DashboardId
- DataSetId
- DataSourceId
- FolderId
- RoleCustomId
- TemplateId
- ThemeId
- TopicId

*Required*: Yes (Only one of the Id properties)  
*Type*: String  
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

### `RoleCustomId`

The ID of the AWS Quicksight Role Custom that the permissions will be defined to.

Just one of these properties should be specified:

- AnalsysisId
- DashboardId
- DataSetId
- DataSourceId
- FolderId
- RoleCustomId
- TemplateId
- ThemeId
- TopicId

*Required*: Yes (Only one of the Id properties)  
*Type*: String  
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

### `TemplateId`

The ID of the AWS Quicksight Template that the permissions will be defined to.

Just one of these properties should be specified:

- AnalsysisId
- DashboardId
- DataSetId
- DataSourceId
- FolderId
- RoleCustomId
- TemplateId
- ThemeId
- TopicId

*Required*: Yes (Only one of the Id properties)  
*Type*: String  
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

### ThemeId`

The ID of the AWS Quicksight Theme that the permissions will be defined to.

Just one of these properties should be specified:

- AnalsysisId
- DashboardId
- DataSetId
- DataSourceId
- FolderId
- RoleCustomId
- TemplateId
- ThemeId
- TopicId

*Required*: Yes (Only one of the Id properties)  
*Type*: String  
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

### `TopicId`

The ID of the AWS Quicksight Topic that the permissions will be defined to.

Just one of these properties should be specified:

- AnalsysisId
- DashboardId
- DataSetId
- DataSourceId
- FolderId
- RoleCustomId
- TemplateId
- ThemeId
- TopicId

*Required*: Yes (Only one of the Id properties)  
*Type*: String  
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

### `Permissions`

A structure that describes the principals and the resource\-level permissions on the element\.

You can use the `Permissions` structure to grant permissions by providing a list of AWS Identity and Access Management \(IAM\) action information for each principal listed by Amazon Resource Name \(ARN\)\.

To specify no permissions, omit `Permissions`\.  

*Required*: Yes  
*Type*: List of [QuicksightPermission](custom-resource-quicksight-permissions-property-permission.md)  
*Update requires*: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values

### Fn::GetAtt

#### `Id`

The Id of the element to which the permission was assigned to\.
