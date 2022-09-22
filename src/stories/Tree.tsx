import React from 'react'
import TreeView from "rc-tree";
// import "rc-tree/assets/index.css";

const Tree = () => {
  const treeData = [{"key":"0-0","title":"Configuration","icon":"folder","children":[{"key":"0-0-0","title":"SQ_OMS","icon":"cog","isLeaf":true},{"key":"0-0-1","title":"SQ_OPTIMIZATION","icon":"cog","isLeaf":true},{"key":"0-0-2","title":"SQ_OPTIMIZER","icon":"cog","isLeaf":true},{"key":"0-0-3","title":"SQ_ORDER_MANAGEMENT","icon":"cog","isLeaf":true},{"key":"0-0-4","title":"SQ_UI_MASTER_COLUMNS","icon":"cog","isLeaf":true},{"key":"0-0-5","title":"SQ_UI_MASTER_NAME","icon":"cog","isLeaf":true},{"key":"0-0-6","title":"SQ_UI_MASTER_PRICE","icon":"cog","isLeaf":true},{"key":"0-0-7","title":"SQ_UI_MASTER_TOLTIP","icon":"cog","isLeaf":true}]}]
  return (
    <div>
      HI
      <TreeView
        treeData={treeData}
        defaultExpandAll={false}
        expandAction="click"
        // filterTreeNode={({ title }) => {
        //   if (searchValue !== "")
        //     return String(title)
        //       .toLowerCase()
        //       .includes(searchValue.toLowerCase());
        //   return false;
        // }}
        // onSelect={(_, info) => {
        //   handleNodeSelect(info.node);
        // }}
        onRightClick={info => console.log(info)}
      />
    </div>
  )
}

export default Tree