import React from 'react'
import Collapsible from 'react-collapsible'
import './Faq.css'
const Faq = () => {
  return (
    <div className='faqmain'>
       <div className='faqheader'>
        <br /><br /><br />
        <h1 className='faqheadertext'>Frequently Asked Questions (FAQs)</h1>
      </div>
      <div className='faqinpt'>
      <h2 >FAQs by client organizations</h2>
      <Collapsible trigger="1. What is background verification (BGV)?">
      <div >
      <p>Background verification (BGV), also referred to as Background check (BGC) or background screening is a process that validates the credentials claimed by an individual going through the BGV process. The individual can be an employee, contractor, user, loan applicant, merchant, or a candidate requesting to access any product or service. The BGV process is a combination of checks, and the organization requesting BGV generally selects the list of checks. Some common checks include identity verification, address verification, criminal record check, prior employment verification, highest education verification, professional reference checks, credit history checks, etc</p>
      </div>
      </Collapsible>
      <hr />
      <Collapsible trigger="2. What is the potential impact of not doing background verification?">
      <div >
        <p>Not running background checks can lead to various risks for an organization such as ending up with a bad hire, non-compliance to ISO requirements, organization brand value, and reputational risk, safety risks, as well as financial liability risks.</p>
        <p>In context of employment, not doing Background verification (BGV) can lead to induction of a wrong hire (or a hire with a malicious past), that can in turn adversely impact the team culture, or even result in modern-day threats related to data security.</p>
        <p>According to a 2014 survey, a wrong hire can single-handedly bring down the team productivity by 15% and can cause negative financial impact accounting for 10 times the cost to the company (CTC).</p>
      </div>
      </Collapsible>
      <hr />
      <Collapsible trigger="3. How can we start BGV of our employees?">
      <div >
        <p>Getting started on OnGrid is a simple 3-step process:</p>
        <ol>
          <li>OnGrid team will demonstrate the platform. You can request for a demo here.</li>
          <li>Agreement between OnGrid and client organization, indicating the list of checks and mode of secure information exchange.</li>
          <li>There are four options of information (data, documents, consent) exchange, and the client can choose one. These options include:</li>
          <ol type='i'>
            <li>API integration,</li>
            <li>Self-registration by the candidate,</li>
            <li>Registration and request by authorized user, or</li>
            <li>Bulk data format shared by the client</li>
          </ol>
        </ol>
      </div>
      </Collapsible>
      <hr />
      <Collapsible trigger="4. How much time does it take for BGV process to complete?">
      <div >
        <p>Most verifications that are primarily digital in nature, such as ID verification, criminal record verification, credit score check, bank account verification, eLockr reference check (proprietary check only offered by OnGrid) get completed in less than 4hrs. Some of these can even happen instantly.</p>
        <p>Verifications that require manual intervention or field operational effort such as field address verification, professional reference check, drug test get completed within 24-48 hours.</p>
        <p>Some verifications that are dependent on a third party may take longer, and it can go to 5-10 working days. These include education record (some universities and institutes), prior employment verification, letter-based address verification.</p>
      </div>
      </Collapsible>
      <hr />
      <Collapsible trigger="5. What checks can be conducted under BGV? Do you have fixed packages, or can we customize the checks as per our requirement?">
      <div >
        <p>OnGrid clients can choose from over 30 checks, that can be added in a package. The package can be customized as per client requirement.</p>
        <p>The checks include ID verification (National IDs such as Aadhaar, PAN, Driving License, Voter ID, Passport), Court/criminal record verification, Address verification (physical visit), Address verification (postal method), Education record verification, Employment record verification, Professional reference checks, Police verification through law firm, Police verification through State department, Global database check, Credit check, Drug test, Traffic violation check, Curriculum Vitae (CV) validation, Vehicle registration check, Directorship check, Bank account verification, GST verification, Vendor due diligence, Medical registration checks.</p>
        <p>Your point of contact from OnGrid would also suggest the right set of checks for you, depending on industry and candidate profile, that will help you with both risk mitigation as well as compliance.</p>
      </div>
      </Collapsible>
      <hr />
      <Collapsible trigger="6. Can the candidate register directly and upload data, documents and consent for BGV?">
      <div >
        <p>Yes. OnGrid offers a unique feature that allows the candidate to sign-up and provide information, documents, and consent to initiate background checks. All we need in such case from the clients is the email ID of the candidate, using which we can email the candidate a self-registration link. This modern approach saves a lot of time and effort of executives running the BGV program in an organization (Eg. HR managers, talent acquisition leaders), and minimizes manual interventions.</p>
      </div>
      </Collapsible>
      <hr />
      <Collapsible trigger="7. Are documents required for BGV? Are scans good enough? How are documents collected for BGV?">
      <div>
        <p>Documents are required for conducting some checks. However, many digital verifications (eg. ID verification, court record verification, credit score check, bank account verification) can be initiated without any document.</p>
        <p>For checks where documents are required, scanned(soft) copy is not only recommended but also preferred, as OnGrid offers a completely paperless platform.</p>
        <p>Documents can be collected using any of the following means:</p>
        <ol type='i'>
          <li>Upload during self-registration by the candidate,</li>
          <li>API integrations between OnGrid and client systems (eg. HRMS / ATS),</li>
          <li>Upload by client user on OnGrid portal, or</li>
          <li>Email from client user to OnGrid operations team.</li>
        </ol>
      </div>
      </Collapsible>
      <hr />
      <Collapsible trigger="8. Candidate has not submitted complete information or documents. How can you help us?">
      <div >
        <p>
        OnGrid platform allows to send system-generated periodic reminders to the candidates to complete registration on time, and/or to provide any missing information or document(s). We also provide our clients to choose an option in which we follow-up with the candidates directly, so that they can outsource the complete process to us, and not have to worry about "insufficiency resolution".
        </p>
      </div>
      </Collapsible>
      <hr />
      <Collapsible trigger="9. We want to verify our customers? Can we do that?">
      <div >
        <p>Yes, you can verify your users. This can be particularly critical if you trust your users with money (eg. loan) or assets (eg. car on rent, furniture on rent). Some common verifications would include instant ID verification, electronic KYC, instant credit check, instant face match (between ID uploaded and selfie taken). We would be keen to discuss other checks that may be relevant, depending on the user and risk profile.</p>
      </div>
      </Collapsible>
      <hr />
      <Collapsible trigger="10. We want to verify our platform users (or providers or merchants). Can we do that?">
      <div >
        <p>Yes, you can verify your users. This can be particularly critical if you trust your users, providers, or merchants with money or expensive assets/ inventory (eg. eCommerce platform delivery boys delivering expensive inventory like mobile phones). Some common verifications would include instant ID verification, electronic KYC, instant credit check, instant face match (between ID uploaded and selfie taken), criminal record check. We would be keen to discuss other checks that may be relevant, depending on the candidate and risk profile.</p>
      </div>
      </Collapsible>
      <hr />
      <Collapsible trigger="11. What are the information security and privacy measures that OnGrid has in place?">
      <div >
        <p>OnGrid is an ISO 27001:2013 certified organization, that uses highly secure state-of-the-art cloud infrastructure for information security. OnGrid platform's community and sub-community structure allows for strong access control provisions. Hypersensitive data such as some national IDs are stored using SHA-256 encryption and stored in secure data vaults. Private information such as ID numbers, mobile numbers, etc. are masked in the status and consolidated reports. OnGrid also follows a practice of annual third party audits by a CERT-IN certified auditor, on all the front end and backend systems. No information on OnGrid can be shared with anyone without explicit consent (authorization) of the individual to whom such data or document belongs.</p>
        <p>At OnGrid, our ambition is to follow the most stringent and modern data privacy and security principles (eg. GDPR) and respect the choice of the individual, who is the real owner of her/his data. We want to follow this not just on paper, but in spirit. In this regard, we have the provision where any individual with information or document(s) on OnGrid can request for edit or deletion of any/all information or document(s) by sending an email to contact@ongrid.in, with the subject "My data, my privacy".</p>
        <p>While enhancing data security and privacy is always a work in progress, we do welcome your suggestions on the same. Please write to us at partner@ongrid.in if you would like to help us enhance our data security and privacy policies, procedures and technical controls.</p>
      </div>
      </Collapsible>
      <hr />
      <Collapsible trigger="12. How can we take consent from the candidates who go through BGV?">
      <div >
        <p>Consent is the key aspect in the background verification (BGV) process. Consent can be captured via:</p>
        <ol>
          <li><b>Digital Interface</b> - When the candidate is submitting the information and documents during self-registration on a web portal or an app.</li>
          <li><b>Physical Interface</b> - When the candidate signs a document such (eg. An appointment letter). The consent language can be included in the same.</li>
        </ol>
        <p>Consent is key to privacy adherence, and we recommend that the consent must be wilful, and follow the principles of purpose limitation. If possible, take the consent in the local language as well, in addition to English.</p>
      </div>
      </Collapsible>
      <hr />
      <Collapsible trigger="13. I have a question which is not mentioned here. How do I reach out?">
      <div >
        <p>To know more about BGV and related concepts, or to learn more about OnGrid's BGV offerings and methodologies, please send us an email at contact@ongrid.in.</p>
      </div>
      </Collapsible>
      <hr />

      <h2>FAQs by individuals or BGV candidates</h2>
      <Collapsible trigger="1.I got a registration link from OnGrid, what needs to be done?">
      <div >
        <p>OnGrid triggers a self-registration link when either your current or prospective employer (or possibly a service provider) wishes to initiate a background verification to validate the personal and/or professional claims. Kindly complete the registration process at the earliest by clicking on the link. If you face any issues in completing your registration process or in uploading documents, please send us an email at support@ongrid.in.</p>
      </div>
      </Collapsible>
      <hr />
      <Collapsible trigger="2.I got a digital address verification link from OnGrid, what needs to be done?">
      <div >
        <p>The link is provided to complete your address verification as part of the ongoing background verification process. Use your smartphone to click on the link, verify your details, and complete the process (this will include the capture of relevant images and a short video from your smartphone). If you face any issues in completing the process, please send us an email at support@ongrid.in.</p>
      </div>
      </Collapsible>
      <hr />
      <Collapsible trigger="3.I got an address verification letter from OnGrid, what needs to be done?">
      <div >
        <p>
        The letter is delivered to complete your address verification as part of the ongoing background verification. Kindly share the PIN mentioned in the letter to complete the process. The PIN can be shared via multiple modes (SMS, WhatsApp, web-portal). If you face any issues in completing the process, please send us an email at support@ongrid.in.
        </p>
      </div>
      </Collapsible>
      <hr />
      <Collapsible trigger="4.How does OnGrid protect my data and documents?">
      <div >
        <p>OnGrid is an ISO 27001:2013 certified organization, that uses highly secure state-of-the-art cloud infrastructure for information security. OnGrid platform's community and sub-community structure allows for strong access control provisions. Hypersensitive data such as some national IDs are stored in an encrypted using SHA-256 encryption and stored in secure data vaults. Private information such as ID numbers, mobile numbers, etc. is masked in the status and consolidated reports. OnGrid also follows a practice of annual third party audits by a CERT-IN certified auditor, on all the front end and backend systems. No information on OnGrid can be shared with anyone without explicit consent (authorization) of the individual to whom such data or document belongs.</p>
        <p>At OnGrid, our ambition is to follow the most stringent and modern data privacy and security principles (eg. GDPR), and respect the choice of the individual, who is the real owner of her/his data. We want to follow this not just on paper, but in spirit.</p>
        <p>While enhancing data security and privacy is always a work in progress, we do welcome your suggestions on the same. Please write to us at partner@ongrid.in if you would like to help us enhance our data security and privacy policies, procedures, and technical controls.</p>
      </div>
      </Collapsible>
      <hr />
      <Collapsible trigger="5.My record is on OnGrid. I want to edit or delete it. How do I go about doing it?">
      <div >
        <p>At OnGrid, we have the provision where any individual with information or document(s) on OnGrid can request for edit or deletion of any/all information or document(s) by sending an email to contact@ongrid.in, with the subject "My data, my privacy".</p>
      </div>
      </Collapsible>
      <hr />
      <Collapsible trigger="6.I have a question which is not mentioned here. How do I reach out?">
      <div >
        <p>Please write to contact@ongrid.in, and we will get back to you. We are available during working hours from Monday to Friday, 0900 hours to 1800 hours, except on public holidays. Request your patience in case there is a delay in response. Each individual and each query is important for us, and we will definitely get back!</p>
      </div>
      </Collapsible>
      <hr />
      </div>
      
    </div>
  )
}

export default Faq