export const validate = fields => {
    const errors = {};

    // function to check min length of an input.
    // returns true is input is smaller than minLength.
    const isMinLength = (field, minLength) => field === null || field.length < minLength;

    if (isMinLength(fields.firstName, 3)) {
        errors.firstName = true;
    }

    if (isMinLength(fields.lastName, 3)) {
        errors.lastName = true;
    }

    if (isMinLength(fields.email, 12)) {
        errors.email = true;
    }

    if (fields.userType === null) {
        errors.userType = true;
    }

    if (fields.userType === 'restaurant' && isMinLength(fields.restaurantName, 3)) {
        errors.restaurantName = true;
    }

    if (isMinLength(fields.password, 8)) {
        errors.password = true;
    }

    if (fields.password2 === null || fields.password2 !== fields.password) {
        errors.password2 = true;
    }

    return errors;
};