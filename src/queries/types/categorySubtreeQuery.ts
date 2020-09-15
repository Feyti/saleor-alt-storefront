/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categorySubtreeQuery
// ====================================================

export interface categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  level: number;
}

export interface categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node;
}

export interface categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children {
  __typename: "CategoryCountableConnection";
  edges: categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges[];
}

export interface categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * List of children of the category.
   */
  children: categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children | null;
}

export interface categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node;
}

export interface categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children {
  __typename: "CategoryCountableConnection";
  edges: categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges[];
}

export interface categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node_children_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * List of children of the category.
   */
  children: categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children | null;
}

export interface categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node_children_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node_children_edges_node;
}

export interface categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node_children {
  __typename: "CategoryCountableConnection";
  edges: categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node_children_edges[];
}

export interface categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * List of children of the category.
   */
  children: categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node_children | null;
}

export interface categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges_node;
}

export interface categorySubtreeQuery_category_children_edges_node_children_edges_node_children {
  __typename: "CategoryCountableConnection";
  edges: categorySubtreeQuery_category_children_edges_node_children_edges_node_children_edges[];
}

export interface categorySubtreeQuery_category_children_edges_node_children_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * List of children of the category.
   */
  children: categorySubtreeQuery_category_children_edges_node_children_edges_node_children | null;
}

export interface categorySubtreeQuery_category_children_edges_node_children_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: categorySubtreeQuery_category_children_edges_node_children_edges_node;
}

export interface categorySubtreeQuery_category_children_edges_node_children {
  __typename: "CategoryCountableConnection";
  edges: categorySubtreeQuery_category_children_edges_node_children_edges[];
}

export interface categorySubtreeQuery_category_children_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * List of children of the category.
   */
  children: categorySubtreeQuery_category_children_edges_node_children | null;
}

export interface categorySubtreeQuery_category_children_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: categorySubtreeQuery_category_children_edges_node;
}

export interface categorySubtreeQuery_category_children {
  __typename: "CategoryCountableConnection";
  edges: categorySubtreeQuery_category_children_edges[];
}

export interface categorySubtreeQuery_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * List of children of the category.
   */
  children: categorySubtreeQuery_category_children | null;
}

export interface categorySubtreeQuery {
  /**
   * Look up a category by ID or slug.
   */
  category: categorySubtreeQuery_category | null;
}

export interface categorySubtreeQueryVariables {
  categoryId: string;
}
