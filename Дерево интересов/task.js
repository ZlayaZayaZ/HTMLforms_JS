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
  }

function isBigEnough(element) {
  return element.checked
}
