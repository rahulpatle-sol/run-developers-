// main  waraper

import React from 'react'
import ContactPage from './hero'
import FAQSection from './faq'
import { ContactSection } from '@/components/contact-section'
const contact = () => {
  return (
<>
<ContactPage/>
<FAQSection/>
<ContactSection/>
</>
  )
}

export default contact