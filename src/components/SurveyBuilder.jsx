import React, { useState } from 'react';
import { Plus, Trash2, GripVertical, Type, CheckSquare, Circle, Star, Calendar, FileText, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const SurveyBuilder = () => {
  const [questions, setQuestions] = useState([
    { id: 1, type: 'text', title: 'What is your name?', required: true },
    { id: 2, type: 'multiple-choice', title: 'How satisfied are you with our service?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'], required: true },
  ]);

  const questionTypes = [
    { type: 'text', icon: Type, label: 'Text Input' },
    { type: 'multiple-choice', icon: CheckSquare, label: 'Multiple Choice' },
    { type: 'single-choice', icon: Circle, label: 'Single Choice' },
    { type: 'rating', icon: Star, label: 'Rating Scale' },
    { type: 'date', icon: Calendar, label: 'Date Picker' },
    { type: 'long-text', icon: FileText, label: 'Long Text' },
    { type: 'image', icon: Image, label: 'Image Upload' },
  ];

  const addQuestion = (type) => {
    const newQuestion = {
      id: Date.now(),
      type,
      title: 'New Question',
      required: false,
      options: type === 'multiple-choice' || type === 'single-choice' ? ['Option 1', 'Option 2'] : undefined
    };
    setQuestions([...questions, newQuestion]);
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const updateQuestion = (id, field, value) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, [field]: value } : q
    ));
  };

  const QuestionEditor = ({ question }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <GripVertical className="h-4 w-4 text-gray-400 cursor-move" />
          <span className="text-sm font-medium text-gray-600">
            {questionTypes.find(t => t.type === question.type)?.label}
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => deleteQuestion(question.id)}
          className="text-red-600 hover:text-red-700"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-3">
        <Input
          value={question.title}
          onChange={(e) => updateQuestion(question.id, 'title', e.target.value)}
          placeholder="Question title"
          className="font-medium"
        />
        
        {(question.type === 'multiple-choice' || question.type === 'single-choice') && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Options:</label>
            {question.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...question.options];
                    newOptions[index] = e.target.value;
                    updateQuestion(question.id, 'options', newOptions);
                  }}
                  placeholder={`Option ${index + 1}`}
                />
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const newOptions = [...(question.options || []), `Option ${(question.options?.length || 0) + 1}`];
                updateQuestion(question.id, 'options', newOptions);
              }}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Option
            </Button>
          </div>
        )}
        
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={question.required}
            onChange={(e) => updateQuestion(question.id, 'required', e.target.checked)}
            className="rounded border-gray-300"
          />
          <label className="text-sm text-gray-700">Required question</label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Survey Builder</h1>
          <p className="text-gray-600 mt-1">Create and customize your survey questions.</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">Preview</Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Save Survey</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Question Types Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-4">Question Types</h3>
            <div className="space-y-2">
              {questionTypes.map((type) => (
                <Button
                  key={type.type}
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => addQuestion(type.type)}
                >
                  <type.icon className="h-4 w-4 mr-2" />
                  {type.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Survey Editor */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Survey Details</h3>
              <div className="space-y-3">
                <Input placeholder="Survey Title" defaultValue="Customer Satisfaction Survey" />
                <Textarea placeholder="Survey Description" rows={3} />
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Questions</h3>
              {questions.map((question) => (
                <QuestionEditor key={question.id} question={question} />
              ))}
              
              {questions.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <FileText className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                  <p>No questions added yet. Select a question type to get started.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-4 sticky top-6">
            <h3 className="font-semibold text-gray-900 mb-4">Live Preview</h3>
            <div className="space-y-4 text-sm">
              <div className="p-3 bg-gray-50 rounded">
                <h4 className="font-medium mb-2">Customer Satisfaction Survey</h4>
                <p className="text-gray-600 text-xs">Survey description goes here...</p>
              </div>
              
              {questions.map((question, index) => (
                <div key={question.id} className="p-3 border border-gray-200 rounded">
                  <p className="font-medium text-xs mb-2">
                    {index + 1}. {question.title}
                    {question.required && <span className="text-red-500 ml-1">*</span>}
                  </p>
                  
                  {question.type === 'text' && (
                    <input className="w-full p-1 border border-gray-200 rounded text-xs" placeholder="Text input" />
                  )}
                  
                  {question.type === 'long-text' && (
                    <textarea className="w-full p-1 border border-gray-200 rounded text-xs" rows={2} placeholder="Long text input" />
                  )}
                  
                  {(question.type === 'multiple-choice' || question.type === 'single-choice') && (
                    <div className="space-y-1">
                      {question.options?.map((option, optIndex) => (
                        <div key={optIndex} className="flex items-center space-x-1">
                          <input 
                            type={question.type === 'multiple-choice' ? 'checkbox' : 'radio'} 
                            className="text-xs" 
                          />
                          <span className="text-xs">{option}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {question.type === 'rating' && (
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-3 w-3 text-gray-300" />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyBuilder;

