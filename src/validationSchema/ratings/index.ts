import * as yup from 'yup';

export const ratingValidationSchema = yup.object().shape({
  rating_rating: yup.number().integer().required(),
  review: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
  booking_id: yup.string().nullable().required(),
});
