// import styled from "styled-components";

// import SEO from "../components/SEO";
// import { mediaQueries } from "../site-data";

import Header from "../components/Header";
import Footer from "../components/Footer";
// import NewsLetterSignUp from "../components/NewsLetterSignUp";
import PageContainer2 from "../components/PageContainer2";
import Region2 from "../components/Region2";
import { PageSectionContent } from "../components/Page.js";

let content = `
Last updated: January 7, 2025 

Powderhouse ("we," "us," or "School") is committed to protecting the privacy of our students, families, staff, and website visitors. This Privacy Policy ("Policy") explains how we collect, use, share, retain and transfer information you may provide when you interact with [www.powderhouse.org](http://www.powderhouse.org/), our learning management systems, educational applications, or through any of our services (collectively, our "Services").

# Introduction

As a lab school dedicated to innovative education, we take our responsibility to protect personal information seriously, particularly given that we serve students. This Policy outlines our practices for handling personal information while ensuring compliance with applicable education and privacy laws.

# Applicability

This Policy applies to:

- Students enrolled at Powderhouse
- Parents and legal guardians
- Staff and faculty members
- Website visitors and prospective families
- Volunteers and community partners
- All users of our Services

This Policy covers information we collect:

- Through enrollment and registration processes
- Via our educational platforms and learning management systems
- Through our website and associated applications
- During school activities and programs
- Through communication with staff and faculty
- Via surveys and feedback forms

# Information we collect

## Student Information

- Full name and date of birth
- Contact information including address, phone number, and email
- Educational records and academic progress
- Attendance records
- Health and medical information necessary for school operations
- Individual Education Plans (IEPs) if applicable
- Photos and videos from school activities (with consent)
- Behavioral records
- Emergency contact information

## Parent/Guardian Information

- Full name
- Contact information including address, phone number, and email
- Relationship to student
- Emergency contact details
- Financial information (if applicable for programs or activities)

## Website and Services Information

We automatically collect:

- IP addresses and browser information
- Device type and operating system
- Pages visited and time spent on our Services
- Referral sources
- Usage patterns and preferences

## Automatic Data Collection

We use various technologies for automatic data collection, including:

- Cookies
- Web beacons
- Analytics tools

You can control cookie settings through your browser, though this may limit some website functionality.

# Use of Information

We use collected information to:

- Provide educational services
- Track student progress and attendance
- Communicate with families
- Ensure student safety and security
- Comply with educational regulations
- Improve our educational programs
- Maintain school operations
- Process enrollment applications
- Respond to inquiries
- Send important updates and announcements. (Refer to [Powderhouse SMS Privacy Statement](https://www.notion.so/Powderhouse-SMS-Privacy-Statement-13ee38741fed80c1b1aec75a26c954b9?pvs=21) for SMS specific privacy details.)

# Protection of Student Privacy

We adhere to the Family Educational Rights and Privacy Act (FERPA) and applicable state education privacy laws. This includes:

- Protecting student educational records
- Requiring parental consent for release of student information
- Providing parents access to their child's educational records
- Maintaining confidentiality of sensitive information

# Information Sharing

We may share information:

- With educational service providers under strict confidentiality agreements
- With government agencies as required by law
- With emergency services when necessary
- With other schools upon student transfer (with consent)
- In anonymized form for research and improvement of educational practices

We do not sell personal information to third parties.

# Student Data Safeguards

We implement specific protections for student data:

- Encryption of sensitive information
- Regular security audits
- Staff training on data privacy
- Strict access controls
- Secure data disposal practices

# Rights of Parents and Eligible Students

Parents and eligible students have the right to:

- Review educational records
- Request correction of records
- Provide written consent for information disclosure
- File complaints about violations
- Opt-out of directory information sharing
- Request deletion of personal information (where applicable)

# Children’s Privacy

We collect information about children under 13 only with parental consent and in compliance with the Children's Online Privacy Protection Act (COPPA). Parents can review, delete, or refuse further collection of their child's information.

# Data Security

We implement appropriate security measures to protect personal information, including:

- Secure servers and firewalls
- Encryption of sensitive data
- Regular security assessments
- Employee training
- Incident response procedures

# SMS Privacy and Policies

## Introduction

Powderhouse ("we," "us," or "School") uses text messaging (SMS) as part of our commitment to maintain open lines of communication between our staff, students, and families. This SMS Communication Policy explains how we handle text message communications and protect your privacy when using our SMS communication system.

## Our Approach to SMS Communication

Unlike automated messaging systems, Powderhouse uses a shared inbox solution that enables direct, person-to-person communication between our staff and our school community. All text messages are manually sent and received by authorized school staff members.

## Information We Collect

When you enroll in our SMS communication system, we collect:

- Mobile phone numbers of students and/or parents/guardians
- Names associated with these numbers
- Message content and timestamp
- Any additional contact information you choose to share

## How We Use SMS Communications

We use text messaging to:

- Send important school announcements
- Communicate about student attendance
- Coordinate school activities
- Respond to student or parent inquiries
- Share emergency information
- Facilitate staff-student communication about educational matters

## Consent and Enrollment

During the registration and onboarding process, we request your consent to participate in our SMS communication system. By providing your mobile number and consent, you:

- Agree to receive text messages from Powderhouse staff
- Understand that these messages are sent manually by school staff
- Acknowledge that standard message and data rates may apply
- Confirm that you have authority to consent to receive messages at the provided number

## Privacy Protection

To protect your privacy:

- Access to the shared inbox is limited to authorized staff members
- All communications are treated as confidential educational records
- Messages are stored securely and retained according to educational record requirements
- Staff members are trained on appropriate use of the system
- We do not share your contact information with third parties
- We do not use your number for automated messaging or marketing

## Opting Out

You may opt out of SMS communications at any time by:

- Notifying the school administration in writing
- Responding "STOP" to any message
- Contacting us@powderhouse.org
- Updating your communication preferences in our system

Note that opting out of SMS communications may impact our ability to communicate time-sensitive information efficiently.

## Message Frequency and Timing

- Messages will typically be sent during school hours, plus or minus one hour (9:00 AM–6:00 PM)
- Urgent messages may be sent outside these hours if necessary
- Frequency varies based on school activities and individual communication needs

## Costs

Standard message and data rates from your carrier may apply. Powderhouse is not responsible for any charges you may incur from your mobile service provider.

## Security Considerations

While we maintain secure systems, please note that:

- Text messages may be visible on your phone's lock screen
- Messages may be stored on your device
- Carrier networks handle message delivery
- You are responsible for securing your mobile device

## Children's Privacy

For students under 13, we require:

- Parent/guardian consent before collecting mobile numbers
- Parent/guardian involvement in SMS communication setup
- Parent/guardian oversight of SMS communications

## Staff Guidelines

Our staff members follow strict guidelines when using the SMS system:

- Maintain professional communication standards
- Use school-approved devices and systems only
- Respect student and family privacy
- Document communications appropriately
- Respond during designated hours except in emergencies

# Changes to this Policy

We may update this Policy periodically. We will notify families of significant changes through our regular communication channels. Continued use of our Services after changes indicates acceptance of the updated Policy.

# Contact Information

For questions about this Policy or our privacy practices, contact:

Powderhouse Privacy Officer  
339R Summer Street, Somerville, MA, 02144  
us@powderhouse.org  
617.800.6992
`;
function PrivacyPage({}) {
  let accentColor = "--off-white";

  let regions = [
    <Header
      backgroundColor="--off-white"
      key="header"
      activeScribbleColor={accentColor}
    />,
    <Region2 key="privacyContent" style={{ marginBottom: "1rem" }}>
      <PageSectionContent markdown>{content}</PageSectionContent>
    </Region2>,
    <Footer
      backgroundColor="--off-black"
      accentColor={accentColor}
      key="footer"
    />,
  ];

  return (
    <>
      {/*<SEO meta={Meta} />*/}
      <style jsx global>{`
        h1,
        h2,
        h3 {
          margin-top: 1em;
          margin-bottom: 0.5em;
          line-height: 1em;
        }
      `}</style>
      <PageContainer2>{regions}</PageContainer2>
    </>
  );
}

// export async function getStaticProps() {
//   return {
//     props: await fetchAPI("/where?populate=*&[PageSections][populate]=PageImage"),
//   };
// }

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default PrivacyPage;
