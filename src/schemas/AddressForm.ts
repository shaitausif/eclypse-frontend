import {z} from 'zod'


const addressFormSchema = z.object({
  firstname: z.string().min(1, {message: 'First name is required'}).max(20, {message: 'First name must be less than 20 characters'}),
  lastname: z.string().min(1, {message: 'Last name is required'}).max(20, {message: 'Last name must be less than 20 characters'}),
  streetaddress: z.string().min(1, {message: 'Street address is required'}),
  apartmentnumber: z.string().min(1, {message: 'Apartment number is required'}).max(20, {message: 'Apartment number must be less than 20 characters'}),
  state : z.string().min(1, {message: 'State is required'}).max(20, {message: 'State must be less than 20 characters'}),
  zip : z.string().min(1, {message: 'Zip code is required'}).max(6, {message: 'Zip code must be less than 6 digit   s'}),
})

export {addressFormSchema}