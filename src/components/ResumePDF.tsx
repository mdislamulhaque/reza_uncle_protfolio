import React, { forwardRef } from 'react';
import { developerProfile, experienceData, skillsData, projectsData, testimonialsData } from '../data';

export const ResumePDF = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="p-8 max-w-4xl mx-auto bg-white text-gray-800 font-sans leading-relaxed text-sm">
      {/* Header */}
      <header className="border-b-2 border-gray-900 pb-4 mb-6">
        <h1 className="text-3xl font-bold uppercase tracking-wide text-gray-900">{developerProfile.name}</h1>
        <p className="text-lg font-semibold text-indigo-700 mt-1">{developerProfile.title}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600 mt-3">
          <span>📍 {developerProfile.location}</span>
          <span>✉️ {developerProfile.email}</span>
          <span>📞 {developerProfile.phone}</span>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-base font-bold uppercase tracking-wider text-gray-900 border-b pb-1 mb-2">Professional Summary</h2>
        <p className="text-gray-700 text-justify">{developerProfile.bio}</p>
        <p className="text-gray-700 text-justify mt-2">{developerProfile.journey}</p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-base font-bold uppercase tracking-wider text-gray-900 border-b pb-1 mb-3">Work Experience</h2>
        <div className="space-y-4">
          {experienceData.filter(e => e.type === 'experience').map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-gray-900">{exp.role} <span className="font-normal text-gray-600">| {exp.company}</span></h3>
                <span className="text-xs font-semibold text-indigo-600">{exp.duration}</span>
              </div>
              <ul className="list-disc list-inside mt-1 text-gray-700 space-y-0.5">
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Key Projects */}
      <section className="mb-6">
        <h2 className="text-base font-bold uppercase tracking-wider text-gray-900 border-b pb-1 mb-3">Featured Projects</h2>
        <div className="space-y-3">
          {projectsData.map((project) => (
            <div key={project.id}>
              <h3 className="font-bold text-gray-900">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <div className="flex gap-2 mt-1">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded border">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-base font-bold uppercase tracking-wider text-gray-900 border-b pb-1 mb-2">Technical Skills & Expertise</h2>
        <div className="flex flex-wrap gap-2">
          {skillsData.map((skill, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-md font-medium border border-gray-200">
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-base font-bold uppercase tracking-wider text-gray-900 border-b pb-1 mb-3">Education</h2>
        <div className="space-y-3">
          {experienceData.filter(e => e.type === 'education').map((edu) => (
            <div key={edu.id} className="flex justify-between items-baseline">
              <div>
                <h3 className="font-bold text-gray-900">{edu.role}</h3>
                <p className="text-xs text-gray-600">{edu.company}</p>
              </div>
              <span className="text-xs font-semibold text-indigo-600">{edu.duration}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations / Highlights */}
      <section>
        <h2 className="text-base font-bold uppercase tracking-wider text-gray-900 border-b pb-1 mb-3">Professional Recommendations</h2>
        <div className="space-y-3">
          {testimonialsData.map((rec) => (
            <div key={rec.id} className="text-xs border-l-2 border-indigo-600 pl-3 italic text-gray-700">
              <p>"{rec.content}"</p>
              <p className="font-bold not-italic text-gray-900 mt-1">— {rec.name}, {rec.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
});

ResumePDF.displayName = 'ResumePDF';