<!-- markdownlint-disable MD033 -->
# Custom::QuicksightPermissions QuicksightPermission

Describes a set of permissions to be given to a set of principals\.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
 <code>
{
  <a href="#actions">Actions</a>: [ String, ... ]
  <a href="#principals">Principals</a>: [ String, ... ]
}
</code>
</pre>

### YAML

<pre>
 <code>
  <a href="#actions">Actions</a>:
    - String
  <a href="#principals">Principals</a>:
    - String
 </code>
</pre>

## Properties<a name="custom-resource-quicksight-permissions-property-permissions-properties"></a>

### `Actions`

The quicksight action to grant permissions on\.
On update, removed actions will be revoked.

*Required*: Yes  
*Type*: List of String  
*Update requires*: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

### `Principals`  

The Amazon Resource Name \(ARN\) of the principals\. This can be one of the following:  

+ The ARN of an Amazon QuickSight user or group associated.\. \(This is common\.\)
+ The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme\. \(This is common\.\)
+ The ARN of an AWS account root: This is an IAM ARN rather than a Amazon QuickSight ARN\. Use this option only to share resources \(templates\) across AWS accounts\. \(This is less common\.\)

The permissions will be applied to each of the given principals individually.
On update, removed principals will have the permissions revoked.

*Required*: Yes  
*Type*: List of String  
*Update requires*: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
