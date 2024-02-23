# Custom::QuicksightPermissions<a name="custom-resource-quicksight-permissions"></a>

Manage permissions of Amazon Quicksight Analyses, Dashboards, Data Sets, Data Sources, Folders, Role Custom, Templates, Themes and Topics\.

## Syntax<a name="custom-resource-quicksight-permissions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="custom-resource-quicksight-permissions-syntax.json"></a>

```
{
  "Type" : "Custom::QuicksightPermissions",
  "Properties" : {
      "[ServiceToken](#cfn-custom-resource-quicksight-permissions-servicetoken)": String,
      "[AnalysisId](#cfn-custom-resource-quicksight-permissions-analysisid)" : String,
      "[DashboardId](#cfn-custom-resource-quicksight-permissions-dashboardid)" : String,
      "[DataSetId](#cfn-custom-resource-quicksight-permissions-datasetdid)" : String,
      "[DataSourceId](#cfn-custom-resource-quicksight-permissions-datasourceid)" : String,
      "[FolderId](#cfn-custom-resource-quicksight-permissions-folderid)" : String,
      "[RoleCustomId](#cfn-custom-resource-quicksight-permissions-rolecustomid)" : String,
      "[TemplateId](#cfn-custom-resource-quicksight-permissions-templateid)" : String,
      "[ThemeId](#cfn-custom-resource-quicksight-permissions-themeid)" : String,
      "[TopicId](#cfn-custom-resource-quicksight-permissions-topicid)" : String,
      "[Permissions](#cfn-custom-resource-quicksight-permissions-property-permissions)" : [ QuicksightPermission, ... ]
    }
}
```

### YAML<a name="custom-resource-quicksight-permissions-syntax.yaml"></a>

```
Type: Custom::QuicksightPermissions
Properties: 
  [ServiceToken](#cfn-custom-resource-quicksight-permissions-servicetoken): String
  [AnalysisId](#cfn-custom-resource-quicksight-permissions-analysisid) : String,
  [DashboardId](#cfn-custom-resource-quicksight-permissions-dashboardid) : String,
  [DataSetId](#cfn-custom-resource-quicksight-permissions-datasetdid) : String,
  [DataSourceId](#cfn-custom-resource-quicksight-permissions-datasourceid) : String,
  [FolderId](#cfn-custom-resource-quicksight-permissions-folderid) : String,
  [RoleCustomId](#cfn-custom-resource-quicksight-permissions-rolecustomid) : String,
  [TemplateId](#cfn-custom-resource-quicksight-permissions-templateid) : String,
  [ThemeId](#cfn-custom-resource-quicksight-permissions-themeid) : String,
  [TopicId](#cfn-custom-resource-quicksight-permissions-topicid) : String,
  [Permissions](#cfn-custom-resource-quicksight-permissions-property-permissions) : 
    - QuicksightPermission


```

## Properties<a name="custom-resource-quicksight-permissions-properties"></a>

`ServiceToken`  <a name="cfn-custom-resource-quicksight-permissions-servicetoken"></a>
The Service Token that implements this custom resource\.  
*Required*: Yes  
*Type*: String
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`AnalysisId`  <a name="cfn-custom-resource-quicksight-permissions-analysisid"></a>
The ID of the AWS Quicksight Analysis that the permissions will be defined to. Just one of these properties should be specified: AnalsysisId, DashboardId, DataSetId, DataSourceId, FolderId, RoleCustomId, TemplateId, ThemeId, TopicId\.  
*Required*: Yes  
*Type*: String
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`DashboardId`  <a name="cfn-custom-resource-quicksight-permissions-dashboardid"></a>
The ID of the AWS Quicksight Dashboard that the permissions will be defined to. Just one of these properties should be specified: AnalsysisId, DashboardId, DataSetId, DataSourceId, FolderId, RoleCustomId, TemplateId, ThemeId, TopicId\.  
*Required*: Yes  
*Type*: String
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`DataSetId`  <a name="cfn-custom-resource-quicksight-permissions-datasetid"></a>
The ID of the AWS Quicksight Data Set that the permissions will be defined to. Just one of these properties should be specified: AnalsysisId, DashboardId, DataSetId, DataSourceId, FolderId, RoleCustomId, TemplateId, ThemeId, TopicId\.  
*Required*: Yes  
*Type*: String
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`DataSourceId`  <a name="cfn-custom-resource-quicksight-permissions-datasourceid"></a>
The ID of the AWS Quicksight Data Source that the permissions will be defined to. Just one of these properties should be specified: AnalsysisId, DashboardId, DataSetId, DataSourceId, FolderId, RoleCustomId, TemplateId, ThemeId, TopicId\.  
*Required*: Yes  
*Type*: String
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`FolderId`  <a name="cfn-custom-resource-quicksight-permissions-folderid"></a>
The ID of the AWS Quicksight Folder that the permissions will be defined to. Just one of these properties should be specified: AnalsysisId, DashboardId, DataSetId, DataSourceId, FolderId, RoleCustomId, TemplateId, ThemeId, TopicId\.  
*Required*: Yes  
*Type*: String
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`RoleCustomId`  <a name="cfn-custom-resource-quicksight-permissions-rolecustomid"></a>
The ID of the AWS Quicksight Role Custom that the permissions will be defined to. Just one of these properties should be specified: AnalsysisId, DashboardId, DataSetId, DataSourceId, FolderId, RoleCustomId, TemplateId, ThemeId, TopicId\.  
*Required*: Yes  
*Type*: String
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`TemplateId`  <a name="cfn-custom-resource-quicksight-permissions-templateid"></a>
The ID of the AWS Quicksight Template that the permissions will be defined to. Just one of these properties should be specified: AnalsysisId, DashboardId, DataSetId, DataSourceId, FolderId, RoleCustomId, TemplateId, ThemeId, TopicId\.  
*Required*: Yes  
*Type*: String
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ThemeId`  <a name="cfn-custom-resource-quicksight-permissions-themeid"></a>
The ID of the AWS Quicksight Theme that the permissions will be defined to. Just one of these properties should be specified: AnalsysisId, DashboardId, DataSetId, DataSourceId, FolderId, RoleCustomId, TemplateId, ThemeId, TopicId\.  
*Required*: Yes  
*Type*: String
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`TopicId`  <a name="cfn-custom-resource-quicksight-permissions-topicid"></a>
The ID of the AWS Quicksight Topic that the permissions will be defined to. Just one of these properties should be specified: AnalsysisId, DashboardId, DataSetId, DataSourceId, FolderId, RoleCustomId, TemplateId, ThemeId, TopicId\.  
*Required*: Yes  
*Type*: String
*Update requires*: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Permissions`  <a name="cfn-custom-resource-quicksight-permissions-property-permissions"></a>
A structure that describes the principals and the resource\-level permissions on the element\. You can use the `Permissions` structure to grant permissions by providing a list of AWS Identity and Access Management \(IAM\) action information for each principal listed by Amazon Resource Name \(ARN\)\.
To specify no permissions, omit `Permissions`\.  
*Required*: Yes
*Type*: List of [Permission](custom-resource-quicksight-permissions-property-permission.md)  
*Update requires*: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="custom-resource-quicksight-permissions-return-values"></a>

### Fn::GetAtt<a name="custom-resource-quicksight-permissions-return-values-fn--getatt"></a>

#### <a name="custom-resource-quicksight-permissions-return-values-fn--getatt-fn--getatt"></a>

`Id`  <a name="Arn-fn::getatt"></a>
The Id of the element to which the permission was assigned to\.
