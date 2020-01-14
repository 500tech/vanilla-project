import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { createRouterDecorator } from 'ui/story-utils';
import { TodoItem } from './TodoItem';

export default {
  title: 'orgs/Todos/mols/TodoItem',
  decorators: [createRouterDecorator()],
};

export const StaticItem = () => {
  const todo = { id: 1, title: 'This is todo', completed: true };
  return <TodoItem todo={todo} />;
};

export const DynamicItem = () => {
  const todo = {
    id: 1,
    title: text('Title', 'This is todo'),
    completed: boolean('Completed', true),
  };
  return (
    <TodoItem
      todo={todo}
      onToggle={action('toggle')}
      onDelete={action('delete')}
    />
  );
};
