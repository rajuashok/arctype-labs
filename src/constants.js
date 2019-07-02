import React from 'react';

export const arctypeFeatures = [
  {
    title: <span>Arctype <span className="text-green">SQL</span></span>,
    description: <div className="feat-margin-sql">The next-generation SQL client built for collaboration</div>,
    icon: "/sql-icon.svg",
    disabled: false
  },
  {
    title: <span>Arctype <span className="text-orange">Dataprep</span></span>,
    description: <div className="feat-margin-dataprep">Intelligent visual data preparation and date cleaning</div>,
    icon: "/dataprep-icon.svg",
    disabled: true
  },
  {
    title: <span>Arctype <span className="text-blue">Datasets</span></span>,
    description: <div className="feat-margin-dataset">Share and manage datasets across teams</div>,
    icon: "/datasets-icon.svg",
    disabled: true
  },
  {
    title: <span>Arctype <span className="text-pink">ML</span></span>,
    description: <div className="feat-margin-ml">No-code machine learning</div>,
    icon: "/ml-icon.svg",
    disabled: true
  },
]