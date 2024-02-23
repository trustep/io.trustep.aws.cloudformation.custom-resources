# Custom::QuicksightPermissions QuicksightPermission<a name="custom-resource-quicksight-permissions-property-permissions"></a>

Describes a set of permissions to be given to a set of principals\.

## Syntax<a name="custom-resource-quicksight-permissions-property-permissions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

<a name="custom-resource-quicksight-permissions-property-permissions-syntax.json"></a>
### JSON

<pre>
 <code>
{
  <a href="#cfn-custom-resource-quicksight-permissions-property-permissions-actions">Actions</a> : [ String, ... ]
  <a href="#cfn-custom-resource-quicksight-permissions-property-permissions-principals">Principals</a> : [ String, ... ]
}
</code>
</pre>

<a name="aws-properties-quicksight-analysis-resourcepermission-syntax.yaml"></a>
### YAML

<pre>
 <code>
  <a href="#cfn-custom-resource-quicksight-permissions-property-permissions-actions">Actions</a>:
    - String
  <a href="#cfn-custom-resource-quicksight-permissions-property-permissions-principals">Principals</a>:
    - String
 </code>
</pre>

## Properties<a name="custom-resource-quicksight-permissions-property-permissions-properties"></a>

<a name="cfn-custom-resource-quicksight-permissions-property-permissions-actions"></a>

#### `Actions`

The IAM action to grant permissions on\. On update, removed actions will be revoked.
*Required*: Yes
*Type*: List of String  
*Update requires*: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Principals  <a name="cfn-custom-resource-quicksight-permissions-property-permissions-principals"></a>

The Amazon Resource Name \(ARN\) of the principals\. This can be one of the following:  

+ The ARN of an Amazon QuickSight user or group associated.\. \(This is common\.\)
+ The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme\. \(This is common\.\)
+ The ARN of an AWS account root: This is an IAM ARN rather than a Amazon QuickSight ARN\. Use this option only to share resources \(templates\) across AWS accounts\. \(This is less common\.\)

The permissions will be applied to each of the given principals individually.
On update, removed principals will have the permissions revoked.

*Required*: Yes  
*Type*: String  
*Update requires*: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
