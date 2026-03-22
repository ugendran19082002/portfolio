import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate = ({
  name,
  email,
  subject,
  message,
}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>New Message from {name} regarding {subject}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={headerSection}>
          <Heading style={h1}>New Contact Inquiry</Heading>
          <Text style={subtitle}>Received through your portfolio website</Text>
        </Section>
        
        <Section style={infoSection}>
          <Text style={label}>From</Text>
          <Text style={value}>{name} ({email})</Text>
          
          <Hr style={hr} />
          
          <Text style={label}>Subject</Text>
          <Text style={value}>{subject}</Text>
        </Section>

        <Section style={messageSection}>
          <Text style={label}>Message</Text>
          <Text style={messageText}>{message}</Text>
        </Section>

        <Hr style={hr} />

        <Section style={footerSection}>
          <Text style={footer}>
            This email was sent via the contact form on your portfolio.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#050505',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '580px',
  backgroundColor: '#0a0a0a',
  borderRadius: '16px',
  border: '1px solid #1e1e1e',
};

const headerSection = {
  textAlign: 'center' as const,
  marginBottom: '40px',
};

const h1 = {
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '0',
  padding: '0',
};

const subtitle = {
  color: '#60a5fa',
  fontSize: '14px',
  margin: '8px 0 0',
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
};

const infoSection = {
  marginBottom: '32px',
};

const label = {
  color: '#4b5563',
  fontSize: '12px',
  fontWeight: 'bold',
  textTransform: 'uppercase' as const,
  margin: '0 0 4px',
};

const value = {
  color: '#ffffff',
  fontSize: '16px',
  margin: '0',
};

const messageSection = {
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  padding: '24px',
  borderRadius: '12px',
  border: '1px solid #1e1e1e',
};

const messageText = {
  color: '#d1d5db',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0',
};

const hr = {
  borderColor: '#1e1e1e',
  margin: '24px 0',
};

const footerSection = {
  textAlign: 'center' as const,
};

const footer = {
  color: '#4b5563',
  fontSize: '12px',
};
