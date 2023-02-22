const elements = document.querySelectorAll('.interests.interests_active');

for (let elem of elements) {
    const childrens = elem.querySelectorAll('input')
    const childrensArr = Array.from(childrens)
    const parent = elem.previousElementSibling.querySelector('input')

    parent.onchange = () => {
      if (parent.checked == true) {
        for (let child of childrens) {
          child.checked = true
        }
      }
      else {
        for (let child of childrens) {
          child.checked = false
        }
      }
    }

  for (let child of childrens) { 
    
    child.onchange = () => {
      while (examinationParent (child)) {
        let siblingsArr, parent = createArr(child)
        examination(siblingsArr, parent)
        child = parent
      }
    } 
  }
  
function examinationParent (child) {
  const ul = child.closest('ul')
  const parent = ul.previousElementSibling.querySelector('input')
  return parent
}

function createArr (child) {
  let siblings = []
  let parent = examinationParent (child)
    // childrensArr2.push(child)
    let li = child.closest('li')
    let next = li.nextElementSibling
    while (next != null) {
      let input = next.querySelector('input')
      siblings.push(input)
      li = input.closest('li')
      next = li.nextElementSibling
    }
    let previous = li.previousElementSibling
    while (previous != null) {
      let input = previous.querySelector('input')
      siblings.push(input)
      li = input.closest('li')
      previous = li.previousElementSibling
    }
    let siblingsArr = Array.from(siblings)
    return siblingsArr, parent
}

function examination (childrensArr, parent) {
  if (childrensArr.some(isBigEnough) && (!childrensArr.every(isBigEnough))) {
    parent.indeterminate = true
  }
  else if (childrensArr.every(isBigEnough)) {
    parent.indeterminate = false
    parent.checked = true
  }
  else {
    parent.indeterminate = false
    parent.checked = false
  }
}
}

function isBigEnough(element) {
  return element.checked
}
