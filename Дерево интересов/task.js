const elements = document.querySelectorAll('.interest__check');

for (let elem of elements) { 
  elem.onchange = () => {
    parentChild (elem)
    childParent (elem)
  } 
}

function parentChild (elem) {
  let listChild = examinationChild (elem)
  if (listChild) {
    checkedChild (elem, listChild)
    for (let child of listChild) {
      parentChild (child)
    }
  }
}

function childParent (elem) {
  let childrens = listChild (elem)
  let parent = examinationParent (elem)
  if (parent) {
    checkedParent (childrens, parent)
    childParent(parent)
  }
}
  
function examinationChild (elem) {
  let li = elem.closest('li')
  let ul = li.querySelector('ul')
  if (ul) {
    let childrens = ul.querySelectorAll('.interest__check')
    return childrens
  }
  else {return false}
}

function examinationParent (child) {
  let ul = child.closest('ul')
  let siblingUl = ul.previousElementSibling
  if (siblingUl) {
    let parent = siblingUl.querySelector('input')
    return parent
  }
  else {return false}
}

function listChild(child) {
  let ul = child.closest('ul')
  let listChild = ul.querySelectorAll('input')
  return listChild
}

function checkedChild (parent, childrens) {
  if (parent.checked == true) {
    for (let child of childrens) {
      child.checked = true
    }
  }
  else if (parent.checked == false) {
    for (let child of childrens) {
      child.checked = false
    }
  }
}

function checkedParent (childrens, parent) { 
  let childrensArr = Array.from(childrens)
  
  if (childrensArr.some(checked) && (!childrensArr.every(checked))) {
    parent.indeterminate = true
  }
  else if (childrensArr.some(indeterminate)) {
    parent.indeterminate = true
  }
  else if (childrensArr.every(checked)) {
    parent.indeterminate = false
    parent.checked = true
  }
  else if (!childrensArr.every(checked) || !childrensArr.every(indeterminate)) {
    parent.indeterminate = false
    parent.checked = false
  }
  else if (childrensArr.every(!indeterminate) && (childrensArr.every(!checked))) {
    parent.indeterminate = false
    parent.checked = false
  }
}

function checked(elem) {
  return elem.checked
}

function indeterminate(elem) {
  return elem.indeterminate
}
