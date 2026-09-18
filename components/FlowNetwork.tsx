
"use client";

import { memo } from "react";
import {
  ReactFlow,
  Background,
  Handle,
  Position,
  type Node,
  type Edge,
  type NodeProps,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

// ─── Custom node ─────────────────────────────────────────────

type TechNodeData = {
  label: string;
  subtitle: string;
  icon: string;
};

const TechNode = memo(
  ({ data }: NodeProps<Node<TechNodeData>>) => {
    return (
      <div className="group relative min-w-[150px] rounded-2xl border border-white/10 bg-[#111827]/90 px-4 py-3 shadow-[0_0_30px_rgba(99,102,241,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_35px_rgba(99,102,241,0.3)]">
        <Handle
          type="target"
          position={Position.Left}
          className="!h-2 !w-2 !border-0 !bg-indigo-400"
        />

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10 text-lg">
            {data.icon}
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              {data.label}
            </p>

            <p className="text-[10px] text-gray-400">
              {data.subtitle}
            </p>
          </div>
        </div>

        <Handle
          type="source"
          position={Position.Right}
          className="!h-2 !w-2 !border-0 !bg-cyan-400"
        />
      </div>
    );
  }
);

TechNode.displayName = "TechNode";

// ─── Network data ────────────────────────────────────────────

const nodes: Node<TechNodeData>[] = [
  {
    id: "ai",
    type: "tech",
    position: { x: 0, y: 120 },
    data: {
      label: "AI Engine",
      subtitle: "Intelligence",
      icon: "✦",
    },
  },
  {
    id: "cloud",
    type: "tech",
    position: { x: 245, y: 30 },
    data: {
      label: "Cloud",
      subtitle: "Infrastructure",
      icon: "☁",
    },
  },
  {
    id: "api",
    type: "tech",
    position: { x: 245, y: 210 },
    data: {
      label: "API Layer",
      subtitle: "Connectivity",
      icon: "⌘",
    },
  },
  {
    id: "saas",
    type: "tech",
    position: { x: 490, y: 120 },
    data: {
      label: "SaaS Products",
      subtitle: "Business Impact",
      icon: "◈",
    },
  },
];

const edges: Edge[] = [
  {
    id: "ai-cloud",
    source: "ai",
    target: "cloud",
    animated: true,
    style: {
      stroke: "#818cf8",
      strokeWidth: 2,
    },
  },
  {
    id: "ai-api",
    source: "ai",
    target: "api",
    animated: true,
    style: {
      stroke: "#818cf8",
      strokeWidth: 2,
    },
  },
  {
    id: "cloud-saas",
    source: "cloud",
    target: "saas",
    animated: true,
    style: {
      stroke: "#22d3ee",
      strokeWidth: 2,
    },
  },
  {
    id: "api-saas",
    source: "api",
    target: "saas",
    animated: true,
    style: {
      stroke: "#22d3ee",
      strokeWidth: 2,
    },
  },
];

const nodeTypes = {
  tech: TechNode,
};

// ─── Component ───────────────────────────────────────────────

export default function FlowNetwork() {
  return (
    <div className="relative h-[380px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#080b14]/60">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[100px]" />

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{
          padding: 0.2,
        }}
        nodesDraggable={true}
        nodesConnectable={false}
        elementsSelectable={true}
        zoomOnScroll={false}
        panOnScroll={false}
        minZoom={0.5}
        maxZoom={1.3}
        proOptions={{ hideAttribution: true }}
      >
        <Background
          color="#334155"
          gap={24}
          size={1}
        />
      </ReactFlow>

      {/* Network label */}
      <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-md">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
        <span className="text-[10px] tracking-widest text-gray-400">
          SYSTEM ONLINE
        </span>
      </div>
    </div>
  );
}