import { body, validationResult } from 'express-validator';
export const userValidationRules = () => {
  return [
    body('username', 'Username is required').not().isEmpty().trim(),
    body('email', 'please include a valid email').isEmail().trim(),
    body(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ];
};

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });

  //   const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }
};

// module.exports = {
//   userValidationRules,
//   validate,
// };
