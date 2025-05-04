import React from 'react';

export function Tag({ label }: { label: string }) {
  return (
    <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded mr-1">
      {label}
    </span>
  );
}
