const getTreeByPath = (treeData, path) => {
  let arrayPath = path.split('/');
  let directoryObj = [treeData];

  for (let i = 0; i < arrayPath.length; i++) {
    for (let j = 0; j < directoryObj.length; j++) {
      if (directoryObj[j].name === arrayPath[i]) {

        if(arrayPath.length === (i+1)){
          directoryObj = directoryObj[j]
        } else
        directoryObj = directoryObj[j].children;
        break;
      }
    }
  }
  return directoryObj;
}

export const removeObjectTree = (treeData, path) => {
  let arrayPath = path.split('/');
  const newTree = JSON.parse(JSON.stringify(treeData));
  let directoryObj = [newTree];
  for (let i = 0; i < arrayPath.length - 1; i++) {
    for (let j = 0; j < directoryObj.length; j++) {
      if (directoryObj[j].name === arrayPath[i]) {
        directoryObj = directoryObj[j].children;
        break;
      }
    }
  }
  let objectForRemoveName = arrayPath[arrayPath.length - 1];
  for (let j = 0; j < directoryObj.length; j++) {
    if (directoryObj[j].name === objectForRemoveName) {
      if (j > -1) {
        directoryObj.splice(j, 1);
      }
      break;
    }
  }
  return newTree;
}

export const setOpenDirectory = (treeData, path, isOpen) => {
  const newTree = JSON.parse(JSON.stringify(treeData));
  getTreeByPath(newTree, path).isOpen = isOpen;
  return newTree;
}

export const createDirectory = (treeData, path, dirName) => {
  const newTree = JSON.parse(JSON.stringify(treeData));
  getTreeByPath(newTree, path).children.push({
    name: dirName,
    isOpen: true,
    children: []
  });
  return newTree;
}

export const createItem = (treeData, path, itemName) => {
  const newTree = JSON.parse(JSON.stringify(treeData));
  getTreeByPath(newTree, path).children.push({
    name: itemName
  });
  return newTree;
}
