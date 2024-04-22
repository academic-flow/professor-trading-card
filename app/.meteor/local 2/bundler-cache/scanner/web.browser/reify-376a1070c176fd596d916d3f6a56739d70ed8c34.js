module.export({schemaDefinitionOptions:()=>schemaDefinitionOptions,toJsonSchema:()=>toJsonSchema,ValidationContext:()=>ValidationContext});module.link('./clean.js');let schemaDefinitionOptions,SimpleSchema,ValidationContext;module.link('./SimpleSchema.js',{schemaDefinitionOptions(v){schemaDefinitionOptions=v},SimpleSchema(v){SimpleSchema=v},ValidationContext(v){ValidationContext=v}},0);let toJsonSchema;module.link('./toJsonSchema.js',{toJsonSchema(v){toJsonSchema=v}},1);


SimpleSchema.ValidationContext = ValidationContext;

module.exportDefault(SimpleSchema);
