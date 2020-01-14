import React from 'react';
import { noop } from 'utils';
import { Button } from 'ui/atoms';

export function PageControls({
  onMarkAllAsDone = noop,
  onDeleteDone = noop,
  todos,
}) {
  return (
    <section className="controls">
      <Button
        onClick={() => onMarkAllAsDone()}
        disabled={todos.every(todo => todo.completed)}
      >
        Mark all as done
      </Button>
      <Button
        onClick={() => onDeleteDone()}
        disabled={!todos.some(todo => todo.completed)}
      >
        Delete all done
      </Button>
    </section>
  );
}
