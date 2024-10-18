import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  company: string;
  projectDetails: string;
}

export const EmailTemplate = ({
  name,
  email,
  company,
  projectDetails,
}: EmailTemplateProps) => (
  <div>
    <p>New email from: {name}</p>
    <p>
      sent from: {email}, {company}
    </p>
    <p>project details: {projectDetails}</p>
  </div>
);
