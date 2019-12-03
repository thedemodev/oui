import React, { useCallback, useEffect, useRef, useState } from 'react';
import { noop } from 'lodash';

/**
 * Map a color class to a human readable word that explains the context of when
 * the class is used. This is helpful for screen readers.
 * @param {String} className - an OUI class
 * @returns {String} English word describing the class provided
 */
export const getAssistiveTextFromColorClass = className => {
  const classMapping = {
    'bad-news': 'Error',
    brand: 'Info',
    'good-news': 'Success',
    warning: 'Alert',
  };

  let text = classMapping[className];

  if (!text) {
    throw new Error('Provided class name does not map to a word.');
  }

  return text;
};

/**
 * HOC that provides support for tracking keyboard actions inside an
 * element with an input. Tracks up & down arrow keys and invokes
 * a callback when enter is pressed.
 * @param {React.Component} Component - The component to wrap.
 * @returns {React.Component}
 */
export const keyboardTracker = Component => {
  const wrappedComponent = props => {
    const [currentFauxFocusIndex, setIndex] = useState(0);
    const [currentItemCount, setItemCount] = useState(0);
    const [onItemSelect, setOnItemSelect] = useState(() => noop);
    const ref = useRef(null);
    /**
     * Event handler for keyboard activity.
     * Increments/decrements the current index on up/down arrow keys
     *  -or-
     * Invokes the onItemSelect callback on enter
     */
    const handleKeydown = useCallback(
      event => {
        switch (event.key) {
          case 'ArrowUp':
            setIndex(Math.max(currentFauxFocusIndex - 1, 0));
            event.preventDefault();
            break;
          case 'ArrowDown':
            setIndex(Math.min(currentFauxFocusIndex + 1, currentItemCount - 1));
            event.preventDefault();
            break;
          case 'Enter':
            // Select the item for currentFauxFocusIndex
            onItemSelect(currentFauxFocusIndex);
            event.preventDefault();
            break;
          default:
            // No op
            break;
        }
      },
      [currentFauxFocusIndex, currentItemCount, onItemSelect]
    );

    useEffect(() => {
      ref.current.addEventListener('keydown', handleKeydown);
      return () => ref.current.removeEventListener('keydown', handleKeydown);
    }, [handleKeydown]);

    return (
      <Component
        { ...props }
        keyboardRef={ ref }
        currentFauxFocusIndex={ currentFauxFocusIndex }
        setItemCount={ setItemCount }
        setOnItemSelect={ setOnItemSelect }
      />
    );
  };
  wrappedComponent.displayName = `withkeyboardTracker(${Component.displayName})`;
  return wrappedComponent;
};
