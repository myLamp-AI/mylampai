import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Oval } from 'react-loader-spinner'; // Importing the loader component
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface LineAnalysis {
  line: string;
  clarity: { reasoning: string; score: number };
  depth: { reasoning: string; score: number };
  professionalism: { reasoning: string; score: number };
  relevance: { reasoning: string; score: number };
  technical_accuracy: { reasoning: string; score: number };
}

interface OverallAssessment {
  overall_score: number;
  strengths: string[];
  areas_for_improvement: string[];
  suggestions: string[];
}

interface AnalysisProps {
  analysisData: {
    analysis: {
      line_analysis: LineAnalysis[];
      overall_assessment: OverallAssessment;
    };
    answer: string;
    question: string;
  }[];
}

const Analysis: React.FC<AnalysisProps> = ({ analysisData }) => {
  const [expandedSections, setExpandedSections] = useState<boolean[]>(
    analysisData ? analysisData.map(() => false) : []
  );
  
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    if (analysisData && analysisData.length > 0) {
      console.log('Received Analysis Data: ', analysisData);
      // Reset expanded sections when analysisData changes
      setExpandedSections(analysisData.map(() => false));
      setLoading(false); // Stop loading once data is received
    }
  }, [analysisData]);

  if (loading) {
    // Show loader while data is being fetched
    return (
      <div className="flex justify-center items-center h-screen">
        <Oval color="#00BFFF" height={80} width={80} /> {/* Loader component */}
      </div>
    );
  }

  if (!analysisData || analysisData.length === 0) {
    return <p>No analysis data available.</p>;
  }

  // Toggle visibility of analysis and overall assessment
  const toggleSectionVisibility = (index: number) => {
    setExpandedSections((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const createChartData = (line: LineAnalysis) => {
    return {
      labels: ['Clarity', 'Depth', 'Professionalism', 'Relevance', 'Technical Accuracy'],
      datasets: [
        {
          label: 'Scores',
          data: [
            line.clarity.score,
            line.depth.score,
            line.professionalism.score,
            line.relevance.score,
            line.technical_accuracy.score,
          ],
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(153, 102, 255, 0.6)',
          ],
        },
      ],
    };
  };

  return (
    <div className="p-8 bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Your Analysis</h2>

      {/* Add a scrollable container */}
      <div style={{ maxHeight: '400px', overflowY: 'scroll' }} className="scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-gray-400">
        {/* Loop through all analysis data */}
        {analysisData.map((analysisItem, index) => (
          <div key={index} className="mb-8 border-2 p-10 rounded-xl border-primary-foreground">
            {/* Answer and Question */}
            <div className="mt-6 bg-primary rounded-lg border-4 border-primary-foreground shadow-lg p-4 text-lg text-white">
              <p>
                <strong>Question:</strong> {analysisItem.question || 'No question provided.'}
              </p>
              <p>
                <strong>Answer:</strong> {analysisItem.answer || 'No answer provided.'}
              </p>
            </div>

            {/* Toggle Button */}
            <button
              onClick={() => toggleSectionVisibility(index)}
              className="mt-4 mb-2 px-4 py-2 bg-primary flex justify-center items-center text-white rounded-md hover:bg-purple-600 font-semibold transition shadow-lg focus:outline-none"
            >
              {expandedSections[index] ? 'Hide Analysis' : 'Show Analysis'}
              <RiArrowDropDownLine
                className={`text-3xl ml-2 transition-transform ${expandedSections[index] ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Collapsible Content */}
            {expandedSections[index] && (
              <>
                {/* Line-by-Line Analysis */}
                <div className="mt-6">
                  <strong>Detailed analysis of your reply:</strong>
                  {analysisItem.analysis.line_analysis && analysisItem.analysis.line_analysis.length > 0 ? (
                    <div className="mt-2">
                      {analysisItem.analysis.line_analysis.map((line, lineIndex) => (
                        <div key={lineIndex} className="mb-4 p-4 bg-gray-100 rounded-lg">
                          <p>
                            <strong>Line:</strong> {line.line}
                          </p>

                          {/* Display a bar chart for the line analysis */}
                          <div className="mt-4">
                            <Bar data={createChartData(line)} options={{ responsive: true }} />
                          </div>

                          {/* Clarity */}
                          <div className="mt-2">
                            <p>
                              <strong>Clarity:</strong>
                            </p>
                            <p>Reasoning: {line.clarity.reasoning}</p>
                            <p>Score: {line.clarity.score}</p>
                          </div>

                          {/* Depth */}
                          <div className="mt-2">
                            <p>
                              <strong>Depth:</strong>
                            </p>
                            <p>Reasoning: {line.depth.reasoning}</p>
                            <p>Score: {line.depth.score}</p>
                          </div>

                          {/* Professionalism */}
                          <div className="mt-2">
                            <p>
                              <strong>Professionalism:</strong>
                            </p>
                            <p>Reasoning: {line.professionalism.reasoning}</p>
                            <p>Score: {line.professionalism.score}</p>
                          </div>

                          {/* Relevance */}
                          <div className="mt-2">
                            <p>
                              <strong>Relevance:</strong>
                            </p>
                            <p>Reasoning: {line.relevance.reasoning}</p>
                            <p>Score: {line.relevance.score}</p>
                          </div>

                          {/* Technical Accuracy */}
                          <div className="mt-2">
                            <p>
                              <strong>Technical Accuracy:</strong>
                            </p>
                            <p>Reasoning: {line.technical_accuracy.reasoning}</p>
                            <p>Score: {line.technical_accuracy.score}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No detailed line analysis provided.</p>
                  )}
                </div>

                {/* Overall Assessment */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Overall Assessment</h3>

                  {/* Overall Score */}
                  <p>
                    <strong>Overall Score:</strong> {analysisItem.analysis.overall_assessment.overall_score}
                  </p>

                  {/* Strengths */}
                  <div className="mt-4">
                    <strong>Strengths:</strong>
                    {analysisItem.analysis.overall_assessment.strengths &&
                    analysisItem.analysis.overall_assessment.strengths.length > 0 ? (
                      <ul className="list-disc list-inside">
                        {analysisItem.analysis.overall_assessment.strengths.map((strength, i) => (
                          <li key={i}>{strength}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No strengths provided.</p>
                    )}
                  </div>

                  {/* Areas for Improvement */}
                  <div className="mt-4">
                    <strong>Areas for Improvement:</strong>
                    {analysisItem.analysis.overall_assessment.areas_for_improvement &&
                    analysisItem.analysis.overall_assessment.areas_for_improvement.length > 0 ? (
                      <ul className="list-disc list-inside">
                        {analysisItem.analysis.overall_assessment.areas_for_improvement.map((area, i) => (
                          <li key={i}>{area}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No areas for improvement provided.</p>
                    )}
                  </div>

                  {/* Suggestions */}
                  <div className="mt-4">
                    <strong>Suggestions:</strong>
                    {analysisItem.analysis.overall_assessment.suggestions &&
                    analysisItem.analysis.overall_assessment.suggestions.length > 0 ? (
                      <ul className="list-disc list-inside">
                        {analysisItem.analysis.overall_assessment.suggestions.map((suggestion, i) => (
                          <li key={i}>{suggestion}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No suggestions provided.</p>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analysis;
