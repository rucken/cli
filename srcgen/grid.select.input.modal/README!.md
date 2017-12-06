# VARIABLES
```
<prompt name="app.name" message="Application name">appname</prompt>
<prompt name="libs.core" message="Core module">core</prompt>
<prompt name="libs.platform" message="Platform module">web</prompt>
<prompt name="libs.coreFolder" message="Core module">core</prompt>
<prompt name="libs.platformFolder" message="Platform module">web</prompt>
<prompt name="grid.list.name.kebab" message="Grid component name">name-types</prompt>
<prompt name="grid.name.kebab" message="Modal window component name">name-type</prompt>
<prompt name="grid.list.name.camel" message="Service name">NameTypes</prompt>
<prompt name="grid.name.camel" message="Entity name">NameType</prompt>
<prompt name="grid.list.name.lower.camel" message="Service name if it use in local var">nameTypes</prompt>
<prompt name="grid.name.lower.camel" message="Entity name if it use in local var">nameType</prompt>
<prompt name="grid.list.name.caption" message="Grid title">Name types</prompt>
<prompt name="grid.name.caption" message="Item title">Name type</prompt>
<prompt name="grid.item.name.caption" message="Entity title">name type</prompt>
<prompt name="grid.name.snake" message="Resource url postfix for work with more entities">name_type</prompt>
<prompt name="grid.list.name.snake" message="Resource url postfix for work with one entities">name_types</prompt>
<prompt name="grid.table.fields.names" message="Entity fields" updater="javascript:
if (_.isArray(__value)){
    return __value;
}
__value=__value.split(',');
__value=_.map(__value,function(item){return _.camelCase(_.trim(item,'\t '));});
return __value">name, title, createdAt, updatedAt</prompt>
<prompt name="grid.table.pk.name"  message="Entity primary field name">id</prompt>
<prompt name="grid.table.fields.dates" message="Entity date fields" updater="javascript:
if (_.isArray(__value)){
    return __value;
}
__value=__value.split(',');
__value=_.map(__value,function(item){return _.camelCase(_.trim(item,'\t '));});
return __value">createdAt, updatedAt</prompt>
```