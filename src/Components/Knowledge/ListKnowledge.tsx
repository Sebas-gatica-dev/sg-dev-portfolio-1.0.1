import React from 'react'
import ListJavaStack from './ListJavaStack';
import ListJsStack from './ListJsStack';
import ListPythonStack from './ListPythonStack';
import ListTallStack from './ListTallStack';
import ListCertifications from '../Certifications/ListCertifications';

export default function ListKnowledge() {
  return (
    <section className="overflow-hidden relative h-auto bg-black">
      <ListTallStack />
      <ListJsStack />
      <ListJavaStack />
      <ListPythonStack />


       {/* certifications section */}
      <section>
        <ListCertifications />
      </section>

    </section>
  )
}
