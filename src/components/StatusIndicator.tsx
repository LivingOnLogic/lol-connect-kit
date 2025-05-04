import React from 'react';

export function StatusIndicator({ online }: { online: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className={\`w-2 h-2 rounded-full \${online ? 'bg-green-500' : 'bg-red-500'}\`}></span>
      <span className="text-xs">{online ? 'Online' : 'Offline'}</span>
    </div>
  );
}
