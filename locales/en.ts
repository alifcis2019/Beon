import common from './en/common.json'
import index from './en/index.json'
import contact from './en/contact.json'
import login from './en/login.json'
import signup from './en/signup.json'
import privacy_policy from './en/privacy_policy.json'
import terms_conditions from './en/terms_conditions.json'
import blog from './en/blog.json'
import blog_details from './en/blog_details.json'
import solutions_whatsapp from './en/solutions_whatsapp.json'
import solutions_sms from './en/solutions_sms.json'
import solutions_otp from './en/solutions_otp.json'

import layout from './en/layout.json'

export default defineI18nLocale(async () => {
  return {
    common,
    index,
    contact,
    login,
    signup,
    privacy_policy,
    terms_conditions,
    blog,
    blog_details,
    solutions_whatsapp,
    solutions_sms,
    solutions_otp,
    layout
  }
})
