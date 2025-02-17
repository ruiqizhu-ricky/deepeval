module.exports = {
  tutorials: [
    "tutorial-introduction",
    "tutorial-setup",
    // {
    //   type: "category",
    //   label: "RAG QA Agent ",
    //   items: [
    //     "qa-agent-introduction",
    //     "qa-agent-generating-a-synthetic-dataset",
    //     "qa-agent-defining-an-evaluation-criteria",
    //     "qa-agent-choosing-metrics",
    //   ],
    //   collapsed: false,
    // },
    {
      type: "category",
      label: "Legal Document Summarizer",
      items: [
        "legal-doc-summarizer-introduction",
        "legal-doc-summarizer-defining-a-summarization-criteria",
        "legal-doc-summarizer-selecting-your-metrics",
        "legal-doc-summarizer-running-an-evaluation",
        "legal-doc-summarizer-iterating-on-hyperparameters",
        "legal-doc-summarizer-catching-llm-regressions",
        "legal-doc-summarizer-maintaining-a-dataset",
        "legal-doc-summarizer-pulling-dataset",
      ],
      collapsed: true,
    },
    {
      type: "category",
      label: "Medical Chatbot",
      items: [
        "tutorial-llm-application-example",
        "tutorial-metrics-defining-an-evaluation-criteria",
        "tutorial-metrics-selection",
        "tutorial-evaluations-running-an-evaluation",
        "tutorial-evaluations-hyperparameters",
        "tutorial-evaluations-catching-regressions",
        "tutorial-dataset-synthesis",
        "tutorial-dataset-confident",
        "tutorial-production-monitoring",
        "tutorial-production-evaluation",
      ],
      collapsed: true,
    },
  ],
};
