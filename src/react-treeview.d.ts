import { Component, ReactNode, HTMLProps } from 'react';

declare namespace TreeView {
  interface TreeViewProps extends HTMLProps<HTMLDivElement> {
    collapsed?: boolean;
    defaultCollapsed?: boolean;
    nodeLabel: ReactNode;
    className?: string;
    itemClassName?: string;
    childrenClassName?: string;
    treeViewClassName?: string;
  }
}

declare class TreeView extends Component<TreeView.TreeViewProps> {
}

export = TreeView;
