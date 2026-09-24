import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`faq-item ${isOpen ? 'active' : ''}`}>
            <button
              type="button"
              className="faq-header"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <BsChevronDown className="faq-icon" />
            </button>
            {isOpen && (
              <div className="faq-body animate-fade-in">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
