module.export({default:()=>ValidationContext});let MongoObject;module.link('mongo-object',{default(v){MongoObject=v}},0);let doValidation;module.link('./doValidation.js',{default(v){doValidation=v}},1);let looksLikeModifier;module.link('./utility/index.js',{looksLikeModifier(v){looksLikeModifier=v}},2);


class ValidationContext {
    /**
     * @param schema SimpleSchema instance to use for validation
     * @param name Optional context name, accessible on context.name.
     */
    constructor(schema, name) {
        this._validationErrors = [];
        this.name = name;
        this._simpleSchema = schema;
        this._schema = schema.schema();
        this._schemaKeys = Object.keys(this._schema);
    }
    setValidationErrors(errors) {
        this._validationErrors = errors;
    }
    addValidationErrors(errors) {
        errors.forEach((error) => this._validationErrors.push(error));
    }
    /**
     * Reset the validationErrors array
     */
    reset() {
        this.setValidationErrors([]);
    }
    /**
     * @param key The key to get an error for
     * @param genericKey The generic version of this key, if already known
     * @returns The first validation error for this key, if any
     */
    getErrorForKey(key, genericKey = MongoObject.makeKeyGeneric(key)) {
        const errors = this._validationErrors;
        const errorForKey = errors.find((error) => error.name === key);
        if (errorForKey != null)
            return errorForKey;
        return errors.find((error) => error.name === genericKey);
    }
    /**
     * @param key The key to check validity for
     * @param genericKey The generic version of this key, if already known
     * @returns True if this key is currently invalid; otherwise false.
     */
    keyIsInvalid(key, genericKey = MongoObject.makeKeyGeneric(key)) {
        return this.getErrorForKey(key, genericKey) != null;
    }
    /**
     * @param key The key get the first error message for
     * @param genericKey The generic version of this key, if already known
     * @returns The message for the first error for this key, or an empty string
     */
    keyErrorMessage(key, genericKey = MongoObject.makeKeyGeneric(key)) {
        const errorObj = this.getErrorForKey(key, genericKey);
        if (errorObj == null)
            return '';
        return this._simpleSchema.messageForError(errorObj);
    }
    /**
     * Validates the object against the SimpleSchema and sets an array of error objects
     * @param obj Object to be validated
     * @param options Validation options
     * @returns True if valid; otherwise false
     */
    validate(obj, { extendedCustomContext = {}, ignore: ignoreTypes = [], keys: keysToValidate, modifier: isModifier = false, mongoObject, upsert: isUpsert = false } = {}) {
        // First do some basic checks of the object, and throw errors if necessary
        if (obj == null || (typeof obj !== 'object' && typeof obj !== 'function')) {
            throw new Error('The first argument of validate() must be an object');
        }
        if (!isModifier && looksLikeModifier(obj)) {
            throw new Error('When the validation object contains mongo operators, you must set the modifier option to true');
        }
        const validationErrors = doValidation({
            extendedCustomContext,
            ignoreTypes,
            isModifier,
            isUpsert,
            keysToValidate,
            mongoObject,
            obj,
            schema: this._simpleSchema,
            validationContext: this
        });
        if (keysToValidate != null) {
            // We have only revalidated the listed keys, so if there
            // are any other existing errors that are NOT in the keys list,
            // we should keep these errors.
            for (const error of this._validationErrors) {
                const wasValidated = keysToValidate.some((key) => key === error.name || error.name.startsWith(`${key}.`));
                if (!wasValidated)
                    validationErrors.push(error);
            }
        }
        this.setValidationErrors(validationErrors);
        // Return true if it was valid; otherwise, return false
        return validationErrors.length === 0;
    }
    isValid() {
        return this._validationErrors.length === 0;
    }
    validationErrors() {
        return this._validationErrors;
    }
    clean(doc, options = {}) {
        return this._simpleSchema.clean(doc, options);
    }
}
